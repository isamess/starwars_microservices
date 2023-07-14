const {Router}= require("express");
const store = require("../database")  //le llamamos así al objeto del index de la database
const { validateModel} =  require("../middlewares")
const router =  Router();

router.get("/:model", validateModel, async(req, res)=>{    //por params nos indica el modelo con el que queremos trabajar
    const { model } = req.params;
    const response = await store[model].list();     //store es un objeto q tiene las props character, film yy planets
    res.status(200).json(response);
})
router.get("/:model/:id", validateModel, async(req, res)=>{    //por params nos indica el modelo con el que queremos trabajar
    const { model, id } = req.params;
    const response = await store[model].get(id);     //store es un objeto q tiene las props character, film yy planets
    res.status(200).json(response);
})

module.exports = router; 