
import jwt from 'jsonwebtoken';
import UserModel from '../models/User.js';
import dotenv from 'dotenv';
const db =
dotenv.config();
const SECRET = process.env.SECRET;

// Генератор токена
const generateAccessToken = (id, login, email,role) => {
    const payload = {
        id, login, email,role
    }
    return jwt.sign(payload, SECRET, { expiresIn: '24h' })
}

//================== Регистрация
export const register = async (req, res) =>  {

    try {

        console.log(req.body)
        const { login, email, password,role } = req.body;
        const user = new UserModel({login, email, password,role});
        await user.save()
        const token = jwt.sign({
            id: user._id,
        },SECRET, { expiresIn: '24h' });

        res.json({
            message: 'Вы зарегистрировались'
        })
       } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Не удалось зарегестрироваться'
        })
        if (err && err.code !== 11000) {
            res.json({
                message: 'Неизвестная ошибка.'
            })
                .status(500)
            return
        }
    }
};
//======================= Логин
export const login = async (req, res) => {
    console.log(req.body)
    const { login, password} = req.body
    let user

    try {
        user = await UserModel.findOne({ login })
    } catch (err) {
        res.json({
            message: 'Неизвестная ошибка.'
        })
            .status(500)

        return
    }

    if (!user) {
        return res.status(400).json({ message: 'Пользователь отсутствует в базе.' })
    }
    if (user.password !== password) {
        return res.status(400).json({ message: 'Неверный логин или пароль!' })
    }
    const jwtToken = generateAccessToken(user._id, user.login, user.email)
if (user.role === "admin") {
    res.json({
        message: 'Добро пожаловать админ',
        token: jwtToken
    })

} else {
    res.json({
        message: 'Вы авторизованы',
        token: jwtToken
    })
}
}