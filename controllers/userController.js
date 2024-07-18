const asyncHandler = require('express-async-handler')
const {body, validationResult} =  require('express-validator')
const bcrypt = require('bcryptjs')

const User = require('../models/user')



exports.register_get = (req,res,next) => res.render("sign-up")


exports.register_post = [
    body("firstname")
        .trim()
        .isLength({min:2})
        .withMessage("Name must be greater than one")
        .isAlphanumeric()
        .withMessage("First name has non-alphanumeric numbers"),
    body("lastname")
        .trim()
        .isLength({min:2})
        .withMessage("Last name must be greater than one")
        .isAlphanumeric()
        .withMessage("Last name has non-alphanumeric numbers"),
    body("email")
        .trim()
        .isLength({min:2})
        .withMessage("emial must be greater than one")
        .isAlphanumeric()
        .withMessage("username has non-alphanumeric numbers"),
    body("password")
        .trim()
        .isLength({min:6})
        .withMessage("Password must be greater than six")
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).+$/)
        .withMessage('Password must contain at least one uppercase letter, one lowercase letter, and one special character'),
    body("conf-pass")
        .trim()
        .isLength({min:6})
        .withMessage('Password must be greater than six')
        .custom((value, {req})=>{
            if(value != req.password){
                throw new Error('Password confirmation does not match the password')
            }

            return true
        }),
    asyncHandler(async (req,res,next) =>{



        const user =  await new User({
            firstname: req.body.firstname,
            lastname : req.body.lastname,
            email: req.body.email,
            password: req.body.password,
            isAdmin: req.body.isAdmin != undefined
        })
        console.log(req.body.isAdmin)
        res.send("Data sent")
})]


exports.login_get = (req,res) => res.render("login")


