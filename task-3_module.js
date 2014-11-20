var fs = require("fs");

module.exports.getFileDate = function(file)
{
    return fs.statSync(file).mtime;
};