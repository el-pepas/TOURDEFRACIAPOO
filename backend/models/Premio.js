//import
const {Schema,model} = require("mongoose")

//schema
const premioSchema = Schema({
    nombre:{
        type:String,
        required:true,
        trim:true
    },
    
    categoria:{
        type:String,
        required:true,
        trim:true
    }

   
},
{
    timestamps:true
})

//model
module.exports = model("premios",premioSchema,"premios")

