import {Sequelize} from "sequelize"

const db = new Sequelize('crud_db', 'root', '031107', {
    host: 'localhost',
    dialect: 'mysql'
})

export default db