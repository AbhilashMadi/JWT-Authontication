const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: { type: String, require: true },
    email: { type: String, require: true, uniquie: true },
    password: { type: String, require: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
})

userSchema.pre('save', (next) => {
    this.updatedAt = Date.now();
    next();
})

module.exports = mongoose.model('User', userSchema);