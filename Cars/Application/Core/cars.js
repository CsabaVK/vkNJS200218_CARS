//  Adjon egy listát az összes autó összes adatáról!
const mysql = require('mysql');
const conn = mysql.createConnection(require('../../config.json'));

conn.connect((err) => {
    if (err) throw err;
    console.log("connected");
})

function getCars(callback) {
    conn.query("SELECT * FROM cars", (err, result) => {
        if (err) throw err;
        callback(result);
    });
}

/*
getCars((result) => {
    console.log(result);
});
*/