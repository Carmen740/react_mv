import Mortgage from '../models/Mortgage.js';
import CarLoan from '../models/CarLoan.js';
import Consumer from '../models/Consumer.js';

export const calculatorMortgage = async (req, res) => {


    let calculator

    try {
        calculator = await Mortgage.find()
    } catch (err) {
        res.json({
            message: 'Неизвестная ошибка.'
        })
            .status(500)

        return
    }

    res.json({
        data: calculator
    })
}

export const calculatorCarLoan = async (req, res) => {


    let calculator

    try {
        calculator = await CarLoan.find()
    } catch (err) {
        res.json({
            message: 'Неизвестная ошибка.'
        })
            .status(500)

        return
    }

    res.json({
        data: calculator
    })
}

export const calculatorConsumer = async (req, res) => {


    let calculator

    try {
        calculator = await Consumer.find()
    } catch (err) {
        res.json({
            message: 'Неизвестная ошибка.'
        })
            .status(500)

        return
    }

    res.json({
        data: calculator
    })
}

export const addCalcMortgage = async (req, res) => {
    const { name, rate } = req.body
    const calculator = new Mortgage({ name, rate })

    try {
        await calculator.save()
    } catch (err) {
        if (err && err.code !== 11000) {
            res.json({
                message: 'Неизвестная ошибка.'
            })
                .status(500)

            return
        }
    }

    res.json({
        message: 'Калькулятор добавлен'
    })
}

export const addCalcCarLoan = async (req, res) => {
    const { name, rate } = req.body
    const calculator = new CarLoan({ name, rate })

    try {
        await calculator.save()
    } catch (err) {
        if (err && err.code !== 11000) {
            res.json({
                message: 'Неизвестная ошибка.'
            })
                .status(500)

            return
        }
    }

    res.json({
        message: 'Калькулятор добавлен'
    })
}
export const addCalcConsumer = async (req, res) => {
    const { name, rate } = req.body
    const calculator = new Consumer({ name, rate })

    try {
        await calculator.save()
    } catch (err) {
        if (err && err.code !== 11000) {
            res.json({
                message: 'Неизвестная ошибка.'
            })
                .status(500)

            return
        }
    }

    res.json({
        message: 'Калькулятор добавлен'
    })
}


