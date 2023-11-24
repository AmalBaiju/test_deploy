const User = require('../models/G2')
module.exports = async (req, res) => {
    //res.sendFile(path.resolve(__dirname,'public/g1.html'))
    console.log(req.body);
    console.log('hello');
    const user = await User.findByIdAndUpdate(req.session.userId, {
        fname: req.body.fname,
        lname: req.body.lname,
        license: req.body.license,
        age: req.body.age,
        dob: req.body.dob,
        car_details: req.body.car_details

    });
    res.redirect('/g/');

}