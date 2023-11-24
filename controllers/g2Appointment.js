const Appointment = require('../models/appointment');
const G2 = require('../models/G2');

module.exports = async (req, res) => {
    console.log(req.body);
    const user = await G2.findByIdAndUpdate( req.session.userId,  {
        Appointment: req.body.timeslot
    });
    const appointment = await Appointment.findById(req.body.timeslot);
    await Appointment.findByIdAndUpdate(req.body.timeslot, {
        isTimeSlotAvailable: false
    })

    req.flash('success', 'G2 Appointment booked successfully for ' + user.fname + ' on ' + appointment.date + ' at ' + appointment.time);
    res.redirect('/g2');
}