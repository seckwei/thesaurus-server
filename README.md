# thesaurus-server

Made using Express, Flow-type, and especially [thesaurus-com](https://www.npmjs.com/package/thesaurus-com)

Example single search requests:
```
your-server.com/q?search=somewhere
```
JSON Response:
```
[ 
  { 
    'word' : 'somewhere',
    'synonyms' : [...]
  }
]
```

Example multi search requests:
```
your-server.com/q?search=over,the,rainbow
```
JSON Response:
```
[ 
  { 
    'word' : 'over',
    'synonyms' : [...]
  },
  { 
    'word' : 'the',
    'synonyms' : [...]
  },
  { 
    'word' : 'rainbow',
    'synonyms' : [...]
  }
]
```
