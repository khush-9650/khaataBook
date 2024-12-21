const mongoose = require('mongoose');

// Define user schema
const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            trim: true,
            minlength: 3,
            maxlength: 50,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address'], // Email regex validation
        },
        password: {
            type: String,
            required: true,
            minlength: 6,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
    },
    {
        timestamps: true,
    }
);



module.exports = mongoose.model('user', userSchema);



