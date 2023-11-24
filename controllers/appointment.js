const G2 = require('../models/G2');

module.exports=async(req, res) => {
    const user = await G2.findById(req.session.userId);
    console.log(user);
    res.render('appointment',{ req, user });
}

// module.exports=(req, res) => {
//     res.render('appointment');
// }