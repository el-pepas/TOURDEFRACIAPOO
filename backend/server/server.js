const express = require("express")
const cors = require("cors")

//importacion de rutas
const routerCiclistas = require("../routes/ciclista.routes.js")
const routerEquipo = require("../routes/equipo.routes.js")
const routerEtapa = require("../routes/etapa.routes.js")
const routerPremios = require("../routes/premio.routes.js")

const {dbCnx} = require("../config/config.js")


class Servers {

    constructor(){
        this.app = express()
        this.port = process.env.PORT
        
        //rutas/path
        this.ciclistaPath = "/tour/ciclista"
        this.equipoPath = "/tour/equipo"
        this.etapaPath = "/tour/etapa"
        this.premioPath = "/tour/premio"
        
        this.conectDB()
        this.middleware()
        this.routes()
    }

    async conectDB(){
        await dbCnx()
    }

    middleware(){
        this.app.use(cors())
        this.app.use(express.json())
    }

    routes(){
        this.app.use(this.ciclistaPath,routerCiclistas)
        this.app.use(this.equipoPath,routerEquipo)
        this.app.use(this.etapaPath,routerEtapa)
        this.app.use(this.premioPath,routerPremios)
    }

    listen(){
        this.app.listen(this.port,()=>{
            console.log(`SERVER RUNING ON PORT ${this.port} `);
        })
    }
}

module.exports = Servers