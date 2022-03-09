const mongoose = require("mongoose");
require("dotenv").config();
const username = process.env.USERNAME;
const password = process.env.PASSWORD;

const connect = () => {
  return mongoose.connect(
    "mongodb+srv://apollo1234:apollo1234@cluster0.kj9cm.mongodb.net/test"

    //  "mongodb+srv://ranjan:ranjan@cluster0.ap66h.mongodb.net/apartment?authSource=admin&replicaSet=atlas-1lpr6r-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true",
  );
};
module.exports = connect;
