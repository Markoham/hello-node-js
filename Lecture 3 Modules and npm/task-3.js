var file = require("./task-3_module.js");

var filename = process.argv[2];

function formatDate(ts)
{
    return ts.getDate() + "." + 
        (ts.getMonth() + 1) + "." +
        (ts.getYear() + 1900) + " " +
        ts.getHours() + ":" +
        ts.getMinutes() + ":" +
        ts.getSeconds();
}

file.getFileDate(filename, function(stat)
{
    if(!stat)
        return console.log("File not found!");
    
    console.log(formatDate(stat));
});