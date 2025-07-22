export const responseUtil = (
  res,
  message = "Success",
  status = 200,
  success = true,
  additionalData = {}
) => {
  return res.status(status).json({
    success,
    message,
    ...additionalData,
  });
};
