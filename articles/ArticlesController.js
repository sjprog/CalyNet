const express = require("express");
const router = express.Router();
const Category = require("../categories/Category");
const Article = require("./Article");
const slugify = require("slugify");

router.get("/articles", (req, res) => {
    res.send("ROTA DE ARTIGOS!")
});

router.get("/admin/articles/new", (req, res) => {
    res.render("admin/articles/new")
});

router.post("/articles/save", (req, res) => {
    var title = req.body.title;
    var body = req.body.body;
    var Category = req.body.category;

    Article.create({
        title: title,
        slug: slugify(title),
        body: body,
        categoryId: category

    });



});

module.exports = router;
