const express = require('express')
const mongo = require('mongoose')
const morgan = require("morgan");
const app = express();
// route
const crudRoute = require('./routes/blogRoute')

// middlewares to parse data
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: "10kb" }));
app.use(morgan("dev"))
// routes
app.use("/api", crudRoute);

mongo.connect("mongodb://localhost:27017/crud",).then(()=>console.log("+ MongoDB connected"))
app.listen(3000,()=>console.log("+ App Running \n+ Port: 3000"))



