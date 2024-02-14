import express from "express"
import authenticateToken from '../middlewares/authenticate-jwt.js'
import { TransactionController } from "./controllers.js"

const app = express()

const transactionController = new TransactionController()

app.get('/', authenticateToken, transactionController.findByUser)

export const transactionsRouter = app;