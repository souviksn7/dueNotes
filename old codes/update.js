const dbConnect = require('./connect');

async function updateData(){

        let data = await dbConnect();
        let result = data.updateOne(
            {name:'note 10'},{
                $set:{name:'max pro'}
            }
        );
        console.warn(data)
}

updateData();