require ('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const models = require('./models/models')
const PORT = process.env.PORT || 5001

const app = express()
 

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



