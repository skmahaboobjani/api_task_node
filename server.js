const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();


app.use(bodyParser.json());




// mongoose.connect('mongodb://localhost:27017');
mongoose.connect('mongodb://127.0.0.1:27017').then(()=>{
  console.log("connected");
}).catch((err)=>
{
  console.log(err);
})
app.listen(3000, () => {
    console.log('Server listening on port 3000');
  });
  