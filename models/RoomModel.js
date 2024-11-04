const mongoose = require('mongoose')

const roomSchema = new mongoose.Schema({
    //RoomNumber, SharingType, Floor, AmountPerBed, SecurityDeposit, Facilities
    roomNumber:{
        type:Number, required: true
    },
    sharingType:{
        type:String, required: true
    },
    floor:{
        type:Number, required: true
    },
    amountPerBed:{
        type:Number, required: true
    },
    securityDeposit:{
        type:Number, required: true
    },
    facilities:{
        type:String, required: true
    }

});

module.exports = mongoose.model('RoomModel', roomSchema)