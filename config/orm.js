const { query } = require('./connection.js');
const connection = require('./connection.js');

const orm = {
    selectAll(tableInput, cb) {
        const queryString = `SELECT * FROM ${tableInput};`;
        connection.query(queryString, (err, data) => {
            if (err) throw err;
            cb(data);
        });
    },
    insertOne(table, vals, cb) {
        let queryString = `INSERT INTO ${table}`;
        queryString += " (";
        queryString += "name";
        queryString += ") ";
        queryString += "VALUES (";
        queryString += "'";
        queryString += vals;
        queryString += "'";
        queryString += ") ";

        console.log(queryString)
        connection.query(queryString, vals, (err, data) => {
            if (err) throw err;
            cb(data);
        });
    },
    updateOne(table, condition, cb) {
        let queryString = `Update ${table}`;
        queryString += ' SET ';
        queryString += 'devoured = true';
        queryString += ' WHERE ';
        queryString += condition;

        console.log(queryString)
        connection.query(queryString, (err, data) => {
            if (err) throw err;
            cb(data);
        });
    }
}
module.exports = orm;