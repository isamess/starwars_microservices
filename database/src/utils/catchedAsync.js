module.exports = (fn)=>(req, res, next)=>
fn(req, res).catch((err)=>next(err))
//esta request sí es manejada por el manejador de errores de express
//me da un controlador con elmanejo de error incorporado con un único catch para toda la fn controladora (hoc)

