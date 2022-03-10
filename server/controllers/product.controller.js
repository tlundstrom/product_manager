const Product = require('../models/product.model')

module.exports = {

    createProduct : (req, res) => {
        Product.create(req.body)
            .then(product => {
                return res.json(product)
            })
            .catch(err => {
                return res.json({ message: "Something went wrong...", error: err})
            });
    },

    getAllProducts : (req, res)=>{
        Product.find()
            .then((products)=>{
                res.json(products)
            })
            .catch(err => {
                return res.json({ message: "Something went wrong...", error: err})
            });
    },

    getOneProduct : (req, res) => {
        Product.findById(req.params.id)
            .then(product => {
                return res.json(product)
            })
            .catch(err => {
                return res.json({ message: "Something went wrong...", error: err})
            });
    },

    updateOneProduct : (req, res) => {
        Product.findByIdAndUpdate(
            req.params.id ,
            req.body,
            { new: true, runValidators: true }
        )
            .then(updatedProduct => {
                return res.json(updatedProduct)
            })
            .catch(err => {
                return res.json({ message: "Something went wrong...", error: err})
            });
    },

    deleteOneProduct: (req, res) => {
        console.log(req.params.id);
        Product.deleteOne({_id: req.params.id})
            .then(deleted => {
                return res.json(deleted);
            })
            .catch(err => {
                return res.json({ message: "Something went wrong...", error: err})
            });
    }
}
