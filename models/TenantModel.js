const mongoose = require('mongoose')

const TenantSchema = new mongoose.Schema({
    //name, phone, email, roomId, pgId, startDate, endDate
    name:{
        type:String, required: true
    },
    phone:{
        type:String, required: true
    },
    email:{
        type:String, required: true
    },
    roomId:{
        type:String, required: true
    },
    pgId:{
        type:String, required: true
    },
    startDate:{
        type:Date, required: true
    },
    endDate:{
        type:Date, required: true
    }

});

module.exports = mongoose.model('TenantModel', TenantSchema)
