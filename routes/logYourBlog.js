import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
    res.render("pages/logYourBlog.ejs", { title: "Log Your Blog" });
});

export default router;
