//import express
const {Router} = require("express");

//importa los controllers de Etapas
const { getEtapas,getOneEtapa,insertEtapa,deleteEtapa,updateEtapa } = require("../controllers/etapa.controllers.js");

const routerEtapa = Router()
//routes
routerEtapa.get("/all",getEtapas)
routerEtapa.get("/one/:id",getOneEtapa)
routerEtapa.post("/insert",insertEtapa)
routerEtapa.delete("/delete/:id",deleteEtapa)
routerEtapa.patch("/update/:id",updateEtapa)


//export router
module.exports = routerEtapa