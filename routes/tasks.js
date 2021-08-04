const router = require('express').Router()
const controller = require('../controllers/tasksController');

router.route("/")
    .get(   async (req,res)=>{res.json(await controller.getEntriesByName(req))})
    .post(  async (req,res)=>{res.json(await controller.addEntry(req)     )})
    .delete(async (req,res)=>{res.json(await controller.removeEntry(req)  )})
    .put(   async (req,res)=>{res.json(await controller.replaceEntry(req) )})
    .patch( async (req,res)=>{res.json(await controller.updateEntry(req) )})



module.exports = router;