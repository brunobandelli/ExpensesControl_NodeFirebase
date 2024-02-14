import { Transaction } from './model.js'

export class TransactionController{

    findByUser(req, res){
        const transaction = new Transaction()
        transaction.user = req.user;

        transaction.findByUser().then(transactions => {
            res.json(transactions)
        }).catch(error => {
            res.status(error.code).json(error)
        })
    }
}