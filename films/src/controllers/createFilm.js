const Films = require("../data");
const { response } = require("../utils");

module.exports = async (req, res)=>{
    const newFilm= await Films.create();
    response(res, 201, newFilm);            
};
//para q esto no de error(no usamos try/catch), 
//lo solucionamos con la fn de catchedAsync.js de utils/ q catchea los errores