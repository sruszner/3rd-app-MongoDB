const productSchema = require('../db/productModel');

const homeController = (req, res) =>{
    res.render('index');
}

const updateHome = (req, res) => {
    let product = new productSchema ({product: req.body.newProduct, stock: req.body.stock}) 
    product.save(function (err, book) {
        if (err) return console.error(err);
        console.log(product._id + " saved to products collection.");
    });
    res.redirect('products');
} 

module.exports = {
    homeController,
    updateHome
};