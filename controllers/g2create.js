const G2 = require('../models/G2');
module.exports=async (req, res) => {


    // async function main() {
    // Create Function
    try {
      const g2 = await G2.create(req.body)
      // console.log(req.body);
      res.redirect('/');
    }
    catch (error) {
      console.log(error);
    }
    // }
    // main().catch(console.error)
  }