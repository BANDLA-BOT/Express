const express = require('express')
const router = express.Router();
const mongoose = require('mongoose')
const Product = require('../models/product');
// const product = require('../models/product');


router.get('/', async(req,res,next)=>{
        const data = await Product.find()
        res.send(data)
       
})

router.post('/', (req,res,next)=>{
    const prod = {
        name: req.body.name,
        price: req.body.price
    }
    const product = new Product({
        // _id: new mongoose.Types.ObjectId(),
        name:req.body.name,
        price:req.body.price
    })

    product.save().then((result)=>{
        console.log(result);
    }).catch((err)=>{ console.log(err)})

    res.status(200).json({
        message:"Handling POST requests to /products",
        Product: prod
    })
})
router.get('/:productId', (req,res,next)=>{
    const id = Number(req.params.productId)
    product.findById(id)
})

router.patch('/:productId', (req,res,next)=>{
    res.status(200).json({
        message:" Updated successfully",
    })
})
router.delete('/:_id', async (req,res,next)=>{
    console.log(req.params);
    const data = await product.deleteOne(req.params)
    console.log(data);
    res.end();
        
})

module.exports = router