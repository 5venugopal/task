const PgModel = require('../models/PgModel');


const createPg = async(req, res)=>{
    try{
        const {pgName, pgOwnerName, pgType, pgAddress, pgFacilities} = req.body
        const pgModel = new PgModel({
            pgName,
            pgOwnerName,
            pgType,
            pgAddress,
            pgFacilities
        })
        await pgModel.save()
        res.status(201).json(pgModel)
    } catch(error){
        console.log("there is an error", error)
        res.status(500).json({message: 'server error'})
    }
}

const getPg = async(req, res)=>{
    try{
        const pgDetails = await PgModel.findById(req.params.id)
        if(!pgDetails){
            return res.status(404).json({message: "pg not found"})
        }
        res.status(200).json(pgDetails)

    }
    catch(error){
        console.error("there is an error", error)
        res.status(500).json({ message:"server error"})
        
    }

}

const editPg = async(req, res)=>{
    try{
        const{pgName, pgOwnerName, pgType, pgAddress, pgFacilities} = req.body
        const myPg = await PgModel.findByIdAndUpdate(
            req.params.id,
           {pgName, pgOwnerName, pgType, pgAddress, pgFacilities}
        )
        if(!myPg){
            return res.status(404).json({message: "pg not found"})
        }
        res.status(200).json(myPg)

}
catch(error){
    console.error('there is error:', error)
    res.status(500).json({message: "server error"})

}
}


module.exports = { createPg, getPg, editPg }