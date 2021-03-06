const orm = require('../config/orm.js');

const burger = {
    selectAll(cb) {
        orm.selectAll('burgers', (res) => cb(res));
    },
    insertOne(vals, cb) {
        orm.insertOne('burgers', vals, (res) => cb(res));
    },
    updateOne(condition, cb) {
        orm.updateOne('burgers', condition, (res) => cb(res));
    }
}

module.exports = burger;