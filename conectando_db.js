async function connect() {
    if (global.connection)
        return global.connection.connect();
 
    const { Pool } = require('pg');
    const pool = new Pool({
        connectionString: 'postgres://nfgdoeqt:OpHyIpB7Klk1c02-D4zRm5xzFGgMQv1a@babar.db.elephantsql.com/nfgdoeqt'
    });
 
    //apenas testando a conexão
    const client = await pool.connect();
    console.log("Criou pool de conexões no PostgreSQL!");
 
    const res = await client.query('SELECT NOW()');
    console.log(res.rows[0]);
    client.release();
 
    //guardando para usar sempre o mesmo
    global.connection = pool;
    return pool.connect();
}

// Busca todos os usuarios da tabela USERS
async function selectCustomers() {
    const client = await connect();
    const res = await client.query('SELECT * FROM users');
    return res.rows;
}
 
// INSERT

async function insertCustomer(customer){
    const client = await connect();
    const sql = 'INSERT INTO users(name,sex,datebirthday, phone, email) VALUES ($1,$2,$3,$4,$5);';
    const values = [customer.name, customer.sex, customer.datebirthday, customer.phone, customer.email];
    return await client.query(sql, values);
}

// UPDATE

async function updateCustomer(id, customer){
    const client = await connect();
    const sql = 'UPDATE users SET name=$2, sex=$3, datebirthday=$4, phone=$5, email=$6 WHERE user_id=$1';
    const values = [id, customer.name, customer.sex, customer.datebirthday, customer.phone, customer.email];
    return await client.query(sql, values);
}

// DELETE

async function deleteCustomer(id){
    const client = await connect();
    const sql = 'DELETE FROM users where user_id=$1;';
    return await client.query(sql, [id]);
}

module.exports = { selectCustomers, insertCustomer, updateCustomer, deleteCustomer }