const mongoose = require('mongoose');

const ProntuarioSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    peso: {
        type: String,
        required: true
    },
    altura:{
        type:String,
        required:true
    },
    age:{
        type: Number,
        required: true
    },
    Saudavel:{
        type: String,
        required: true
    },
    atividades:{
        type:String,
        required:true
    },
    alimenta:{
        type: String,
        required: true
    }
});

mongoose.model('Prontuario', ProntuarioSchema);