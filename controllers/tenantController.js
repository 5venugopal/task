const TenantModel = require('../models/TenantModel');


const createTenant = async(req, res)=>{
    try{
        const {name, phone, email, roomId, pgId, startDate, endDate} = req.body
        const tenantModel = new TenantModel({
            name,
            phone,
            email,
            roomId,
            pgId,
            startDate,
            endDate
        })
        await tenantModel.save()
        res.status(201).json(tenantModel)
    } catch(error){
        console.log("there is an error", error)
        res.status(500).json({message: 'server error'})
    }
}


const getTEnant = async(req, res)=>{
    try{
        const tenantDetails = await TenantModel.findById(req.params.id)
        if(!tenantDetails){
            return res.status(404).json({message: "tenant not found"})
        }
        res.status(200).json(tenantDetails)

    }
    catch(error){
        console.error("there is an error", error)
        res.status(500).json({ message:"server error"})
        
    }

}

const editTenant = async(req, res)=>{
    try{
        const{name, phone, email, roomId, pgId, startDate, endDate} = req.body
        const myTenant = await TenantModel.findByIdAndUpdate(
            req.params.id,
           {name, phone, email, roomId, pgId, startDate, endDate}
        )
        if(!myTenant){
            return res.status(404).json({message: "tenant not found"})
        }
        res.status(200).json(myTenant)

}
catch(error){
    console.error('there is error:', error)
    res.status(500).json({message: "server error"})

}
}

module.exports = { createTenant, getTEnant, editTenant }