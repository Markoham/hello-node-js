var fs = require("fs");

module.exports.getFileDate = function(file, callback)
{
    fs.stat(file, function(err, stats)
    {
        if(err)
            return callback(false);
        
        callback(stats.mtime);
    });
}