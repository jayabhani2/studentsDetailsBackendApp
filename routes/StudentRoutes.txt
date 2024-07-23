const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Student = require('../models/Student');

//create student
// router.post('/student', (req, res) => {
//     try {
//         const createdStudent = new Student(req.body);
//         createdStudent.save()
//         .then((student) => {
//             console.log(student);
//             res.status(200).json({message: "Student created successfully"});
//         })
//         .catch((error) => {
//             console.log(error);
//             res.status(500).json({message: "Unable to create student"});
//         })
//     } catch(error) {
//         console.log(error);
//         res.status(500).json({message: "Unable to create student"});
//     }
// });

router.post('/student', (req, res) => {
    try {
        const createdStudent = new Student(req.body);
        createdStudent.save()
        .then((student) => {
            console.log(student);
            res.status(200).json({message: "Student created successfully"});
        })
        .catch((error) => {
            console.log(error);
            res.status(500).json({message: "Unable to create student"});
        })
    } catch(error) {
        console.log(error);
        res.status(500).json({message: "Unable to create student"});
    }
})

//get all students
router.get('/student', (req, res) => {
    try {
        Student.find()
        .then((students) => {
            console.log(students);
            res.status(200).json({students})
        })
        .catch((error) => {
            console.log(error);
            res.status(500).json({message: "Unable to get all students"});
        })
    } catch(error) {
        console.log(error);
        res.status(500).json({message: "Unable to get all students"})
    }
});

//get one student based on id
router.get('/student/:id', (req, res) => {
    try {
        const id = req.params.id;
        Student.findById(id)
        .then((student) => {
            console.log(student);
            res.status(200).json({student});
        })
        .catch((error) => {
            console.log(error);
            res.status(500).json({message: "Unable to get the student"});
        })
    } catch(error) {
        console.log(error);
        res.status(500).json({message: "Unable to get the studemt"});
    }
})

//update student - id, student  findByIdAndUpdate
router.put('/student/:id', (req, res) => {
    try {
        const id = req.params.id;
        const updatedStudent = req.body;
        Student.findByIdAndUpdate(id, updatedStudent)
        .then((student) => {
            console.log(student);
            res.status(200).json({message: "Student updated successfully"});
        })
        .catch((error) => {
            console.log(error);
            res.status(500).json({message: "unable to update student"});
        })
    } catch(error) {
        console.log(error);
        res.status(500).json({message: "Unable to update student"});
    }
})

//delete student - findByIdAndDelete
router.delete('/student/:id', (req, res) => {
    try {
        const id = req.params.id;
        Student.findByIdAndDelete(id)
        .then((student) => {
            console.log(student);
            res.status(200).json({message: "Student deleted successfully"})
        })
        .catch((error) => {
            console.log(error);
            res.status(500).json({message: "Unable to delete student"});
        })
    } catch(error) {
        console.log(error);
        res.status(500).json({message: "Unable to delete student"});
    }
})



module.exports = router;


