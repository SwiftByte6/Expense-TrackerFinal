const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    userid:{
        type:String ,
        required: [true, 'Please provide user id']
    },
    amount: {
        type: Number,
        required: [true, 'Please provide amount']
    },
    type:{
        type: String,
        required:[true, 'Please provide type'],
    },
    category: {
        type: String,
        required: [true, 'Please provide category']
    },
    reference: {
        type: String,
        required: [true, 'Please provide reference']
    },
    description: {
        type: String,
        required: [true, 'Please provide description']
    },
    date: {
        type: Date,
        default: Date.now
    },
}, { timestamps: true })

const transactionModel = mongoose.model('transactions', transactionSchema);
module.exports = transactionModel;