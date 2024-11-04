const express = require('express')
const router = express.Router()
const pgController = require("../controllers/pgController")
const pg = require("../models/PgModel")
const roomController = require("../controllers/roomController")
//const room = ("../models/RoomModel")
const tenantController = require("../controllers/tenantController")


//get, post , put, delete

router.post('/add-pg', pgController.createPg)
router.get('/pg/:id', pgController.getPg)
router.put('/update/:id', pgController.editPg)
router.post('/add-room', roomController.createRoom)
router.get('/room/:id', roomController.getRoom)
router.put('/updateRoom/:id', roomController.editRoom)
router.post('/add-tenant', tenantController.createTenant)
router.get('/tenant/:id', tenantController.getTEnant)
router.put('/updateTenant/:id', tenantController.editTenant)
module.exports = router