const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/dueNotes")

const ProductSchema =  new mongoose.Schema({
  name: String,
  price: Number,
  brand: String,
  category: String
})
const saveInDb = async ()=>{
  const ProductsModel = mongoose.model('peopletomename',ProductSchema);
  let data = new ProductsModel({name:"node 10", price:35000,brand:"mi", category: "mobile"});
  let result = await data.save();
  console.log(result);
}  

// saveInDb();

const updateInDb = async()=>{
  const ProductsModel = mongoose.model('peopletomename',ProductSchema);
  let data = await ProductsModel.updateOne(
    {name: "node 10"},
    {
      $set:{price:700}
    }
  )
  console.log(data);
}
// updateInDb();

const deleteInDb = async ()=>{
  const ProductsModel = mongoose.model('peopletomename',ProductSchema);
  let data = await ProductsModel.deleteOne({name:'node 10'});
  console.log(data);
}

// deleteInDb();

const findInDb = async ()=>{
  const ProductsModel = mongoose.model('peopletomename',ProductSchema);
  let data = await ProductsModel.find();
  console.log(data);
}
findInDb();