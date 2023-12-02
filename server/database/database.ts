import { Sequelize } from "sequelize";
import dotenv from 'dotenv'
dotenv.config()

const database = new Sequelize({
    dialect: "postgres",
    password: process.env.DB_PASSWORD,
    username: process.env.DB_USERNAME,
    database: process.env.DB_NAME,
    port: +process.env.DB_PORT
})

export default database