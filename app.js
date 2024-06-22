const express = require('express')
const path = require('path')
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
require('dotenv').config()



const DB_URI = process.env.MONGODB_URI


main().catch(err => console.log(err))

async function main (){
  await mongoose.connect(DB_URI)
  console.log('DB connected')
}

//Routers
const userRouter = require('./routes/user')


const app = express()

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'))
app.set('view engine','ejs')

app.use(session({secret:"cats", resave:false, saveUninitialized:true}))
app.use(passport.session())
app.use(express.urlencoded({extended:false}))

//Register routes
app.use('/user',userRouter)

app.get("/", (req,res) =>{
    res.send("index")
})

app.listen(3000, ()=>{
    console.log('App listening on port 3000')
})