const express =require("express");

const router=express.Router();

router.get('/',(req,res)=>{
    return res.render("home");
})

router.get("/signup",(req,res)=>{
    return res.render("signup");
});

router.get("/login",(req,res)=>{
    return res.render("login");
});

router.get("/sendlocation",(req,res)=>{
    return res.render("locationSender");
});

router.get("/SignupDriver",(req,res)=>{
    return res.render("SignupDriver");
});

router.get("/LoginDriver",(req,res)=>{
    return res.render("LoginDriver");
});

module.exports=router; 

