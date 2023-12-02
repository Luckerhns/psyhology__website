import { DataTypes } from "sequelize";
import database from "../database";

const User = database.define("user", {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    email: { type: DataTypes.STRING, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
    firstname: { type: DataTypes.STRING },
    lastname: { type: DataTypes.STRING },
    patronymic: { type: DataTypes.STRING },
    number: { type: DataTypes.STRING },
    address: { type: DataTypes.STRING },
    sale_sum: { type: DataTypes.FLOAT },
    discount: { type: DataTypes.FLOAT },
    isActivated: { type: DataTypes.BOOLEAN, defaultValue: false },
    activationLink: { type: DataTypes.STRING },
    role: { type: DataTypes.STRING, defaultValue: "USER" },
})

export default User