const router = require('express').Router()
const controller = require('../controllers/collectionController');

router.get('/today', async (req,res)=> {
   res.json( await controller.forToday())
})

module.exports = router;