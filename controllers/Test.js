const pool = require("../db.js");

//Fetch All Data
const getAllTodos = async (req, res) => {
  try {
    const allTodos = await pool.query(
      "SELECT * FROM nuevopaciente"
    );
 
    res.json(allTodos.rows);
  } catch (err) {
    console.error(err.message);
  }
};

//Fetch One Data
const getTodo = async (req, res) => {
   
  const { id } = req.params;
  try {
    const todo = await pool.query("SELECT * FROM todo WHERE todo_id=$1", [id]);
    res.json(todo.rows);
  } catch (err) {
    console.error(err.message);
  }
};

//Create Data
const createTodo = async (req, res) => {
  try {
    
    const { nombre, madre, padre, telefono, nacimiento, domicilio, fregistro, lugarnacimento, app, apf, alergia, vacuna, sexo} = req.body;
    const newTodo = await pool.query(
      "INSERT INTO nuevopaciente (nombre, madre, padre, telefono, nacimiento, domicilio, fregistro, lugarnacimento, app, apf, alergia, vacuna, sexo) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13) RETURNING *",
      [nombre, madre, padre, telefono, nacimiento, domicilio, fregistro, lugarnacimento, app, apf, alergia, vacuna, sexo]
    );
    res.json(newTodo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
};

//Update Data
const updateTodo = async (req, res) => {
   
  try {
    const { id } = req.params;
    const { description } = req.body;
    const updateTodo = await pool.query(
      "UPDATE todo SET description =$1 WHERE todo_id=$2",
      [description, id]
    );
    res.json({ message: "Success", Data: description });
  } catch (err) {
    console.error(err.message);
  }
};

//Delete Data
const deleteTodo = async (req, res) => {
   
  const { id } = req.params;
  try {
    const todo = await pool.query("DELETE FROM todo WHERE todo_id=$1", [id]);
    res.json({ message: "Success", Data: id });
  } catch (err) {
    console.error(err.message);
  }
};

//////////////////////////////////////
const getDataPaciente = async (req, res) => {
  try {
    const allTodos = await pool.query(
      "SELECT * FROM datopaciente"
    );
     
    res.json(allTodos.rows);
    // console.log(res.json(allTodos.rows) );
  } catch (err) {
    console.error(err.message);
  }
};

const getDataUnPaciente = async (req, res) => {
   
  const { id } = req.params;
  try {
    const todo = await pool.query("SELECT * FROM datopaciente WHERE idpaciente=$1", [id]);
    res.json(todo.rows);
  } catch (err) {
    console.error(err.message);
  }
};

const postDataPaciente = async (req, res) => {
  try {
     
    const { motivoconsulta, peso, talla, fc, fr, temperatura, leucocitos, nitritos, bacterias, celepiliales, hto, hg, plaquetas, leuccitos, segmetados, otros, dx, planes, idpaciente, fregistro, imc, saturacion, proteinas, ph, urocultivo, linfositos, pcr, experificero, egh, azucares, sangreoculta, helicobacter, rx, ultrasonido, pc, pa, p_a } = req.body;
    const newTodo = await pool.query(
      "INSERT INTO datopaciente (motivoconsulta, peso, talla, fc, fr, temperatura, leucocitos, nitritos, bacterias, celepiliales, hto, hg, plaquetas, leuccitos, segmetados, otros, dx, planes, idpaciente, fregistro, imc, saturacion, proteinas, ph, urocultivo, linfositos, pcr, experificero, egh, azucares, sangreoculta, helicobacter, rx, ultrasonido, pc, pa, p_a) VALUES (	$1,	$2,	$3,	$4,	$5,	$6,	$7,	$8,	$9,	$10,	$11,	$12,	$13,	$14,	$15,	$16,	$17,	$18,	$19,	$20,	$21,	$22,	$23,	$24,	$25,	$26,	$27,	$28,	$29,	$30,	$31,	$32,	$33,	$34,	$35,	$36,	$37) RETURNING *",
      [motivoconsulta, peso, talla, fc, fr, temperatura, leucocitos, nitritos, bacterias, celepiliales, hto, hg, plaquetas, leuccitos, segmetados, otros, dx, planes, idpaciente, fregistro, imc, saturacion, proteinas, ph, urocultivo, linfositos, pcr, experificero, egh, azucares, sangreoculta, helicobacter, rx, ultrasonido, pc, pa, p_a]
    );
    res.json(newTodo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
};

const updateRegistro = (request, response) => {
  const id = parseInt(request.params.id)
  const { motivoconsulta, peso, talla, fc, fr, temperatura, leucocitos, nitritos, bacterias, celepiliales, hto, hg, plaquetas, leuccitos, segmetados, otros, dx, planes, imc, saturacion, proteinas, ph, urocultivo, linfositos, pcr, experificero, egh, azucares, sangreoculta, helicobacter, rx, ultrasonido,pc, pa, p_a } = request.body

  pool.query(
    'UPDATE datopaciente SET motivoconsulta=$1, peso=$2, talla=$3, fc=$4, fr=$5, temperatura=$6, leucocitos=$7, nitritos=$8, bacterias=$9, celepiliales=$10, hto=$11, hg=$12, plaquetas=$13, leuccitos=$14, segmetados=$15, otros=$16, dx=$17, planes=$18, imc=$19, saturacion=$20, proteinas=$21, ph=$22, urocultivo=$23, linfositos=$24, pcr=$25, experificero=$26, egh=$27, azucares=$28, sangreoculta=$29, helicobacter=$30, rx=$31, ultrasonido=$32, pc=$33, pa=$34, p_a=$35 WHERE id=$36',
    [motivoconsulta, peso, talla, fc, fr, temperatura, leucocitos, nitritos, bacterias, celepiliales, hto, hg, plaquetas, leuccitos, segmetados, otros, dx, planes, imc, saturacion, proteinas, ph, urocultivo, linfositos, pcr, experificero, egh, azucares, sangreoculta, helicobacter, rx, ultrasonido,pc, pa, p_a , id],
    (error, results) => {
      if (error) {
        throw error
      }
      // console.log(request.body);
     return response.status(200).json(request.body);
    }
  )
}

const updateDataPaciente = async (req, res) => {
  try {
    const { id } = req.params;
      // console.log(id);
    const { motivoconsulta, peso, talla, fc, fr, temperatura, leucocitos, nitritos, bacterias, celepiliales, hto, hg, plaquetas, leuccitos, segmetados, otros, dx, planes, imc, saturacion, proteinas, ph, urocultivo, linfositos, pcr, experificero, egh, azucares, sangreoculta, helicobacter, rx, ultrasonido,pc, pa, p_a  } = req.body;
    const updateDataPaciente = await pool.query( 
        "UPDATE datopaciente SET motivoconsulta=$1, peso=$2, talla=$3, fc=$4, fr=$5, temperatura=$6, leucocitos=$7, nitritos=$8, bacterias=$9, celepiliales=$10, hto=$11, hg=$12, plaquetas=$13, leuccitos=$14, segmetados=$15, otros=$16, dx=$17, planes=$18, imc=$19, saturacion=$20, proteinas=$21, ph=$22, urocultivo=$23, linfositos=$24, pcr=$25, experificero=$26, egh=$27, azucares=$28, sangreoculta=$29, helicobacter=$30, rx=$31, ultrasonido=$32, pc=$33, pa=$34, p_a=$35 WHERE id=$36",
        [motivoconsulta, peso, talla, fc, fr, temperatura, leucocitos, nitritos, bacterias, celepiliales, hto, hg, plaquetas, leuccitos, segmetados, otros, dx, planes, imc, saturacion, proteinas, ph, urocultivo, linfositos, pcr, experificero, egh, azucares, sangreoculta, helicobacter, rx, ultrasonido,pc, pa, p_a , id]
      ); 
      

      // console.log(updateDataPaciente.command);
        res.status(200);
  } catch (err) {
    console.error(err.message);
  }
};

const getCitas = async (req, res) => {
  try {
    const allTodos = await pool.query(
      "SELECT * FROM citas"
    );
 
    res.json(allTodos.rows);
  } catch (err) {
    console.error(err.message);
  }
}


const createCitas = async (req, res) => {
  try {
    
    const { cita, nombre, hora} = req.body;
    const newTodo = await pool.query(
      "INSERT INTO citas (cita, nombre, hora) VALUES ($1, $2, $3) RETURNING *",
      [cita,  nombre, hora]
    );
    res.json(newTodo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
}

const getCitasOne = async (req, res) => {
   
//   res.status(200).json({
//     queryDate: new Date(
//         +req.params.year,
//         +req.params.month - 1,
//         +req.params.day
//     )
// });

cita = new Date(
  +req.params.year,
  +req.params.month - 1,
  +req.params.day
);
  // const { cita } = req.params;
  try {
    const todo = await pool.query("SELECT * FROM citas WHERE cita = $1", [cita]);
    res.json(todo.rows);
    // console.log(cita);
  } catch (err) {
    console.error(err.message);
  }
};

module.exports = {
  getAllTodos,
  getTodo,
  createTodo,
  updateTodo,
  deleteTodo,
  getDataPaciente, 
  postDataPaciente,
  getDataUnPaciente,
  updateDataPaciente,
  updateRegistro,
  getCitas,
  createCitas,
  getCitasOne,
};