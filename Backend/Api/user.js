const exp=require('express')
const bcryptjs=require('bcryptjs')
const userApp=exp.Router()
let userColObj
userApp.use((req,res,next)=>{
    userColObj=req.app.get('users')
    console.log(userColObj);
    next()
})
userApp.get('/',async (req,res)=>{
    let make=await userColObj.find().toArray()
    res.send({message:"hey"})
})
userApp.post('/user',(async (req,res)=>{
    let user=req.body
    const dbuser=await userColObj.findOne({username:user.username})
    if (dbuser!==null){
        res.send({message:"User Exist"})
    }
    else{
        let pass=user.password
        let hashpass=await bcryptjs.hash(pass,5)
        user.password=hashpass
        await userColObj.insertOne(user)
        res.send({message:"new user register"})

    }
}))
userApp.post(
    "/login",async (req, res) => {
      const user = req.body;
      console.log(user);
      let dbuser = await userColObj.findOne({username:user.username});
      console.log(dbuser);
      if (dbuser ===null) {
        res.send({ message: "Invaild user" });
      } else {
        let pass = await bcryptjs.compare(user.password, dbuser.password);
        if (pass) {
          
          res.send({ message: "Login success", user:dbuser });
        } else {
          res.send({ message: "Invaild password" });
        }
      }
    }
  );
module.exports=userApp