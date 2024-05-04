const { Sequelize } = require("sequelize")

const database = process.env.MYSQL_DATABASE;
const username = process.env.MYSQL_USER;
const password = process.env.MYSQL_PASSWORD;
const host = process.env.MYSQL_HOST;


const sequelize = new Sequelize(
    database, username, password,
    {
        host,
        dialect:"mysql"
    } 
)

const dbConnectMySQL = async () =>{
    try {
        await sequelize.authenticate();
        console.log("MYSQL Conexión correcta ")
    } catch (error) {
        console.log("MYSQL error de conexion ", error)
    }
};

//En node se necesita exportar el funcionamiento de esta funció
module.exports = { sequelize, dbConnectMySQL}