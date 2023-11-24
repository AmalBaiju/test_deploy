const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
    date: Date,
    time: String,
    isTimeSlotAvailable: {
        type: Boolean,
        default: true
    }
});

const Appointment = mongoose.model('Appointment', appointmentSchema);
module.exports = Appointment;
