const driver = require("../models/driver");

async function handleDriverSignup(req, res) {
    const { license, Bus } = req.body; // Changed from 'Bus' to 'busNO'
    try {
        await driver.create({
            license,
            Bus, // Changed to match the field name in the schema
        });
        return res.redirect("/LoginDriver");
    } catch (error) {
        console.error("Error occurred during driver signup:", error);
        return res.status(500).send("Internal Server Error");
    }
}

async function handleDriverLogin(req, res) {
    const { license } = req.body;
    try {
        const driverDoc = await driver.findOne({ license });
        if (!driverDoc)
            return res.render("LoginDriver", {
                error: "Invalid username or password",
            });
        return res.redirect("/sendlocation");
    } catch (error) {
        console.error("Error occurred during driver login:", error);
        return res.status(500).send("Internal Server Error");
    }
}

module.exports = {
    handleDriverSignup,
    handleDriverLogin,
};
