//import
const {Schema,model} = require("mongoose")

//schema
const etapaSchema = Schema({
    nombre:{
        type:String,
        required:true,
        trim:true
    },
    
    distancia:{
        type:String,
        required:true,
        trim:true
    },

    clasificaciones:{
        type:String,
        required:true,
        trim:true
    }

    
},
{
    timestamps:true
})

//model
module.exports = model("etapas",etapaSchema,"etapas")

 