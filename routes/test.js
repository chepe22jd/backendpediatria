const express = require("express");
const router = express.Router();
const todosController = require("../controllers/Test.js");
// const datoPacienteController = require("../controllers/datapaciente.js");

///para nuevo paciente
//Fetch All Data
router.get("/nuevopaciente", todosController.getAllTodos);

///data de paciente 
router.get("/datapaciente", todosController.getDataPaciente);
 

//Fetch One Data
// router.get("/nuevopaciente/:id", todosController.getTodo);


//////para los datos del paciente
//Create Data
router.post("/nuevopaciente", todosController.createTodo);

//post data paceinte
router.post("/datapaciente", todosController.postDataPaciente);

// Fetch One Data
router.get("/datapaciente/:id", todosController.getDataUnPaciente);


//Update Data
router.put("/datapaciente/:id", todosController.updateRegistro);

//Delete Data
router.delete("/todos/:id", todosController.deleteTodo);

 // post citas
router.post("/citas", todosController.createCitas);

 // get citas por id
router.get("/citas/:year(\\d{4})-:month(\\d{2})-:day(\\d{2})", todosController.getCitasOne);

//get citas
router.get("/citas", todosController.getCitas);


 

module.exports = router;