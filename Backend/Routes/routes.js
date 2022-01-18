const express = require('express')
const router = express.Router()
const signUpTemplateCopy = require('../Models/signUpModel')
router.post('/signup',(req,res) => {
  
    const signedUser=new signUpTemplateCopy({
        fullname:req.body.fullname,
        username:req.body.username,
        email:req.body.email,
        password:req.body.password,
    })
    signedUser.save()
    .then(data=>{
        res.json(data)
        console.log(data)
    })
    .catch(error =>{
        res.json(error)
        console.log(error)
    })

})


router.get('/account',(req,res) => {
    res.send("<h1>Account</h1>")
})
module.exports=router