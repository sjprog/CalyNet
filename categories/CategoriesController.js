const express = require("express");
const { is } = require("express/lib/request");
const router = express.Router();
const Category = require("./Category");
const slugify = require("slugify"); 

router.get("/categories", (req, res) => {
    res.send("ROTA DE CATEGORIAS!")
});

router.get("/admin/categories/new", (req, res) => {
    res.render("admin/categories/new");
});

router.post("/categories/save", (req, res) => {
    var title = req.body.title;
    if (title != undefined) {    

        Category.create({
            title: title,
            slug: slugify(title)
        }).then(() => {
            res.redirect("/");
        })
        
    } else {
        res.redirect("/admin/categories/new");
    }
});

module.exports = router;
