var mod = require('../task-3_module');
var moment = require('moment');
moment.locale("fi");

exports['getFileDate'] = function (test) {
    test.equals(moment(mod.getFileDate("./task-3.js")).isValid(), true);
    test.equals(moment(mod.getFileDate("./task-3.js")).isValid(), true);
    test.throws(function () { mod.getFileDate("./task-2.js"); });
    test.done();
};