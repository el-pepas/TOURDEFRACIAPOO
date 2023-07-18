//import express
const {Router} = require("express");

//funcion routes()
const routerCiclistas = Router()

//importa los controllers de ciclistas
const { getCiclistas,getOneCiclista,insertCiclista,deleteCiclista,updateCiclista } = require("../controllers/ciclistas.controllers.js");

//routes
routerCiclistas.get("/all",getCiclistas)
routerCiclistas.get("/one/:id",getOneCiclista)
routerCiclistas.post("/insert",insertCiclista)
routerCiclistas.delete("/delete/:id",deleteCiclista)
routerCiclistas.patch("/update/:id",updateCiclista)


//export router
module.exports = routerCiclistas