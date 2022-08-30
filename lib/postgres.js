const {Client} = require('pg')

async function getConnection(){
    const client = new Client({
        host: "localhost",
        user: "postgres",
        port: 5432,
        password: "postgres",
        database: "pacientes"
    });
    await client.connect();
    return client;
}



module.exports = getConnection();