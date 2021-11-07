const express = require("express");
// const path = require("path");
const app = express();
const bodyparser = require("body-parser");
// const dueFile = require("");

// mongoose main function
// const mongoose = require("mongoose");
// main().catch((err) => console.log(err));
// async function main() {
//   await mongoose.connect("mongodb://localhost:27017/dueNotes");
// }

const port = 8000;

// Define mongoose Schema

const peopleToMeNameSchema = new mongoose.Schema({
  name: String,
});

const MeToPeopleNameSchema = new mongoose.Schema({
  name: String,
});

const peopleToMeDueSchema = new mongoose.Schema({
  hostId: Number,
  date: String,
  dueAmount: Number,
  PaidAmount: Number,
  TotalAmount: Number,
  reason: String,
});

const MeToPeopleDueSchema = new mongoose.Schema({
  hostId: Number,
  date: String,
  dueAmount: Number,
  PaidAmount: Number,
  TotalAmount: Number,
  reason: String,
});

// compiling our schema into a Model.
const peopleToMeName = mongoose.model("peopleToMeName", peopleToMeNameSchema);
const MeToPeopleName = mongoose.model("MeToPeopleName", MeToPeopleNameSchema);

const peopleToMeDue = mongoose.model("peopleToMeDue", peopleToMeDueSchema);
const MeToPeopleDue = mongoose.model("MeToPeopleDue", MeToPeopleDueSchema);

// EXPRESS SPECIFIC STUFF
app.use("/static", express.static("static")); // For serving static files
app.use(express.urlencoded());

// HTML SPECIFIC STUFF
app.set("view engine", "html");
app.engine("html", require("ejs").renderFile);
app.set("views", path.join(__dirname, "views"));

// ENDPOINTS
app.get("/", (req, res) => {
  res.status(200).render("peopleToMe.html");
});
app.get("/meToPeople", (req, res) => {
  res.status(200).render("meToPeople.html");
});
// app.post("/", (req, res) => {
//   var mydata = new peopleToMeDue(req.body);
//   mydata.save().then(() => {
//       res.send("this item has been saved to the database");
//     })
//     .catch(() => {
//       res.status(400).send("item was not saved to the database");
//     });

//   // res.status(200).render('meToPeople.html')
// });

// START THE SERVER
app.listen(port, () => {
  console.log(`The application started successfully on port ${port}`);
});
exports.mongoose = mongoose;