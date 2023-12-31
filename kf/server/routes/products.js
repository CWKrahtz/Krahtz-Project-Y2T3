//API endpoints
const express = require('express')
const ProductSchema = require('../models/products')
const router = express.Router()
const multer = require('multer')
const path = require('path')

//Multer Middleware Prep
const productImageStore = multer.diskStorage({
    destination: ( req, file, callBack ) => {
        callBack(null, path.join( __dirname, '../productImages'));
    },

    filename: ( req, file, callBack) => {
        console.log(file)
        callBack(null, Date.now() + path.extname(file.originalname));
    }
});

//Run Middleware
const uploadProductImage = multer({storage: productImageStore});

router.post('/api/newProducts', uploadProductImage.single("image") ,async (req, res) => {
    
    let data = JSON.parse(req.body.information);
    console.log(req.body.filename);
    
    
    const newProduct  = new ProductSchema({
        name: data.name,
        price: data.price,
        stock: data.stock,
        description: data.description,
        image: req.file.filename
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

    const findProduct = await ProductSchema.updateOne(
        { _id: req.params.id }, 
        {$set: {
            name: req.body.name,
            price: req.body.price,
            stock: req.body.stock,
            description: req.body.description,
        }}
    )
    res.json(findProduct)
})

router.delete('/api/deleteProduct/:id', async(req, res) =>{
    const findProduct = await ProductSchema.findByIdAndDelete(req.params.id)
    res.json(findProduct)
})

//End
module.exports = router