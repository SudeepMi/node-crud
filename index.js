const express = require('express')
const mongo = require('mongoose')
const app = express();
require('dotenv').config();

const DB_HOST = process.env.DB_HOST || 'localhost';
const DB_PORT = process.env.DB_PORT || 27017;
// controller

// middlewares to parse data
app.use(express.urlencoded({ extended: false }));
app.use(express.json({ limit: "10kb" }));

// routes




mongo.connect(`mongodb://${DB_HOST}:${DB_PORT}/crud`,).then(()=>console.log("+ MongoDB connected"))
app.listen(3000,()=>console.log("+ App Running"))



