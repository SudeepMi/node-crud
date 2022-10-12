const express = require('express')
const mongo = require('mongoose')
const app = express();
// controller

// middlewares to parse data
app.use(express.urlencoded({ extended: false }));
app.use(express.json({ limit: "10kb" }));

// routes




mongo.connect("mongodb://localhost:27017/crud",).then(()=>console.log("+ MongoDB connected"))
app.listen(3000,()=>console.log("+ App Running"))



