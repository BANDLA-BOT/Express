const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    // _id:mongoose.Types.ObjectId,
    name: {
        type:String,
        lowercase:true,
        camelCase:true,
        trim:true,
        unique:true
    },
    price:Number
});

module.exports = mongoose.model('Product', productSchema)