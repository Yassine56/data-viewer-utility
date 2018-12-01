const express = require('express');
const obj = require('./utilData.json');

const app = express();

app.get('/',(req,res)=>{
  res.send(obj);
})
app.get('/api/data',(req,res)=>{
  res.send(obj);
})
const PORT = process.env.PORT || 4000;
app.listen(PORT,()=>{
  console.log('app listening on port 4000');
})
