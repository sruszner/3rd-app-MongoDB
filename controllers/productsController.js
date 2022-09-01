const products = require('../db/productModel')

const homeProducts = (req, res) => {
    products.find()
    .then((results) => {
        res.render('products', { tabla1: 'PRODUCTS', results});
    })
    .catch((err) => {
        console.log(`${err}`);
    })
}

const updateProduct = (req, res) => {
    console.log(req.body)
    const filter = { _id: req.body.id }
    products.findOneAndUpdate(filter, {
        product: req.body.product, 
        stock: req.body.stock 
    })
    .catch((err) => {
        console.log(`${err}`);
    })
    console.log('Product id: ' + req.body.id + ' updated successfully');
    res.redirect('products');
}

const deleteProduct = (req, res) => {
    console.log(req.body)
    const filter = { _id: req.body.id }
    products.deleteOne({
        _id: filter
    })
    .catch((err) => {
        console.log(`${err}`);
    })
    console.log('Product id: ' + req.body.id + ' deleted successfully');
    res.redirect('products');
}

module.exports = {
    homeProducts,
    updateProduct,
    deleteProduct
};