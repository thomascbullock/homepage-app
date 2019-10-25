
'use strict'

const Router = require('express').Router;
const jsonParser = require('body-parser').json();
const s3Helper = require('../s3/s3Helper');

const s3 = module.exports = new Router();

s3.post('/upload', jsonParser, (req, res) => {
    console.log(req);
    s3Helper.s3Uploader(req.body.fileBody)
    .then( key => {
        console.log('returned.');
        console.log('key: ', key);
        res.json(key);
    }).catch( err => res.json(err));
});

s3.get('/download/:id', (req, res) => {
    s3Helper.s3Downloader(req.params.id)
    .then ( file => res.json(file))
    .catch (err => res.json(err))
})



