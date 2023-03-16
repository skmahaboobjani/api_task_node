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





const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number
});

const Product = mongoose.model('Product', productSchema);


app.post('/products', async (req, res) => {
    const product = new Product({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price
  });
  await product.save();
  res.json(product)
});

app.get('/products', (req, res) => {
    Product.find({}).then((products) => {
      res.send(products);
    }).catch((err) => {
      res.status(500).send(err);
    });
  });
  




app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

