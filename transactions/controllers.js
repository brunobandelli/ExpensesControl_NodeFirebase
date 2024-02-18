import { response } from 'express';
import { Transaction } from './model.js'

export class TransactionController{

    #transaction;

    constructor(transaction){
        this.#transaction = transaction || new Transaction()
    }

    findByUser(req, res){
        this.#transaction.user = req.user

        return this.#transaction.findByUser().then(transactions => {
            res.json(transactions)
        }).catch(error => {
            res.status(error.code).json(error)
        })
    }

    findByUid(req, res){
        this.#transaction.uid = req.params.uid;
        this.#transaction.user = req.user;

        return this.#transaction.findByUid().then(() => {
            res.status(200).json(this.#transaction)
        }).catch(error => {
            res.status(error.code).json(error)
        })
    }

    create(request, response) {
        this.#transaction.user = request.user;

        return this.#transaction.create(request.body).then(() => {
            response.status(200).json(this.#transaction);
        }).catch(error => {
            response.status(error.code).json(error);
        })
    }

    update(request, response){
        this.#transaction.uid = request.params.uid;
        this.#transaction.user = request.user

        return this.#transaction.update(request.body).then(() => {
            response.status(200).json(this.#transaction)
        }).catch(error => {
            response.status(error.code).json(error)
        })
    }
}