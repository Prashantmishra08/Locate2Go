const { hasSubscribers } = require("diagnostics_channel");
const User =require("../models/user");
const bcrypt=require("bcryptjs");



async function  handleUserSignup(req,res){
    const {name,email,password,Bus }=req.body;
    const saltRound=10;
    const hash_password = await bcrypt.hash(password,saltRound);

    
    await User.create({
        name,
        email,
        password: hash_password,
        Bus,
    });
    return res.redirect("login");
}


async function handleUserlogin(req, res) {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
        return res.render("login", {
            error: "Invalid username or password",
        });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
        return res.render("login", {
            error: "Invalid username or password",
        });
    }


    return res.redirect("/");
}

module.exports={
    handleUserSignup,
    handleUserlogin
}