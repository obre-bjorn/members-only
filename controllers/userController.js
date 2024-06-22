const asyncHandler = require('express-async-handler')
const {body, validator} =  require('express-validator')

const User = require('../models/user')



exports.register_get = (req,res) => res.render("sign-up")


exports.register_post = asyncHandler(async (req,res) =>{
    await console.log(req)
    res.send("Data sent")
})


