const connection = require('./connection.js');

const orm = {
    selectAll(tableInput, cb) {
        const queryString = "SELECT * FROM ??"
        connection.query(queryString, [tableInput], (err, data) => {
            if (err) throw err;
            console.log(data);
            cb(data);
        });
    }
}
module.exports = orm;