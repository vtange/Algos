//first task///console.log("HELLO WORLD");
/*second task
var numbersonly = function(input){
    return !isNaN(input);
}
console.log(process.argv.filter(numbersonly).reduce(function(a,b){return parseInt(a,10)+parseInt(b,10);}));
*/
/*third task
	//---------------------------------
    // read file, console log number of lines in the file
	//---------------------------------
    var fs = require('fs');
    var FileContents = fs.readFileSync(process.argv[2])
    console.log(FileContents.toString().split("\n").length-1);
*/
/*fourth task
	//---------------------------------
	// [ASYNC STYLE] read file, console log number of lines in the file 
	//---------------------------------
    var fs = require('fs');
    var FileContents;//obj to be gotten
    var GetFileContents = function(){fs.readFile(process.argv[2], function(err, data){
            if (err) {
                throw err;
            }
        FileContents = data.toString().split("\n").length-1;
        console.log(FileContents);
    })};
    GetFileContents();//run action
*/
/*fifth task
	//---------------------------------
    // read folder, then for each file in returned array of files, join their names and extensions and filter out .md files. then console log each md file's name only (no extension)
	//---------------------------------
	var mdsonly = function(input){  return path.extname(input) == ".md";  };
    var fs = require('fs');
    var path = require("path");
    var Contents;//obj to be gotten
    var GetContents = function(){fs.readdir(process.argv[2], function(err, list){
            if (err) {
                throw err;
            }
			list.map(function (file) {
				return path.join(process.argv[2], file);
			}).filter(mdsonly).forEach(function (file) {
				console.log("%s", path.basename(file));
			})
		})};
	GetContents();
*/
/*sixth task
	//---------------------------------
    // [USING A MODULE], read folder, then for each file in returned array of files, join their names and extensions and filter out (process.argv[3]) files. then console log each md file's name only (no extension)
	//---------------------------------
	var mymodule = require('./mymodule');
	mymodule(process.argv[2],process.argv[3],function (err, list) {
		   if (err)
			 return console.error('There was an error:', err)
		   list.forEach(function (file) {
			 console.log(file)
		   })
		 });
	
	//--------------------------MYMODULE.JS-------------------------------------------
						var fs = require('fs');
						var path = require("path");
						module.exports = function(directory, extension, callback){
							fs.readdir(directory, function(err, list){
										if (err) {
											return callback(err);
										}

								return callback(null, list.map(function (file) {
										return path.join(file);
									}).filter(function(input){
										return path.extname(input) == "."+ extension;
									})
								)}
							)};
	//--------------------------------------------------------------------------------
*/
/*seventh task
	//---------------------------------
    // node (this_file's_name) url -> console log what you get (as you get it)
	//---------------------------------
var http = require('http');
var getLink = function(url){
    http.get(url,function(res){
        res.on("err", function (data) { 
            
        })
        res.on("data", function (data){
            console.log(data.toString());
        })
    })
}
    getLink(process.argv[2])
*/
/*eighth task
	//---------------------------------
    // node (this_file's_name) url -> wait for it to finish -> console log the whole thing and its length
	//---------------------------------
var http = require('http');
var bl = require('bl');//fix streaming issue
var getLink = function(url){
    http.get(url,function(res){
        res.pipe(bl(function (err, data) {//fix streaming issue
                if (err){
                    throw err;
                }
                console.log(data.toString().length)
                console.log(data.toString());
        }));
    });
};
    getLink(process.argv[2]);
*/
/*ninth task
	//---------------------------------
    // [CALLBACK HELL STYLE] node (this_file's_name) url -> wait for it to finish -> console log the whole thing and repeat for 3 urls
	//---------------------------------
var http = require('http');
var bl = require('bl');//fix streaming issue
var getLink = function(url1,url2,url3){
    http.get(url1,function(res){
        res.pipe(bl(function (err, data) {//fix streaming issue
                if (err){
                    throw err;
                }
                console.log(data.toString());
                http.get(url2,function(res){
                    res.pipe(bl(function (err, data) {//fix streaming issue
                            if (err){
                                throw err;
                            }
                            console.log(data.toString());
                            http.get(url3,function(res){
                                res.pipe(bl(function (err, data) {//fix streaming issue
                                        if (err){
                                            throw err;
                                        }
                                        console.log(data.toString());
                                }));
                            });
                    }));
                });
        }));
    });
};
    getLink(process.argv[2],process.argv[3],process.argv[4]);
*/
/*tenth task
	//---------------------------------
    // node (this_file's_name) port_num -> start a server that spits out current time on localhost:port_num
	//---------------------------------
     var net = require('net')  
     var server = net.createServer(function (socket) {  
       // socket handling logic
         console.log('CONNECTED: ' + socket.remotePort);
         var date = new Date;
         socket.write(date.getFullYear() + '-' + (date.getMonth()+1) + '-' + date.getDate() + ' ' + (date.getHours() < 10 ? '0' : '') + date.getHours() + ':' + date.getMinutes());
         socket.end();
     });
     server.listen(process.argv[2]);
*/
/*11.5
	//---------------------------------
    // node (this_file's_name) port_num -> start a server that serves a file whose name is(process.argv[3]) on localhost:port_num
	//---------------------------------
    var fs = require('fs');
    var FileContents;//obj to be gotten
    var GetFileContents = function(){fs.readFile(process.argv[3], function(err, data){
            if (err) {
                throw err;
            }
        FileContents = data.toString();
    })};
    GetFileContents();//run action
     var http = require('http');
     var server = http.createServer(function (req, res) {
       // request handling logic...
        res.end(FileContents)
     })
     server.listen(process.argv[2]);
*/
/*11th
	//---------------------------------
    // node (this_file's_name) port_num -> start a server that STREAMS a file whose name is(process.argv[3]) on localhost:port_num
	//---------------------------------
    var fs = require('fs');
    var FileContents;
    var readableStream = fs.createReadStream(process.argv[3]);
    var data = '';

    readableStream.on('data', function(chunk) {
        data+=chunk;
    });

    readableStream.on('end', function() {
       FileContents = data.toString();
       console.log(FileContents);
    });

     var http = require('http');
     var server = http.createServer(function (req, res) {
       // request handling logic...
        res.end(FileContents);
     });
     server.listen(process.argv[2]);
*/
/*11th official

     var http = require('http');
     var fs = require('fs');
     var server = http.createServer(function (req, res) {
       res.writeHead(200, { 'content-type': 'text/plain' });
       fs.createReadStream(process.argv[3]).pipe(res);
     });
     server.listen(Number(process.argv[2]));

  */
