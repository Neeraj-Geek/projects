import filePath from "../utils/filePath.js";

export const loginHtmlPageController = (req, res) => {
  res.sendFile(filePath("html", "login.html"));
};

export const signupHtmlPageController = (req, res) => {
  res.sendFile(filePath("html", "signup.html"));
};

export const dashboardHtmlPageController = (req, res) => {
  res.sendFile(filePath("html", "dashboard.html"));
};
export const aboutHtmlPageController = (req, res) => {
  res.sendFile(filePath("html", "about.html"));
};
export const contactHtmlPageController = (req, res) => {
  res.sendFile(filePath("html", "contact.html"));
};
