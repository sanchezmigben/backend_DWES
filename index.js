const express = require("express") //npm i express
const app = express()
const port = process.env.PORT || 3000
const employeeRoutes = require("./routes/employee.routes")
const userRoutes = require("./routes/user.routes")
const version = "v1"
const dbConnMySQL = require("./config/db.config")
const cors = require("cors")
app.use(cors())

//Aceptar BODY en peticiones POST usando JSON
app.use(express.urlencoded({extended:true}))
app.use(express.json())

//Insertar rutas
app.use(`/api/${version}/employees`, employeeRoutes)
app.use(`/api/${version}/users`, userRoutes)


//Levantar servidor
app.listen(port,()=>{
    console.log(`Escuchando en puerto ${port}`)
    //Después de levantar el servidor, conectar con la BD MySQL
    dbConnMySQL.establishConexion()    
})



