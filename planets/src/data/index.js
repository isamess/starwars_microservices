// const planets = require("./planets.json");
const axios = require("axios");

module.exports ={
    list: async()=>{
        const results = await axios.get("http://database:8004/Planet");
        return results.data    //list me retorna algo que viene del json
    },
    create: async()=>{
        throw Error("There is a DB error");
    }
}