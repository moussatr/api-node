
const mongoose = require('mongoose');



const StudentSchema= new mongoose.Schema({
    firstname: {
        type: String,
        require: [true, 'Entrez un prénom'],
        trim: true
    },
    lastname: {
        type: String,
        require: [true, 'Entrez un nom'],
        trim: true
    }
}, {
     titmestamps: {
        createdAt: 'created_at',
        updatedAt: "updated_at"
     }
});


module.exports = mongoose.Model('Student', StudentSchema);