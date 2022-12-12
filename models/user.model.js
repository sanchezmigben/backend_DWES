const dbConn = require("../config/db.config") //module.exports = dbConn
//dbConn.conectar()

let User = function(user){
    this.username = user.username,
    this.password = user.password
}

User.findAll = async function(result){
    //if(dbConn.state=="connected"){
        const sql = "select * from users"
        dbConn.query(sql, function(err,res){
            if(err){
                console.log(err)
                result(err,null)
            }else{
                result(null,res)
            }        
        })
    /*}else{
        console.log("Not connected to MySQL")
        result(null,null)
    }*/
}

module.exports = User