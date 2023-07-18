//import express
const {Router} = require("express");

//importa los controllers de Premios
const { getPremios,getOnePremio,insertPremio,deletePremio,updatePremio } = require("../controllers/premios.controllers.js");

const routerPremios = Router()

//routes
routerPremios.get("/all",getPremios)
routerPremios.get("/one/:id",getOnePremio)
routerPremios.post("/insert",insertPremio)
routerPremios.delete("/delete/:id",deletePremio)
routerPremios.patch("/update/:id",updatePremio)


//export router
module.exports = routerPremios