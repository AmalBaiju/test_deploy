const G2 = require('../models/G2')
module.exports= async(req, res) => {
    const user = await G2.findById(req.session.userId);
    res.render('g_page', { submitPressed: false, user});

}