const express = require('express');
const request = require('request');
const base64 = require('base-64');
const router = express.Router();

/* GET home page. */
router.post('/charge', (req, res) => {
    request.post({
        method: 'POST',
        url : process.env.ENV === 'development' ? process.env.sandbox : process.env.production,
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Basic " + base64.encode("server key:")
        },
        json : true,
        body: req.body

    }, (err, response, body) =>{
        if(err){
            console.log(err)
        } else {
            res.status(200).send(body)
        }
    })
});

module.exports = router;
