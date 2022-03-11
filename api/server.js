const express = require("express")
const mongoose = require("mongoose")
require("dotenv").config()
const AuthRouter = require("./Routes/Authentification")
const TasksRouter = require("./Routes/Taskes")
const cors = require("cors");


const app =  express()

// middleware
app.use(express.json())
app.use(cors());
const port = process.env.PORT || 8800
const DB = process.env.DB_URL
mongoose.connect(DB).then(()=>console.log("successfully connected to the database")).catch(()=>console.log("can not connect to the database"));
app.use("/api/user/auth", AuthRouter);
app.use("/api/task", TasksRouter);
app.listen(port,()=>console.log("server up and running"))