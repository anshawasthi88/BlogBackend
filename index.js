// import 'dotenv/config'
const express = require("express")

const app = express();

require('dotenv').config();

const PORT = process.env.PORT || 3000;

app.use(express.json());


const blog = require("./routes/blog");

app.use("",blog);


app.get("/",(req,res) => {
    res.send("this is home page")
})


const connectWithDb  = require("./config/database")

connectWithDb();

app.listen(PORT, () => {
    console.log(`app is started of Port no. ${PORT}`)
})