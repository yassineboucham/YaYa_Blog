import express from "express";

const app = express();
const port = 3000;

app.set('view engin','ejs');

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.listen(port, () => {
    console.log("port lissen on" + port);
});
