//import express
const {Router} = require("express");

//importa los controllers de Equipos
const { getEquipos,getOneEquipo,insertEquipo,deleteEquipo,updateEquipo } = require("../controllers/equipos.controllers.js");

const routerEquipo = Router()
//routes
routerEquipo.get("/all",getEquipos)
routerEquipo.get("/one/:id",getOneEquipo)
routerEquipo.post("/insert",insertEquipo)
routerEquipo.delete("/delete/:id",deleteEquipo)
routerEquipo.patch("/update/:id",updateEquipo)


//export router
module.exports = routerEquipo