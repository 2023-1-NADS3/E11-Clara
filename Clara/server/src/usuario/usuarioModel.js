var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var employeeSchema = new Schema({
    verified: {
        type: Boolean,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    senha: {
        type: String,
        required: true
    },
    code: {
        type: Number,
        required: true
    },
    aferation: {
        type: Array,
        required: false
    },
    schedules: {
        type: Array,
        required: false
    }
});

module.exports = mongoose.model('Usuario', employeeSchema);