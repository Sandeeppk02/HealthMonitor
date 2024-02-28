const e = require("express");
var express=require("express");
var router=express.Router();

const credential = {
    email:"ex@gmail",
    password:"ad123"
}
router.get('/',(req,res)=>{
    res.render('base',{title:"Login System"});
})

router.post('/',(req,res)=>{
    if(req.body.email == credential.email && req.body.password == credential.password){
        req.session.user=req.body.email;
        res.redirect('/dashboard');
    }else{
        res.end("Invalid Username or Password")
    }
});

module.exports=router;