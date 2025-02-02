const exp=require('express')
const makeUpApp=exp.Router()
let makeColObj
makeUpApp.use((req,res,next)=>{
    makeColObj=req.app.get('makeUp')
    console.log(makeColObj);
    next()
})
makeUpApp.get('/location',async (req,res)=>{
    let make=await makeColObj.find().toArray()
    console.log(make);
    res.send({message:"fetch succes",makeUp:make})
})
makeUpApp.post('/add',async(req,res)=>{
    let data=req.body
    await makeColObj.insertOne(data)
})

module.exports=makeUpApp