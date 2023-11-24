const User = require('../models/G2')
const bcrypt = require('bcrypt')
module.exports = async(req, res) => {
    try{
        const {username , password} = req.body
        const user  = await User.findOne({username});
        if(user){
            bcrypt.compare(password , user.password , (error,same) =>{
                if(same){
                    req.session.userId = user._id
                    req.session.userType = user.userType
                    res.redirect('/')
                    console.log("SAME")
                }
                else{
                    res.redirect('/login')
                    console.log("NOT SAME")
                }
            })
        }
      
    }
    catch(error){
        console.log(error + "ERROR")
    }
}