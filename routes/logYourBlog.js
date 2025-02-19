import express from "express";
const router = express.Router();

router.get("/logyourblog", (req, res) => {
    res.render("pages/logYourBlog", { title: "log your blog" });
});

export default router;
