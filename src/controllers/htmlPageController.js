import filePath from "../utils/filePath.js";

export const loginHtmlPageController = (req, res) => {
  res.sendFile(filePath("html", "login.html"));
};

export const signupHtmlPageController = (req, res) => {
  res.sendFile(filePath("html", "signup.html"));
};
