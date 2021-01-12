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

router.post('/api/:name', (req,res) => {
    burger.insertOne([req.params.name], (result) => {
        res.json({ 
            id: result.insertId
        });
        console.log(result)
    });
});

module.exports = router;