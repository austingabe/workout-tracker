// Dependencies
const router = require("express").Router();
const path = require("path");

// Displays html files from `public` directory
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

router.get("/exercise?", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
})

router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"))
})

module.exports = router;