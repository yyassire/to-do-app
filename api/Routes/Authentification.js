const route = require("express").Router()
const bcrypt =require("bcrypt")
const User = require("../Models/User")

// register
route.post("/register",async(req,res)=>{
 try {
    const salt = await bcrypt.genSalt(10)
    const hashPassword =await bcrypt.hash(req.body.password,salt)
   const newUser = new User({
       username:req.body.username,
       password:hashPassword
   })
   const savedUser = await newUser.save()
res.status(200).send(savedUser)
     
 } catch (error) {
     res.status(500).send(error)
     
 }
})
// login
route.post("/login",async(req,res)=>{
try {
    const user = await User.findOne({username:req.body.username})  
    if(!user){
        return res.status(404).send("user not find")
    }
    const verifyPassword  = await bcrypt.compare(req.body.password,user.password)
    if(!verifyPassword){
        return res.status(403).send("you entered the wrong password")
    }
    const {password,...others} = user._doc
   res.status(200).json(others)
    
} catch (error) {
    res.status(500).send(error)
    
}
})

module.exports = route
