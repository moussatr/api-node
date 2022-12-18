const express = require('express');
const student = require('../models/student');
const studentModel = require('../models/student')

let router = express.Router();

router.post('/', async (req, res) => {
    const {firstname, lastname} = req.body;

    if (typeof firstname === 'undefined' || typeof lastname === 'undefined') {
        return res.status(500).json({
            "msg": "vous devez entrer un nom et un prénom !"
        })

    }

    try {
        let student = await studentModel.create({
            firstname,
            lastname
        });

        return res.status(200).json(student);
    } catch (error) {
        return res.status(500).json({
            "msg": "il y a eu une erreur: " + error
        });
    }

});

router.delete('/:id', async (request,response) => {
    const {id} = request.params

    try {
        let student = await studentModel.findByIdAndRemove(id)
        return response.status(200).json({
            msg: "Elève bien supprimée !"
        })
    }catch (error) {
        return response.status(500).json(error)
    }
})

router.put('/:id', async (request,response) =>{
    const {id} = request.params
    const {firstname, lastname} = request.body

    try {
        let student = await studentModel.findByIdAndUpdate(id,
            {
                firstname, lastname
            },{
                new: true
            })
        return response.status(200).json({
            msg: "Elève bien modifiée !"
        })
    }catch (error) {
        return response.status(500).json(error)
    }

})

router.get('/:id', async (request, response) => {
    const {id} = request.params

    try {
        let student = await studentModel.findById(id)
        return response.status(200).json(student)
    }catch (error) {
        return response.status(500).json(error)
    }


})

router.get('/', async (request, response) => {
    try {
        let students = await studentModel.find()
        return response.status(200).json(students)
    } catch (error) {
        return response.status(500).json(error)
    }
})



module.exports = router;