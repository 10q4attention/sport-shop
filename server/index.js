require ('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const models = require('./models/models')
const cors = require('cors') //для запросов из браузера
const router = require('./routes/index')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')

const PORT = process.env.PORT || 5003

const app = express()
app.use(cors())
app.use(express.json()) //чтобы приложение могло парсить jsonм формат
app.use('/api', router)

//Обработка ошибок, последний Middleware
app.unsubscribe(errorHandler)

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



