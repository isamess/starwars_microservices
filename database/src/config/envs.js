require("dotenv").config();  


//aquí podemos listar todas las variables de entorno y las requerimos desde acá
module.exports = {
    MONGO_URI: process.env.MONGO_URI
}