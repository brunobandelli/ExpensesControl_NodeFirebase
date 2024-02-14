import admin from 'firebase-admin'
import { TransactionRepository } from './repository.js';
import { UserNotInformedError } from './errors/user-not-informed.error.js';

export class Transaction {

    date;
    description;
    money;
    transctionType;
    type;
    user;


    #repository;

    constructor(transactionRepository){
        this.#repository =  transactionRepository || new TransactionRepository()
    }

    findByUser(){
        if (!this.user?.uid){
            return Promise.reject(new UserNotInformedError())
        }


        return this.#repository.findByUserUid(this.user.uid)
    }
}