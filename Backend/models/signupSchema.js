const mdb = require('mongoose')

const signupSchema =mdb.Schema({
    Name:String,
    email:String,
    password:String,
    confirmPassword:String,
})

const signup_Schema = mdb.model("signup",signupSchema)
module.exports=signup_Schema