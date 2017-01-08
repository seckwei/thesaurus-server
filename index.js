'use strict';

const app = require('express')(),
    port = process.env.PORT || 8888, 
    tcom = require('thesaurus-com');

app.use((req, res, next) => {
    // Temporarily allow all origins
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    next();
});

app.get('/q', (req, res) => {
    if(req.query.word){
        res.json(tcom.search(req.query.word).synonyms);
    }
    else {
        res.json({ error: 'search word not provided' });
    }
});

app.listen(port, (err) => {
    if(err) {
        console.log('Oops!', err);
        return;
    }
    console.log('Listening on port', port);
});