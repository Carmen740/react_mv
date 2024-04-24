import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
import * as UserController from './controllers/UserController.js'
import * as CalculatorController from './controllers/CalculatorController.js';

dotenv.config()
//CONSTANTS
const PORT = process.env.PORT || 3000;



// Express read JSON
const app = express();
app.use(express.json());
app.use(cors());

// Логин
app.post('/login', UserController.login)
//регистрация
app.post('/register',UserController.register);
//Добавление калькулятора
app.get('/mortgage',CalculatorController.calculatorMortgage)
app.get('/consumer',CalculatorController.calculatorConsumer)
app.get('/car-loan',CalculatorController.calculatorCarLoan)

// Создание калькулятора
app.post('/addCalc/mortgage',CalculatorController.addCalcMortgage)
app.post('/addCalc/car-loan',CalculatorController.addCalcCarLoan)
app.post('/addCalc/consumer',CalculatorController.addCalcConsumer)

// Удаление калькулятора
app.delete('/del/consumer/:_id',CalculatorController.delCalc1)
app.delete('/del/mortgage/:_id',CalculatorController.delCalc2)
app.delete('/del/car-loan/:_id',CalculatorController.delCalc3)

// Подключение БД и сервера
async function start(){
    try {
        await mongoose.connect('mongodb://localhost:27017/');
        app.listen(PORT, () => console.log(`Сервер работает на порту ${PORT}`))
    } catch (e) {
        console.error(e)
    }
}
start()


