const express = require("express");
const morgan = require("morgan");
const PORT = 8000;

const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

app.use(morgan("dev"));
app.use(
    "/characters",  
createProxyMiddleware({
    target: "http://characters:8001", 
    changeOrigin: true,  
})
);

app.use(
    "/films",  
createProxyMiddleware({
    target: "http://films:8002",
    changeOrigin: true,  
})
);

app.use(
    "/planets",  
createProxyMiddleware({
    target: "http://planets:8003", 
    changeOrigin: true,  
})
);
 app.use(
    "/database",
    createProxyMiddleware({
        target: "http://planets:8004",
        changeOrigin: true,

    })
 )

app.listen(PORT, ()=>{
    console.log(`Gateway on port ${PORT}`); //este puerto corresponde al contenedor, no a mí PC
})

