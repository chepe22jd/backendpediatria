const express = require('express');
const cors = require('cors');
const app = express();
 

const client = require('./conection.js')
const todoRoutes = require('./routes/test.js'); 
 
app.listen(3300, ()=>{
    console.log("Sever is now listening at port 3300"); 
});

app.use(express.json());

const bodyParser = require("body-parser");
const { json } = require('express');
app.use(bodyParser.json());
app.use(cors());
app.use(todoRoutes);
// app.use(dataPacieteRoutes);


app.get('/nuevopaciente1',cors(), (req, res)=>{
  client.query('select * from nuevopaciente', (err, result)=>{
      if(!err){
          res.send(result.rows);
          // console.log(result.rows);
      }else{
        res.send(err);
      }
  });
  client.end;
});

app.get('/nuevopaciente/:id', cors(),(req, res)=>{
  client.query(`Select * from nuevopaciente where id=${req.params.id}`, (err, result)=>{
      if(!err){
          res.send(result.rows);
          console.log("Insercion lista");
      }else{
        res.send(err);
      }
  });
  client.end;
});

 
client.connect();