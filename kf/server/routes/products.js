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
        res.status(400).json("There is an error: ", error);
    })
})

router.get('/api/allProducts', async (req, res) => {
    const findProducts = await ProductSchema.find()
    res.json(findProducts)
})

router.get('/api/oneProduct/:id', async (req, res) => {
    const findProduct = await ProductSchema.findById(req.params.id)
    res.json(findProduct)
})

router.patch('/api/updateProduct/:id', async(req, res) => {
    console.log(req.body)
    let stock = req.body.varOne + +req.body.varTwo + +req.body.varThree

    const findProduct = await ProductSchema.updateOne(
        { _id: req.params.id }, 
        {$set: {
            name: req.body.name,
            price: req.body.price,
            stock: stock,
            description: req.body.description,
            variations: {
                color1: req.body.varOne,
                color2: req.body.varTwo,
                color3: req.body.varThree
            }
        }}
    )
    res.json(findProduct)
})

router.delete('/api/deleteProduct/:id', async(req, res) =>{
    const findProduct = await ProductSchema.findById(req.params.id)
    res.json(findProduct)
})

//End
module.exports = router