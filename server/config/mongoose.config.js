const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/productosdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(()=>console.log("Conexción con la base de productos realizada"))
  .catch(err=>console.log("Ocurrió un error", err))