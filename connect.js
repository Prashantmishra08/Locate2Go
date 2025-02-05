const mongoose = require("mongoose");
//mongoose.set("strictQuery", true);
async function connectToMongoDB(user) {
  return mongoose.connect(user);
}

module.exports = {
  connectToMongoDB,
};
