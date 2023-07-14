const Planet = require("../data");
const { response } = require("../utils");

module.exports = async (req, res)=>{
    const newPlanet= await Planet.create();
    response(res, 201, newPlanet);   //para q esto no de error(no usamos try/catch), lo solucionamos con la fn de catchedAsync.js de utils/ q catchea los errores
};
