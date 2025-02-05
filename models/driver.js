
const mongoose=require("mongoose");

const driverSchema= new mongoose.Schema({

    license:{
        type:String,
        required:true,
        unique:true,
    },
    Bus:{
        type:Number,
        required:true,
        unique:true,
    },

},{timestamps:true});


const   driver = mongoose.model("driver",driverSchema);

module.exports=driver;