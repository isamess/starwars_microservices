const Character = require("../data");
const {response} = require("../utils");

module.exports = async (req, res)=>{
    const characters= await Character.list();  //list me trae los datos del json
    response(res, 200, characters);
};