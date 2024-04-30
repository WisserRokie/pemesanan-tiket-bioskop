const mysql = require("mysql");

const db = mysql.createConnection({
    host : "sql6.freesqldatabase.com",
    user : "sql6702772",
    database : "sql6702772",
    password : "z1y63UXxGk",
});

module.exports = db;