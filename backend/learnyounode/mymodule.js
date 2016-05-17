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