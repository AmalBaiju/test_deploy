const mongoose = require('mongoose')
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;
const G2Schema = new Schema({
    fname: String,
    lname: String,
    license: Number,
    username:String,
    password:String,
    userType:String,
    age: Number,
    dob: Date,
    car_details: {
        make: String,
        model: String,
        year: Number,
        pno: String
    },
    Appointment: {
        type: Schema.Types.ObjectId,
        ref: 'Appointment'
    }
})
G2Schema.pre('save', function (next) {
    const g2 = this;
    bcrypt.hash(g2.password, 10, (error, hash) => {
        g2.password = hash;
        next();
    })
})
const G2 = mongoose.model('G2', G2Schema);
module.exports = G2
