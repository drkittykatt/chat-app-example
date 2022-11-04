const express = require("express");
const validateForm = require("../controllers/validateForm");
const router = express.Router();

router.post("/auth/login", (req, res) => {
  validateForm(req, res);
});

router.post("/auth/signup", (req, res) => {
  validateForm(req, res);
});
module.exports = router;