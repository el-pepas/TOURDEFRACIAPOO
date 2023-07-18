//import model
const Premio = require("../models/Premio.js");

//get
const getPremios = async (req,res)=>{
    const premios = await Premio.find()
    res.json(premios)
}

//get one
const getOnePremio = async (req,res)=>{
    const premios = await Premio.findOne({_id:req.params.id})
    res.json(premios) 
} 

//insert
const insertPremio = async (req,res)=>{
    const premios = new Premio(req.body)
    try {
        const nuevoPremio = premios.save()
        res.json(nuevoPremio)
    } catch (error) {
        console.log(error);
    }
}


//delete
const deletePremio = async (req,res)=>{
    try {
        await Premio.deleteOne({_id:req.params.id})
        res.send()
    } catch (error) {
        console.log(error); 
    }
}


//update
const updatePremio = async (req,res)=>{
    try {
        const premios = await Premio.findOne({_id:req.params.id})

        if (req.body.nombre) {
            premios.nombre = req.body.nombre
        }

        if (req.body.categoria) {
            premios.categoria = req.body.categoria
        }

        await premios.save()
        res.send(premios)
    } catch (error) {
        console.log(error);
    }
    
}


//export
module.exports = {getPremios,getOnePremio,insertPremio,deletePremio,updatePremio}