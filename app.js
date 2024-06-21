const express = require ('express')

const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
require('dotenv').config()


const DB_URI = process.env.MONGODB_URI
mongoose.connect(DB_URI)
const db = mongoose.connection
db.on("error",console.error.bind(console,"mongo connection error")))





const app = express()

app.set('views', __dirname)
app.set('view_engine','ejs')


app.listen(3000, ()=>{
    console.log('App listening on port 3000')
})