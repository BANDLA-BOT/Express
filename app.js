const express = require('express');
const app = express();
const cors = require('cors')
const mongoose = require('mongoose')
const morgan = require('morgan')
const productsRoutes = require('./api/routes/products')
const orderRoutes = require('./api/routes/orders')
const bodyParser = require('body-parser')

//DB Connection
mongoose.connect('mongodb://localhost:27017/restAPI',)

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended : false}))
app.use(bodyParser.json())
app.use(cors())

app.use('/products',productsRoutes);
app.use('/orders',orderRoutes);

app.use((req,res,next)=>{
    const error = new Error('Not found');
    error.status = 404
    next(error)
})
app.use((error,req,res,next)=>{
    res.status(error.status || 500)
    res.json({
        error:{
            message: error.message
        }
    })
})



module.exports = app;