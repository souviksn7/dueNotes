const dbConnect = require('./connect')

async function deleteData(){
    let data = await dbConnect();
    let result = await  data.deleteMany({name: "note5"});
    console.warn(result)
    if(result.acknowledged)
    {
        console.log("record deleted")
    }
}

deleteData();