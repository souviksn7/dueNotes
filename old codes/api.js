const express = require('express'); 
const dbConnect = require('./connect');

const app = express();

app.use(express.json())

app.get('/', async (req,resp)=>{
    let data = await dbConnect();
    data = await data.find().toArray();
    console.log(data)
    console.log("nodemon mil gayo")

    resp.send(data)
})

app.post('/',(req,res)=>{
    console.log(req.body)
    res.send({name:"nandi"})
})

app.listen(5000)