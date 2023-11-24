const G2 = require('../models/G2');
const Appointment = require('../models/appointment');

module.exports = async (req, res) => {
    console.log(req.query.scheduleDate);
        const user = await G2.findById(req.session.userId);
        console.log(user);
        let scheduleDate = (req.query.scheduleDate) ? new Date(req.query.scheduleDate).setUTCHours(0, 0, 0, 0) : new Date().setUTCHours(0, 0, 0, 0);
        console.log(scheduleDate);
        
    const timeslots = await Appointment.find({ date: new Date(scheduleDate) });
    console.log(timeslots);
    res.render('g2_page', { req, user, timeslots, scheduleDate: req.query.scheduleDate });
      
};
