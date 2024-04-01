const mysql = requere("mysql");

const db = mysql.createConnection({
    host : "sql6.freesqldatabase.com",
    user : "sql6695840",
    database : "sql6695840",
    password : "EM2kv1mBfv",
});

module.exports = db;