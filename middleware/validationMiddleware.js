module.exports=(req,res,next)=>{
    if(req.body.FirstName == null || req.body.LastName == null || req.body.licenceNumber == null  || req.body.age == null ){
        return res.redirect('/g2test?messaage=Mandatory%20fields%20are%20empty');
    }
    next();
}