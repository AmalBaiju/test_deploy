const Appointment = require('../models/appointment');
module.exports = async (req, res) => {

  try {
    const existingAppointment = await Appointment.findOne({
      date: req.body.date,
      time: req.body.time
    });
    if (existingAppointment) {
      req.flash('error', 'Appointment already exists for the selected date and time.');
      res.redirect('/appointments');
  } else {
      const appointment = await Appointment.create(req.body)
      req.flash('success', 'Appointment added successfully.');
    res.redirect('/appointments');
  }



    
  }
  catch (error) {
    console.log(error);
  }
}