const e = require("express");
var express=require("express");
var router=express.Router();

router.get('/',(req,res)=>{
    res.sendFile(__dirname + "/dataPage.html")
});

module.exports=router;