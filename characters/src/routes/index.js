const { Router }= require("express");
const controllers = require("../controllers");
const middlewares = require("../middlewares")

const router = Router();

router.get("/", controllers.getCharacters);
router.post("/", middlewares.characterValidation, controllers.createCharacter); 
//sólo con esto el manejador de erroress de Express me seguiría arrojando un 500. 
//Lo soluciono en /utils creando una clase para que nuestro error tenga un statusCode.


module.exports = router;