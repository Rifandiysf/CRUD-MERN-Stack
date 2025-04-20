import { Sequelize } from "sequelize";
import db from "../config/database.js";

const {DataTypes} = Sequelize

const User = db.define('users', {
    name: DataTypes.STRING,
    class: DataTypes.STRING,
    major: DataTypes.STRING,
    status: DataTypes.STRING
}, {
    freezeTableName:true
})

export default User