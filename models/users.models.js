import mongoose from 'mongoose';

const Schema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        index: {
            unique: true
        },
        minlength: [5, 'el nombre es muy corto'],
        maxlength: 20
        // match: /Usuario/,
        // enum: ['Usuario', 'Sebastian']
    },
    age: {
        type: Number,
        required: true,
        min: 18,
        max: 50
    },
    email: {
        type: String,
        match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        lowercase: true,
        trim: true
    }
},
{
    timestamps: true
}
);

export const UserModel = mongoose.model('Users', Schema);