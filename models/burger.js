const orm = require('../config/orm.js');

const burger = {
    selectAll(cb) {
        orm.selectAll('burgers', (res) => cb(res));
    },
    insertOne(vals, cb) {
        orm.insertOne('burgers', vals, (res) => cb(res));
    },
    updateOne(name, cb) {
        orm.insertOne('burgers', name, (res) => cb(res));
    }
}

module.exports = burger;