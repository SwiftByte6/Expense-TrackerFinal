const transactionModel = require("../models/transactionModel");

const getAllTransactions = async (req, res) => {
    try{
        const transaction = await transactionModel.find({userid:req.body.userid}).sort({createdAt: -1});  
        res.status(200).json(transaction); 
    }catch(error){
        console.log(error);
        res.status(500).json({
            success: false,
            message: 'Error in getting transactions',
            error
        })

    }
}

const addTransaction = async (req, res) => {
    try{
        const newTransaction = new transactionModel(req.body);
        await newTransaction.save();//if got 
        res.status(201).send('TransactionCreated')({
            success: true,
            newTransaction
        })
    }
    catch(error){
        res.status(400).json({
            success: false,
            error
        })
    }
}

module.exports = {getAllTransactions, addTransaction}