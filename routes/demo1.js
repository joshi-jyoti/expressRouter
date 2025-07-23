const express = require('express')
const router = express.Router()



// define the home page route
router.get('/', (req, res) => {
  res.send('get request');
})
// define the about route
router.post('/about', (req, res) => {
  res.json({x: 1, y: 2, z: 3});
})
router.delete('/item/:id',(req,res)=> {
    res.send(`Item with id ${req.params.id} deleted`);
})
module.exports = router
