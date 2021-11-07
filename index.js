const express = require("express");
const path = require("path");
const app = express();
const bodyparser = require('body-parser');
const mongoose = require('mongoose');

const peopleToMeName = require('./peopleToMeNames');
const meToPeopleName = require('./meToPeopleNames');

const peopleToMeItem = require('./peopleToMeItems');
const meToPeopleItem = require('./meToPeopleItems');



// const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017/dueNotes");

app.use(bodyparser.json())

// app.use(express.json());  //to convert requested data into json file

// EXPRESS SPECIFIC STUFF
app.use("/static", express.static("static")); // For serving static files
// app.use(express.urlencoded());
app.use(bodyparser.urlencoded({
    extended: true
}))

// HTML SPECIFIC STUFF
app.set("view engine", "html");
app.engine("html", require("ejs").renderFile);
app.set("views", path.join(__dirname, "views"));

// ENDPOINTS

app.get("/",async (req,res)=>{
    let user = await peopleToMeName.find();
    res.status(200).render('peopleToMe.ejs',{user});
});

app.get("/meToPeople",async (req,res)=>{
    let user = await meToPeopleName.find();
    res.status(200).render('meToPeople.ejs',{user});
});


app.post("/nameToMe", async (req,res)=>{
    var name = req.body.name;
    var data = {
        "name": name
    }
    let sdata = new peopleToMeName(data);
    let result = await sdata.save();
    let user = await peopleToMeName.find();
    res.status(200).render('peopleToMe.ejs',{user});
    res.end();

    // let data = new peopleTomeName(req.body);
    // data.name="It is constant "
    // let result = await data.save();
    // let user = await peopleTomeName.find();
    // res.status(200).render('peopleToMe.ejs',{user});
    // res.end();
   
});
app.post("/nameToPeople", async (req,res)=>{
    var name = req.body.name;
    var data = {
        "name": name
    }
    let sdata = new meToPeopleName(data);
    let result = await sdata.save();
    let user = await meToPeopleName.find();
    res.status(200).render('meToPeople.ejs',{user});
    res.end();


    // let data = new meToPeopleName(req.body);
    // let result = await data.save();
    // let user = await meToPeopleName.find();
    // res.status(200).render('meToPeople.ejs',{user});
    // res.end();
   
});
app.post("/add_due_to_me", async (req,res)=>{
    var id = req.body.id_due_toMe;
    var date = req.body.date;
    var due_amount = req.body.due_amount;
    var reason = req.body.reason;
    var data = {
        "parentId": id,
        "date": date,
        "due": due_amount,
        "reason": reason
    }
    let sdata = new peopleToMeItem(data);
    let result = await sdata.save();
    let user = await peopleToMeItem.find();
    res.status(200).render('peopleToMe.ejs',{user});
    res.end();
});
app.post("/add_payment_to_me", async (req,res)=>{
    var id = req.body.id_paid_toMe;
    var date = req.body.date;
    var paid_amount = req.body.paid_amount;
    var reason = req.body.reason;
    var data = {
        "parentId": id,
        "date": date,
        "paid": paid_amount,
        "reason": reason
    }
    let sdata = new peopleToMeItem(data);
    let result = await sdata.save();
    let user = await peopleToMeItem.find();
    res.status(200).render('peopleToMe.ejs',{user});
    res.end();
});


app.post("/add_due_to_people", async (req,res)=>{
    var id = req.body.id_due_toPeople;
    console.log("eije " + id)
    var date = req.body.date;
    var due_amount = req.body.due_amount;
    var reason = req.body.reason;
    var data = {
        "parentId": id,
        "date": date,
        "due": due_amount,
        "reason": reason
    }
    let sdata = new meToPeopleItem(data);
    let result = await sdata.save();
    let user = await meToPeopleItem.find();
    res.status(200).render('meToPeople.ejs',{user});
    res.end();
});


app.post("/add_payment_to_people", async (req,res)=>{
    var id = req.body.id_paid_toPeople;
    console.log("eije11 " + id)
    var date = req.body.date;
    var paid_amount = req.body.paid_amount;
    var reason = req.body.reason;
    var data = {
        "parentId": id,
        "date": date,
        "paid": paid_amount,
        "reason": reason
    }
    let sdata = new meToPeopleItem(data);
    let result = await sdata.save();
    let user = await meToPeopleItem.find();
    res.status(200).render('meToPeople.ejs',{user});
    res.end();
});

// app.get("/list",async (req,res)=>{
//     let data = await Product.find();
//     res.send(data);
// })

// app.delete("/delete/:_id", async (req,res)=>{
//     let data = await Product.deleteOne(req.params);
//     res.send(data);
// })
// app.put("/update/:_id", async (req,res)=>{
//     console.log(req.params)
//     let data = await Product.updateOne(req.
//         // {}condition
//         //e.g,{name:""}
//         req.params,
//         {
//             // $set updated data 
//             $set: req.body
//         }
//         );
//     res.send(data);
// })
app.listen(8000);