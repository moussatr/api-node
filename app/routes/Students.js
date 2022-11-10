const express = require('express');
const { request } = require('http');
const StudentModel = require('/models/Student');


let router = express.Router();
router.post('/', async (req, res) => {
    const {firstname, lastname}= req.body;

    if(typeof firstname === 'undefined' || typeof lastname === 'undefined'){
        return res.status(500).json({
            "msg": "Vous devez entrer un nom et prénom !"
        })
    }
    try {
        let Student = await StudentModel.create({
            firstname,
            lastname
        });

        return res.status(200).json(Student);
    } catch(error){
        return res.status(500).json({
        "msg": " Il y a une erreur: " + erreur
        })
    }

    
})

module.exports = router;