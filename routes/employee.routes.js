const employeeController = require("../controllers/employee.controller")
const express = require("express")
const router = express.Router()

//Obtener todos los empleados
router.get("/", employeeController.findAll)
//Obtener todos un empleado por ID
router.get("/:id", employeeController.findById)
//Crear un empleado
router.post("/", employeeController.create)
//Actualizar un empleado
router.put("/:id", employeeController.update)
//Eliminar empleado
router.delete("/:id", employeeController.delete)

module.exports = router