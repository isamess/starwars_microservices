const { catchedAsync} = require("../utils");


module.exports ={
    getCharacters: catchedAsync( require("./getCharacters")),
    createCharacter: catchedAsync(require("./createCharacter"))
};
//de esta forma Express maneja el error sin que crashee la app
//Podríamos especificar los errores para no exponer info que no debería al cliente