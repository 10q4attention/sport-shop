require ('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const models = require('./models/models')
const cors = require('cors') //для запросов из браузера
const router = require('./routes/index')

const PORT = process.env.PORT || 5001

const app = express()
app.use(cors())
app.use(express.json()) //чтобы приложение могло парсить jsonм формат
app.use('/api', router)

const start =async () => {
    try {
        await sequelize.authenticate() //подключение к бд
        await sequelize.sync() // сверяем состояние бд со схемой данных
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}


start()



