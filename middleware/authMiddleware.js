const G2 = require('../models/G2');
module.exports = async(req,res,next)=>{
    try {
        const user = await G2.findById(req.session.userId)
        console.log(user)
        console.log(userType)
        // console.log('test auth')
        if(!user || user.userType !== 'Driver'){
            return res.redirect('/login')
        }
        next()
    } catch (error) {
        console.log(error)
        res.status(500).send("ERROR OCCURED IN AUTH MIDDLEWARE")
    }
}



