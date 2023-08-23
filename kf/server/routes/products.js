//API endpoints
const express = require('express')

const ProductSchema = require('../models/products')

const router = express()

router.post('/api/newProducts', async (req, res) => {
    const newProduct  = new ProductSchema({
        name: req.body.name,
        price: req.body.price,
        stock: req.body.stock,
        description: req.body.description,
        variations: {
            color1: req.body.variations.color1,
            color2: req.body.variations.color2,
            color3: req.body.variations.color3
        }
    })

    newProduct.save ()
    .then(item => {
        res.json(item);
    })
    .catch(error => {
        res.status(500).json("There is an error: ", error);
    })
})

router.get('/api/allProducts', async (req, res) => {
    const findProducts = await ProductSchema.find()
    res.json(findProducts)
})

//End
module.exports = router