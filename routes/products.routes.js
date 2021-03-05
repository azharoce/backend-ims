const express = require('express');
const app = express();

const productsRoute = express.Router();
let products = require('../model/products');

// Add products
productsRoute.route('/add-products').post((req, res, next) => {
    products.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});

// Get All products
productsRoute.route('/').get((req, res) => {
    products.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// Get products
productsRoute.route('/read-products/:id').get((req, res) => {
    products.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})


// Update products
productsRoute.route('/update-products/:id').put((req, res, next) => {
    products.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data)
            console.log('products updated successfully!')
        }
    })
})

// Delete products
productsRoute.route('/delete-products/:id').delete((req, res, next) => {
    products.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})

module.exports = productsRoute;