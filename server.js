const express = require('express');
const app = express();
const path = require('path');
app.set('view engine', 'ejs');
const log = require('./routes/helper')

// finder index
app.get('/',function(req,res){
    var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    log.logFil('Log tilføjet', ip)
    res.render('./pages/index',{
        log:log
    })
});

// henter og indsætter css + js static i url
app.use(express.static('public'));
app.use('/static', express.static('public'));
app.use(express.static(path.join(__dirname + '/public')));

// routes
require('./routes/garanti')(app)
require('./routes/kontakt')(app)
require('./routes/nyheder')(app)
require('./routes/ansatte')(app)
require('./routes/produkter')(app)
require('./routes/nav-left')(app)

// starter server
app.listen(1337);
console.log('Køre på port 1337');