const mongoose=require('mongoose')
const DB_URL='mongodb://localhost:27017/ecommm'


async function createConnection(params){
    const connection=await mongoose.connect(DB_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    if(connection){
        console.log("Connected")
    }
}
module.exports=createConnection