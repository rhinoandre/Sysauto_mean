var express = require('express');

module.exports = function(){
    var app = express();

    //enviroment config
    app.set('port', 3000);

    //configuring express to use public folder
    app.use(express.static('./public'));

    return app;
};
