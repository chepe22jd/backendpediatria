const pool = require("../db.js");

const getAllTodos = async (req, res) => {
    try {
      const allTodos = await pool.query(
        "SELECT * FROM datopaciente"
      );
       
      res.json(allTodos.rows);
    } catch (err) {
      console.error(err.message);
    }
  };

  const getDataunPaciente = async (req, res) => {
     
    const { id } = req.params;
    try {
      const todo = await pool.query("SELECT * FROM datopaciente WHERE idpaciente=$1", [id]);
      res.json(todo.rows);
    } catch (err) {
      console.error(err.message);
    }
  };

  const createTodo = async (req, res) => {
    try {
       
      const { motivoconsulta, peso, talla, fc, fr, temperatura, leucocitos, nitritos, bacterias, celepiliales, hto, hg, plaquetas, leuccitos, segmetados, otros, dx, planes, idpaciente } = req.body;
      const newTodo = await pool.query(
        "INSERT INTO datopaciente (motivoconsulta, peso, talla, fc, fr, temperatura, leucocitos, nitritos, bacterias, celepiliales, hto, hg, plaquetas, leuccitos, segmetados, otros, dx, planes, idpaciente) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19) RETURNING *",
        [motivoconsulta, peso, talla, fc, fr, temperatura, leucocitos, nitritos, bacterias, celepiliales, hto, hg, plaquetas, leuccitos, segmetados, otros, dx, planes, idpaciente]
      );
      res.json(newTodo.rows[0]);
    } catch (err) {
      console.error(err.message);
    }
  };
  
  //Update Data
  const updateTodo = async (req, res) => {
    console.log(req.body);
    try {
      const { id } = req.params;
      const { description } = req.body;
      const updateTodo = await pool.query(
        "UPDATE todo SET datopaciente =$1 WHERE todo_id=$2",
        [description, id]
      );
      res.json({ message: "Success", Data: description });
    } catch (err) {
      console.error(err.message);
    }
  };
  
  //Delete Data
  const deleteTodo = async (req, res) => {
    console.log(req.body);
    const { id } = req.params;
    try {
      const todo = await pool.query("DELETE FROM datopaciente WHERE datopaciente_id=$1", [id]);
      res.json({ message: "Success", Data: id });
    } catch (err) {
      console.error(err.message);
    }
  };
  
   