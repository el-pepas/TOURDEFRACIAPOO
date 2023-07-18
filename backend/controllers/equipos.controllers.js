//import model
const Equipo = require("../models/Equipo.js")

//get
const getEquipos = async (req,res)=>{
    const equipos = await Equipo.find()
    res.json(equipos)
}

//get one
const getOneEquipo = async (req,res)=>{
    const equipos = await Equipo.findOne({_id:req.params.id})
    res.json(equipos) 
} 

//insert
const insertEquipo = async (req,res)=>{
    try {
        const equipos = new Equipo(req.body)
        const nuevoEquipo = equipos.save()
        res.json(nuevoEquipo)
    } catch (error) {
        console.log(error);
    }
}


//delete
const deleteEquipo = async (req,res)=>{
    try {
        await Equipo.deleteOne({_id:req.params.id})
        res.send()
    } catch (error) {
        console.log(error); 
    }
}


//update
const updateEquipo = async (req,res)=>{

    try {
        const equipos = await Equipo.findOne({_id:req.params.id})

            if (req.body.equipo) {
                equipos.equipo = req.body.equipo
            }

            if (req.body.directores) {
                equipos.directores = req.body.directores
            }

            if (req.body.pais) {
                equipos.pais = req.body.pais
            }

            await equipos.save()
            res.send(equipos)
    } catch (error) {
        console.log(error);
    }
    
}


//export
module.exports = {getEquipos,getOneEquipo,insertEquipo,deleteEquipo,updateEquipo}