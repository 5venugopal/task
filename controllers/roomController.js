const RoomModel = require('../models/RoomModel');

const createRoom = async(req, res)=>{
    try{
        const {roomNumber, sharingType, floor, amountPerBed, securityDeposit, facilities} = req.body
        const roomModel = new RoomModel({
            roomNumber,
            sharingType,
            floor,
            amountPerBed,
            securityDeposit,
            facilities
        })
        await roomModel.save()
        res.status(201).json(roomModel)
    } catch(error){
        console.log("there is an error", error)
        res.status(500).json({message: 'server error'})
    }
}


const getRoom = async(req, res)=>{
    try{
        const roomDetails = await RoomModel.findById(req.params.id)
        if(!roomDetails){
            return res.status(404).json({message: "room not found"})
        }
        res.status(200).json(roomDetails)

    }
    catch(error){
        console.error("there is an error", error)
        res.status(500).json({ message:"server error"})
        
    }

}

const editRoom = async(req, res)=>{
    try{
        const{roomNumber, sharingType, floor, amountPerBed, securityDeposit, facilities} = req.body
        const myRoom = await RoomModel.findByIdAndUpdate(
            req.params.id,
           {roomNumber, sharingType, floor, amountPerBed, securityDeposit, facilities}
        )
        if(!myRoom){
            return res.status(404).json({message: "pg not found"})
        }
        res.status(200).json(myRoom)

}
catch(error){
    console.error('there is error:', error)
    res.status(500).json({message: "server error"})

}
}


module.exports = { createRoom, getRoom, editRoom }