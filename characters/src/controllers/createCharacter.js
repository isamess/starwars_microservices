const Character = require("../data");
const { response } = require("../utils");

module.exports = async (req, res)=>{
    const newCharacter= await Character.create();
    response(res, 201, newCharacter);   //para q esto no de error(no usamos try/catch), lo solucionamos con la fn de catchedAsync.js de utils/ q catchea los errores
};

