import express from "express";
const router = express.Router();

// Base route
router.get("/", (req, res) => {
    res.render("pages/tendence", { type: "All" });
});

// Subcategories
router.get("/Recipes", (req, res) => {
    console.log("Received request for /tendence/Recipes");
    res.render("pages/tendence", { type: "Recipes" });
});

router.get("/Movies", (req, res) => {
    res.render("pages/tendence", { type: "Movies" });
});

router.get("/Books", (req, res) => {
    res.render("pages/tendence", { type: "Books" });
});

export default router;
