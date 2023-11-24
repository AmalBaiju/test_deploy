const G2 = require('../models/G2');
module.exports=async (req, res) => {
    console.log(req.body);
    console.log('update');
    const user = await G2.findByIdAndUpdate(req.session.userId, {
      car_details: {
        make: req.body.make,
        model: req.body.model,
        year: req.body.year,
        pno: req.body.pno 
      }
  
    });
    // console.log(user);
    res.redirect('/g/');
  
  }