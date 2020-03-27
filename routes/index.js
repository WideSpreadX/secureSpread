const express = require("express");
const router = express.Router();
const { ensureAuthenticated } = require("../config/auth");

// Welcome Page
router.get("/", (req, res) => res.render("welcome"));

// Dashboard Page
router.get("/dashboard", ensureAuthenticated, (req, res) =>
  res.render("dashboard")
  );


// Academy
router.get("/academy", ensureAuthenticated, (req, res) => {
  res.render("academy")
});

// 
router.get("/business", ensureAuthenticated, (req, res) => {
  res.render("business")
});
// Shopping
router.get("/shopping", ensureAuthenticated, (req, res) => {
  res.render("shopping")
});
// Leisure
router.get("/leisure", ensureAuthenticated, (req, res) => {
  res.render("leisure")
});
// Medical
router.get("/medical", ensureAuthenticated, (req, res) => {
  res.render("medical")
});
// Financial
router.get("/financial", ensureAuthenticated, (req, res) => {
  res.render("financial")
});
// Creation
router.get("/creation", ensureAuthenticated, (req, res) => {
  res.render("creation")
});
// Storage
router.get("/storage", ensureAuthenticated, (req, res) => {
  res.render("storage")
});
// SocialSpread
router.get("/socialspread", ensureAuthenticated, (req, res) => {
  res.render("socialspread")
});
// COVID-AR
router.get("/covid-ar", ensureAuthenticated, (req, res) => {
  res.render("covid-ar")
});

// Events
router.get("/event", ensureAuthenticated, (req, res) => {
  res.render("event")
});

// News
router.get("/news", ensureAuthenticated, (req, res) => {
  res.render("news")
});

// SpreadSpace
router.get("/spreadspace", ensureAuthenticated, (req, res) => {
  res.render("spreadspace")
});

module.exports = router;
