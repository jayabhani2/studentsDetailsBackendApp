const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();


const app = express();
app.use(express.json());
app.use('/api', require('./routes/Student'));

const connectToDb = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/studentsdb");
        console.log("Connected to MongoDB");
    } catch(error) {
        console.log(error);
        process.exit(1);
    }
}

connectToDb();


const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})