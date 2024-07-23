const mongoose = require('mongoose');

let studentSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: [true, "Email already exists"]
    },
    age: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model("Student", studentSchema);