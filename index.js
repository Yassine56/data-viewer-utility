const express = require('express');
const obj = require('./utilData.json');

const app = express();

app.get('/',(req,res)=>{
  res.send(obj);
})
app.get('/api/data',(req,res)=>{
  res.send(obj);
})

if(process.env.NODE_ENV === 'production'){
  // ensure that express serves production assets
  app.use(express.static('client/build'));

  // ensure express serves the index.html file if it doesn't recognize a route
const path = require('path');
app.get('*',(req,res)=>{
  res.sendFile(path.resolve(__dirname,'client','build','index.html'));
});

}

const PORT = process.env.PORT || 4000;
app.listen(PORT,()=>{
  console.log('app listening on port 4000');
})
