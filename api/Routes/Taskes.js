const router = require("express").Router()
const Tasks = require("../Models/Task")


// create
router.post("/",async(req,res)=>{
  const newTask = new Tasks(req.body)
  try {
      const savedTask= await newTask.save()
      res.status(201).send(savedTask)
  } catch (error) {
      res.status(500).send(error)
      
  }
  
})

// // delete
router.delete("/:id",async(req,res)=>{
  const task = await Tasks.findById(req.params.id)
   if(!task){return res.status(404).send("there is no task by that id name")}
    try {
     await Tasks.findByIdAndDelete(task._id)
      res.status(200).send("deleted successfully")
    } catch (error) {
        res.status(500).send(error)
        
    }
})

// get all task
router.get("/all/:username",async(req,res)=>{
  try {
   const tasks = await Tasks.find({username:req.params.username})
   if(!tasks){return req.status(404).send("tasks not found")}
   res.status(200).send(tasks)
  } catch (error) {
      res.status(500).send(error)
      
  }
 
})

module.exports = router