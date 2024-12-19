const mongoose = require('mongoose');
const bcrypt = require('bcryptjs'); // For password hashing
const Joi = require('joi'); // For data validation

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



// Create User Model
const User = mongoose.model('User', userSchema);

// Joi Validation Function for User Input
const validateUser = (user) => {
    const schema = Joi.object({
        username: Joi.string().min(3).max(50).required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(6).required(),
    });

    return schema.validate(user);
};

module.exports = { User, validateUser };
