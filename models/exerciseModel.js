const mongoose = require('mongoose')

const exerciseSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
        name: {
            type: String,
            required: [true, 'kindly add exercise name'],
        },
        type: {
            type: String,
            enum: ['Running', 'Swimming', 'Walking', 'Bicycling', 'Hiking'],
        },
        duration: {
            type: Number,
            default: 30,
        },
        date: {
            type: Date,
            // default: Date.now(),
        },
        description: {
            type: String,
        },
    },
    { timestamps: true }
)

module.exports = mongoose.model('Exercise', exerciseSchema)