/*twelth task
	//---------------------------------
    // node (this_file's_name) port_num -> start a server that takes in POST requests and capitalizes the body?
	//---------------------------------
    var http = require('http');
    var map = require('through2-map');
	var server = http.createServer(function (req, res) {
        if (req.method === 'POST'){
                req.pipe(map(function (chunk){
                        return chunk.toString().toUpperCase();
                })).pipe(res);
        }
        else{
                res.end('send me a POST\n');
        }
	});
   server.listen(process.argv[2]);
   */
/* final task
	//---------------------------------
    // node (this_file's_name) port_num -> start a server that takes in GET requests with include time and convert it to unix / normal time
	//---------------------------------
        var http = require('http');
        var server = http.createServer(function (req, res) {
        var regex = /iso=(\d+)-(\d+)-(\d+)[T](\d+):(\d+):(\d+)\.(\w+)/g;
        var matches = regex.exec(req.url);
        if (req.method === 'GET'){
            if (req.url.search('/api/parsetime') != -1){
                var output = {};
                output.hour = parseInt(matches[4],10);
                output.minute = parseInt(matches[5],10);
                output.second = parseInt(matches[6],10);
                res.end(JSON.stringify(output));
            }
            else {
                var output2 = {};
                output2.unixtime = new Date((parseInt(matches[1],10)+"-"+parseInt(matches[2],10)+"-"+parseInt(matches[3],10)+"T"+parseInt(matches[4],10)+":"+parseInt(matches[5],10)+":"+parseInt(matches[6],10)+"."+ matches[7]).toString()).getTime();
                res.end(JSON.stringify(output2));
            }
        }
        else{
                res.end('send me a GET\n');
        }
});
   server.listen(process.argv[2]);
 */
 /* final official

     var http = require('http');
     var url = require('url');
     function parsetime (time) {
       return {
         hour: time.getHours(),
         minute: time.getMinutes(),
         second: time.getSeconds()
       }
     }
     function unixtime (time) {
       return { unixtime : time.getTime() }
     }

     var server = http.createServer(function (req, res) {
       var parsedUrl = url.parse(req.url, true);
       var time = new Date(parsedUrl.query.iso);
       var result;

       if (/^\/api\/parsetime/.test(req.url)){
         result = parsetime(time);
       }
       else if (/^\/api\/unixtime/.test(req.url)){
         result = unixtime(time);
        }
       if (result) {
         res.writeHead(200, { 'Content-Type': 'application/json' });
         res.end(JSON.stringify(result));
       } else {
         res.writeHead(404);
         res.end();
       }
     });
     server.listen(Number(process.argv[2]));
*/