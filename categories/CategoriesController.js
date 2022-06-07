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

router.get("/admin/categories", (req, res) => {
    Category.findAll().then(categories => {
        res.render("admin/categories/index", {categories: categories});
    })   
});
  
router.post("/categories/delete", (req, res) => {
    var id = req.body.id;
    if (id != undefined) {
        if (!isNaN(id)) {

            Category.destroy({
                where: {
                    id: id
                }
            }).then(() => {
                res.redirect("/admin/categories");
            });
            
        } else {
            res.redirect("/admin/caregories");
        }
    } else {
        res.redirect("/admin/categories");
    }
});
module.exports = router;
