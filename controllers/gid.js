const G2 = require('../models/G2');
module.exports=async (req, res) => {
    const user = await G2.findById(req.params.id)
    res.render('g_page', { user });
  
  }