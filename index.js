const express = require('express');
const obj = require('./utilData.json');

const app = express();

app.get('/',(req,res)=>{
  res.send(obj)
})

app.listen(4000,()=>{
  console.log('app listening on port 4000');
})
