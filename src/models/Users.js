const mongoose = require('mongoose');

const UsersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age:{
        type: Number,
        required: true
    },
    rg:{
        type: String,
        required: true
    },
    cpf:{
        type:Number,
        required:true
    },
    cnh:{
        type: String,
        required: true
    },
    vinculo:{
        type: String,
        required: true
    },
    
    createdAt:{
        type:Date,
        default: Date.now,
    }
});

mongoose.model('Users', UsersSchema);