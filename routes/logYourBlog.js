import express from "express";

const router = express.Router();

router.get("/logyoublog", (req, res) => {
    res.render("pages/logYourBlog", {titel: "Log You Blog"});
});

export default router;