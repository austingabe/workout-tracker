const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Modeling each database workout entry
const workoutSchema = new Schema(
    {
        day: {
            type: Date,
            default: Date.now()
        },
        exercises:
        [{
            type: {
                type: String,
                trim: true,
                required: "Must select exercise type"
            },
            name: {
                type: String,
                trim: true,
                required: "Activity name required"
            },
            weight: {
                type: Number,
                trim: true
            },
            sets: {
                type: Number,
                trim: true
            },
            reps: {
                type: Number,
                trim: true
            },
            duration: {
                type: Number,
                trim: true
            },
            distance: {
                type: Number,
                trim: true
            },
        }]
    });

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;