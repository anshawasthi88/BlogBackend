const mongoose = require("mongoose");


require("dotenv").config();
const connectWithDb = () => {
    mongoose.connect(process.env.DATABASE_URL,{
    })
    .then(console.log("Db connected Successfully"))
    .catch( (error) => {
        console.log("DB connection failed");
        console.log(error);
        process.exit(1);
    })
};

module.exports = connectWithDb;