    var express = require('express');
    var path = require('path');
    var bodyparser = require('body-parser');
    var crypto = require('crypto');
    var fs = require('fs');
    
    var app = express();

    console.log(process.argv[3]);
    //use body parser middleware
    app.use(bodyparser.urlencoded({extended: false}));

    //use static middleware in express
    app.use(express.static(process.argv[3]||path.join(__dirname, 'public')));
    
    //use stylus
    app.use(require('stylus').middleware(__dirname + '/public'));//access main.styl at /public (stylus generates css)

    /*
    //use jade
    app.set('view engine', 'jade');
    app.set('views', path.join(__dirname, 'templates'));//access index.jade at /templates
*/    

    //server responses
    app.get('/home', function(req, res) {
      //res.render('index', {date: new Date().toDateString()});//render date variable in index.jade
        res.end();
    });
    app.get('/search', function(req, res) {
        console.log(req.query)
        res.end(JSON.stringify(req.query));
    });
    app.get('/books', function(req, res) {
        fs.readFile(process.argv[3], function(err,data){
          if (err){
            throw err;
          }
          var object = JSON.parse(data);
          console.log(object);
          res.end(JSON.stringify(object));
        })
    });
    app.post('/form', function(req, res) {
      var str = req.body.str;//body-parser parses req.body
      str = str.split('').reverse().join('');
      res.end(str);
    });
    app.put('/message/:NAME', function(req, res) {
      //console.log(req.params.NAME);
      var hash = crypto.createHash("sha1");
      hash = hash.update(new Date().toDateString() + req.params.NAME);
      hash = hash.digest('hex');
      //console.log(hash);
      res.end(hash);
    });
    
    //begin
    app.listen(process.argv[2]);

/*exercise 6 only
    var express = require('express')
    var app = express()
    
    app.put('/message/:id', function(req, res){
      var id = req.params.id
      var str = require('crypto')
        .createHash('sha1')
        .update(new Date().toDateString() + id)
        .digest('hex')
      res.send(str)
    })
    
    app.listen(process.argv[2])
*/




/*exercise 8 only
    var express = require('express')
    var app = express()
    var fs = require('fs')
    
    app.get('/books', function(req, res){
      var filename = process.argv[3]
      fs.readFile(filename, function(e, data) {
        if (e) return res.send(500)
        try {
          books = JSON.parse(data)
        } catch (e) {
          res.send(500)
        }
        res.json(books)
      })
    })
    
    app.listen(process.argv[2])
*/