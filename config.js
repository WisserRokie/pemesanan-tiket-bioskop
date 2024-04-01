const mysql = require('mysql')

const db = mysql.createConnection ({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'pemesanan-tikbios'
})

module.exports = db
