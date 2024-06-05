const express = require('express')
const router = express.Router();

router.get('/', (req,res,next)=>{
    res.status(200).json({
        message:"Orders fetched"
    })
})
router.post('/', (req,res,next)=>{
    const order = {
        productId: req.body.productId,
        Quantity: req.body.Quantity
    }
    res.status(201).json({
        message:"Order created",
        order: order
    })
})
router.get('/:orderId', (req,res,next)=>{
    const id = req.params.orderId
    res.status(200).json({
        message:`Order ${id} fetched`,
        orderId : req.params.orderId
    })
})
router.delete('/:orderId', (req,res,next)=>{
    res.status(200).json({
        message:"Order deleted",
        orderId : req.params.orderId
    })
})

module.exports = router