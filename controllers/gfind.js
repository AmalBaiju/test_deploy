const G2 = require('../models/G2');
module.exports=async (req, res) => {
    const user = await G2.find({ license: req.body.licenseno });
    if (user.length > 0) {
      res.redirect('/g/' + user[0].id);
    }
    else {
      res.render('g_page', { user:null, submitPressed:true });
    }
  }