import jwt from "jsonwebtoken";

export const tokenCheck = async (req, res, next) => {
  const token = req.cookies.authToken;
  if (!token) {
    // return res.redirect("/");
    return res.send("invalid");
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_TOKEN);
    req.user = decoded;

    next();
  } catch (error) {
    return res.send(error); // Redirect if token is invalid or expired
  }
};
