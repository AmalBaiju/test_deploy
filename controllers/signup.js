const G2 = require('../models/G2');

module.exports = async (req, res) => {
        
    const user = await G2.create(req.body);
    // console.log(user);
    let redirectUrl = '/login';
    res.redirect(redirectUrl);
    }