var express = require('express');
var app     = express();

app.set('view engine', 'html');

app.use(express.static(__dirname + "/public")); //points Express to public folder
















// ROUTES ---------------------------------------------------------------------
app.get('/', function(req, res){
    res.render('index.html');
});

// app.get('/about', function(req, res){
//     res.render('about.ejs');
// });
//-----------------------------------------------------------------------------











var PORT = process.env.PORT || 3000;



app.listen(PORT, process.env.IP, function(req, res){
    console.log('----> Santa is listening on ' + PORT);
});
