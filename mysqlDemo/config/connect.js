const mysql=require('mysql2');


const connection=mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'student_demo',
    port:3310
})

connection.connect((err) => {
    if(err) throw err;
    console.log('Connected to MySQL Server...');
});
module.exports = connection;