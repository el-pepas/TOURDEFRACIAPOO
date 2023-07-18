//import model
const Ciclista = require("../models/Ciclistas.js")
//get
const getCiclistas = async (req,res)=>{
    const ciclistas = await Ciclista.find()
    res.json(ciclistas)
}

//get one
const getOneCiclista = async (req,res)=>{
    const ciclistas = await Ciclista.findOne({_id:req.params.id})
    res.json(ciclistas) 
} 

//insert
const insertCiclista = async (req,res)=>{
    try {
        const ciclistas = new Ciclista(req.body)
        const nuevoCiclista = ciclistas.save()
        res.json(nuevoCiclista)
    } catch (error) {
        console.log(error);
    }
}


//delete
const deleteCiclista = async (req,res)=>{
    try {
        await Ciclista.deleteOne({_id:req.params.id})
        res.status(200).send()
    } catch (error) {
        console.log(error); 
    }
}


//update
const updateCiclista = async (req,res)=>{
    try {
        const ciclistas = await Ciclista.findOne({_id:req.params.id})

        if (req.body.nombre) {
            ciclistas.nombre = req.body.nombre
        }

        if (req.body.nacionalidad) {
            ciclistas.nacionalidad = req.body.nacionalidad
        }

        if (req.body.foto) {
            ciclistas.foto = req.body.foto
        }

        await ciclistas.save()
        res.send(ciclistas)
    } catch (error) {
        console.log(error);
    }
    
}


//export
module.exports =  {getCiclistas,getOneCiclista,insertCiclista,deleteCiclista,updateCiclista}