const express = require('express');
const app = express();
const port = 3000;
// const birds = require('./routes/birds')
// app.use('/birds', birds)

const demo1 = require('./routes/demo1')
app.use('/api', demo1)
// in demo1
//   /api/  -> get
//   /api/about -> post


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});