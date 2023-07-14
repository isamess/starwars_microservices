module.exports = (res, statusCode, data) =>{
    res.status(statusCode).json({
        error: false,
        data,
    });
}
response();

//esta fn se encarga de dar la rta del getCharacters. Todas las rtas van a cumplir la misma estructura. 
//sólo tengo que invocarla con un código de status(200, 400, etc) y simplifico getCharacters