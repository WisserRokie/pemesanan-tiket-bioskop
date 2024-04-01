const mysql = requere("mysql");

const db = mysql.createConnection({
    host : "",
    user : "",
    database : "",
    password : "",
});

module.exports = db;