const router = require('express').Router()
const controller = require('../controllers/dashboardController');

router.get("/", async (req,res)=>{
    res.json( await controller.getDachboard() )
})

module.exports = router;