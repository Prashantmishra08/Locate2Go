const  express =require("express");

const  { handleDriverSignup ,handleDriverLogin}=require("../controllers/driver");

const  router=express.Router();

router.post("/driversignup",handleDriverSignup);

router.post('/driverlogin',handleDriverLogin)


module.exports=router;