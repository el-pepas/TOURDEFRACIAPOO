//import
const {Schema,model} = require("mongoose")

//schema
const ciclistaSchema = Schema({
    nombre:{
        type:String,
        required:true,
        trim:true
    },
    
    nacionalidad:{
        type:String,
        required:true,
        trim:true
    },

    foto:{
        type:String,
        required:true,
        trim:true
    }

    
},
{
    timestamps:true
})

//exports
module.exports = model("ciclistas",ciclistaSchema,"ciclistas")

