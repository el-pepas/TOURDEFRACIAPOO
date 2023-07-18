//import model
const Etapa = require("../models/Etapa.js")


//get
const getEtapas = async (req,res)=>{
    const etapas = await Etapa.find()
    res.json(etapas)
}


//get one
const getOneEtapa = async (req,res)=>{
    const etapas = await Etapa.findOne({_id:req.params.id})
    res.json(etapas) 
} 


//insert
const insertEtapa = async (req,res)=>{
    try {
        const etapas = new Etapa(req.body)
        const nuevoEtapa = etapas.save()
        res.json(nuevoEtapa)
    } catch (error) {
        console.log(error);
    }
}


//delete
const deleteEtapa = async (req,res)=>{
    try {
        await Etapa.deleteOne({_id:req.params.id})
        res.send()
    } catch (error) {
        console.log(error); 
    }
}


//update
const updateEtapa = async (req,res)=>{
    try {
        const etapas = await Etapa.findOne({_id:req.params.id})

        if (req.body.nombre) {
            etapas.nombre = req.body.nombre
        }
    
        if (req.body.distancia) {
            etapas.distancia = req.body.distancia
        }
    
        if (req.body.clasificaciones) {
            etapas.clasificaciones = req.body.clasificaciones
        }
    
        await etapas.save()
        res.send(etapas)
    } catch (error) {
        console.log(error);
    }
   
}


//export
module.exports = {getEtapas,getOneEtapa,insertEtapa,deleteEtapa,updateEtapa}