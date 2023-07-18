//import
const {Schema,model} = require("mongoose")

//schema
const equipoSchema = Schema({
    equipo:{
        type:String,
        required:true,
        trim:true
    },
    
    directores:{
        type:String,
        required:true,
        trim:true
    },

    pais:{
        type:String,
        required:true,
        trim:true
    }

    
},
{
    timestamps:true
})

//model
module.exports =  model("equipos",equipoSchema,"equipos")


