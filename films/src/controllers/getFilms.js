const Film = require("../data")
const {response} = require("../utils");


module.exports = async (req, res)=>{
    const films= await Film.list();  //list me trae los datos del json
    res.status(200).json(films);
};