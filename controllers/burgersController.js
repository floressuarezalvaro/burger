const express = require('express');
const router = express.Router();

const burger = require('../models/burger.js')

router.get('/', (req,res) => {
    burger.selectAll((data) => {
        const hbsObject = {
            burgers: data,
        };
        res.render('index', hbsObject);
        console.log("showing burgers")
    });
});

router.post('/api/newBurger', (req,res) => {
    burger.insertOne([req.body.name], (result) => {
        res.json({ 
            id: result.insertId
        });
        console.log(result)
    });
});

router.put('/api/burgers/:id', (req,res) => {
    const condition = `id = ${req.params.id}`;
    console.log('condition', condition)

    burger.updateOne(
        condition,
        (result) => {
        if (result.changedRows === 0) {
            return res.status(404).end();
        }
        res.json({ 
            message: result.message
        });
        console.log(result)
    });
});

module.exports = router;