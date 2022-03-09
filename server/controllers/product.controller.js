const Product = require('../models/product.model')

module.exports.createProduct = (req, res) => {
    Product.create(req.body)
        .then(product => {
            return res.json({product: product})
        })
        .catch(err => {
            return res.json({ message: "Something went wrong...", error: err})
        });
}

module.exports.getOneProduct = (req, res) => {
    Product.findById(req.params.id)
        .then(product => {
            return res.json({product: product})
        })
        .catch(err => {
            return res.json({ message: "Something went wrong...", error: err})
        });
}

module.exports.getAllProducts = (req, res) => {
    Product.find({})
        .then(products => {
            return res.json({products: products})
        })
        .catch(err => {
            return res.json({ message: "Something went wrong...", error: err})
        });
}

module.exports.updateOneProduct = (req, res) => {
    Product.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedProduct => {
            return res.json({product: updatedProduct})
        })
        .catch(err => {
            return res.json({ message: "Something went wrong...", error: err})
        });
}

module.exports.deleteOneProduct = (req, res) => {
    Product.findByIdAndRemove(req.params.id)
        .then(result => {
            return res.json({ result: result })
        })
        .catch(err => {
            return res.json({ message: "Something went wrong...", error: err})
        })
}