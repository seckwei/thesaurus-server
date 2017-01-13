/* @flow */

'use strict';

const app = require('express')(),
    port = process.env.PORT || 8888, 
    tcom = require('thesaurus-com');

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://seckwei.github.io');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    next();
});

function handleQuery(req, res): void {
    let search: string = req.query.search;
    if(!!search){
        // Remove unecessary commas
        search = search.replace(/(^,)|(,,)|(,$)/gmi, '').trim();
        let words: Array<string> = search.split(',');

        if(words.length) {
            let response: Array<{word: string, synonyms: Array<string>}> = [];
            words.forEach((word) => {
                response.push({
                    word,
                    synonyms: tcom.search(word).synonyms
                });
            });
            res.json(response);
        }
    }
    else {
        res.json({ error: 'search word not provided' });
    }
}

app.get('/q', handleQuery);

app.listen(port, (err) => {
    if(err) {
        console.log('Oops!', err);
        return;
    }
    console.log('Listening on port', port);
});