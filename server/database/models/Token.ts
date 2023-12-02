import { DataTypes } from "sequelize";
import database from "../database";

const Token = database.define("token", {
    refreshToken: { type: DataTypes.STRING, allowNull: true },
});

export default Token;
