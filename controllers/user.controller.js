const User = require("../models/user.model")

exports.findAll = async function(req,res){
    await User.findAll(function(err,users){
        if(err){
            res.send(err)
        }else{
            res.send(users)
        }   
    })
}