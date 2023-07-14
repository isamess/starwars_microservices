class ClientError  extends Error{
    constructor(message, statusCode = 400){
        super(message);
        this.statusCode = statusCode
    }
}
module.exports = {ClientError}

// creamos una clase para q nuestro error tenga un statusCode