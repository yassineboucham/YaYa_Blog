import express from "express";
const router = express.Router();

router.get("/tendence", (req, res) => {
    res.render('pages/tendece', {type: "All"});
});

router.get("/tendence/Resepis", (req, res) => {
    res.render('pages/tendece', {type: "Resepis"});
});

router.get("/tendence/Movies", (req, res) => {
    res.render('page/tendece', {type: "Movies"});
});

router.get("/tendece/Books", (req, res) => {
    res.render('/page/tendece', {type: "Books"});
});

export default router;