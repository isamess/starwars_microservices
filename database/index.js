const server = require("./src/server");

const {Character, Film, Planet} = require("./src/database");

// Character.list().then((res) =>console.log(res));
// Film.list().then((res) =>console.log(res));
// Planet.list().then((res) =>console.log(res));

// Character.get(1).then((res) =>console.log(res));

//creamos un registro en la DB
// Character.insert({
//     _id: "200",
//     name: "Jorge Vega",
//     birth_year: "1991"
// })


server.listen(8004, ()=>{
    console.log("DB service listening on PORT 8004")
})