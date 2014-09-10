var file = require("./task-3_module.js");
var moment = require('moment');
moment.locale("fi");

var filename = process.argv[2];

function formatDate(ts)
{
  return moment(ts).format("L HH:mm:ss");
}

file.getFileDate(filename, function(stat)
{
    if(!stat)
        return console.log("File not found!");

    console.log(formatDate(stat));
});
