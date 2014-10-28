var fs = require("fs");

module.exports.getFileDate = function(file, callback)
{
    return fs.statSync(file).mtime;
}