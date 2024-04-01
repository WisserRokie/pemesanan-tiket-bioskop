const express = require('express')
const app = express()
const port = 3002

const  bodyParser = require('body-parser')
const db = require('./config')
const response = require('./request.js')

// penggunaan body parse
app.use(bodyParser.json())

app.get('/films', (req, res) => {
    db.query('SELECT * FROM films', (error, result) => {
        if (error) {
            console.error(error);
            response(500, null, "Internal Server Error", res);
        } else {
            res.send(result);
        }
    });
});

app.get('/pemesanan_tiket', (req, res) => {
    db.query('SELECT * FROM pemesanan_tiket', (error, result) => {
        if (error) {
            console.error(error);
            response(500, null, "Internal Server Error", res);
        } else {
            res.send(result);
        }
    });
});

app.get('/jadwal_tayang', (req, res) => {
    db.query('SELECT * FROM jadwal_tayang', (error, result) => {
        if (error) {
            console.error(error);
            response(500, null, "Internal Server Error", res);
        } else {
            res.send(result);
        }
    });
});

app.get('/users', (req, res) => {
    db.query('SELECT * FROM users', (error, result) => {
        if (error) {
            console.error(error);
            response(500, null, "Internal Server Error", res);
        } else {
            res.send(result);
        }
    });
});

app.get('/bookings', (req, res) => {
    db.query('SELECT * FROM bookings', (error, result) => {
        if (error) {
            console.error(error);
            response(500, null, "Internal Server Error", res);
        } else {
            res.send(result);
        }
    });
});

app.get('/films/:id_film', (req, res) => {
    const id_film = req.params.id_film;
    const sql = `SELECT * FROM films WHERE id_film = '${id_film}'`; 

    db.query(sql, (error, result) => {
        if (error) {
            console.error(error);
            response(500, null, "Internal Server Error", res);
        } else {
            response(200, result, "Detail Film", res);
        }
    });
});

app.get('/pemesanan_tiket/:id_tiket', (req, res) => {
    const id_tiket = req.params.id_tiket;
    const sql = `SELECT * FROM pemesanan_tiket WHERE id_tiket = '${id_tiket}'`; 

    db.query(sql, (error, result) => {
        if (error) {
            console.error(error);
            response(500, null, "Internal Server Error", res);
        } else {
            response(200, result, "Detail Pemesanan Tiket", res);
        }
    });
});

app.get('/jadwal_tayang/:id_tayang', (req, res) => {
    const id_tayang = req.params.id_tayang;
    const sql = `SELECT * FROM jadwal_tayang WHERE id_tayang = '${id_tayang}'`; 

    db.query(sql, (error, result) => {
        if (error) {
            console.error(error);
            response(500, null, "Internal Server Error", res);
        } else {
            response(200, result, "Detail Jadwal Tayang", res);
        }
    });
});

app.get('/users/:id_user', (req, res) => {
    const id_user = req.params.id_user;
    const sql = `SELECT * FROM users WHERE id_user = '${id_user}'`; 

    db.query(sql, (error, result) => {
        if (error) {
            console.error(error);
            response(500, null, "Internal Server Error", res);
        } else {
            response(200, result, "Detail User", res);
        }
    });
});

app.get('/bookings/:id_booking', (req, res) => {
    const id_booking = req.params.id_booking;
    const sql = `SELECT * FROM bookings WHERE id_booking = '${id_booking}'`; 

    db.query(sql, (error, result) => {
        if (error) {
            console.error(error);
            response(500, null, "Internal Server Error", res);
        } else {
            response(200, result, "Detail User", res);
        }
    });
});

app.post('/films', (req, res) => {
    const { title, gendre, duration } = req.body;
    const sql = `INSERT INTO films (title, gendre, duration) VALUES ('${title}', '${gendre}', '${duration}')`;

    db.query(sql, (error, result) => {
        if (error) {
            console.error(error);
            response(500, null, "Internal Server Error", res);
        } else {
            const data = {
                isSuccess: result.affectedRows > 0,
                id: result.insertId
            };
            response(200, data, "Data berhasil disimpan", res);
        }
    });
});

app.post('/pemesanan_tiket', (req, res) => {
    const { film_id, cinema_id, date, time } = req.body;
    const sql = `INSERT INTO pemesanan_tiket (film_id, cinema_id, date, time) VALUES (${film_id}, ${cinema_id}, '${date}', '${time}')`;

    db.query(sql, (error, result) => {
        if (error) {
            console.error(error);
            response(500, null, "Internal Server Error", res);
        } else {
            const data = {
                isSuccess: result.affectedRows > 0,
                id: result.insertId
            };
            response(200, data, "Data berhasil disimpan", res);
        }
    });
});

app.post('/jadwal_tayang', (req, res) => {
    const { name, location } = req.body;
    const sql = `INSERT INTO jadwal_tayang (name, location) VALUES ('${name}', '${location}')`;

    db.query(sql, (error, result) => {
        if (error) {
            console.error(error);
            response(500, null, "Internal Server Error", res);
        } else {
            const data = {
                isSuccess: result.affectedRows > 0,
                id: result.insertId
            };
            response(200, data, "Data berhasil disimpan", res);
        }
    });
});

app.post('/users', (req, res) => {
    const { username, email, role } = req.body;
    const sql = `INSERT INTO users (username, email, role, created_at) VALUES ('${username}', '${email}', '${role}', NOW())`;

    db.query(sql, (error, result) => {
        if (error) {
            console.error(error);
            response(500, null, "Internal Server Error", res);
        } else {
            const data = {
                isSuccess: result.affectedRows > 0,
                id: result.insertId
            };
            response(200, data, "Data berhasil disimpan", res);
        }
    });
});

app.post('/bookings', (req, res) => {
    const { screening_id, user_id, nama_pemesan, nomor_kursi, jumlah_tiket, total_bayar } = req.body;
    const sql = `INSERT INTO bookings (screening_id, user_id, nama_pemesan, nomor_kursi, jumlah_tiket, total_bayar) VALUES (${screening_id}, ${user_id}, '${nama_pemesan}', '${nomor_kursi}', ${jumlah_tiket}, ${total_bayar})`;

    db.query(sql, (error, result) => {
        if (error) {
            console.error(error);
            response(500, null, "Internal Server Error", res);
        } else {
            const data = {
                isSuccess: result.affectedRows > 0,
                id: result.insertId
            };
            response(200, data, "Data berhasil disimpan", res);
        }
    });
});


app.listen(port, () => {
    console.log(`Runing in port ${port}`)
})
