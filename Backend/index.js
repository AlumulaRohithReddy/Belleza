const express=require('express')
const userApp=require('./Api/user')
const makeUPApp=require('./Api/makeArtists')
const cors= require('cors')
const app=express();
app.use(cors())
app.use(express.json())
// connect userapp
app.use('/user-api',userApp)
// connect MakeUPapp
app.use('/make-api',makeUPApp)
let mc=require('mongodb').MongoClient
mc.connect('mongodb://localhost:27017')
.then((client)=>{
    let db=client.db("Belleza")
    let MakeArtists=db.collection("MakeArtists")
    let users=db.collection("users")
    let makeUp=db.collection("makeUp")
    app.set("MakeArtists",MakeArtists)
    app.set("makeUp",makeUp)
    app.set("users",users)
    console.log("connected successsfully");
})

app.listen(3001,()=>{
    console.log("Server is running")
})