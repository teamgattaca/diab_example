/**
 * Module dependencies.
 */

var express = require('express')
var app = express();

app.configure(function() {
  app.use(express.static(__dirname));
});

app.get('/patients', function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send('{ "patients": [ \
    {"patientId":"CauC_deLiver_2220122","name":"John Doe","age":25,"gender":"M","weight":170,"height":180}, \
    {"patientId":"CauC_deLiver_2220107","name":"Rebecca Black","age":15,"gender":"F","weight":115,"height":155}, \
    {"patientId":"CauC_deLiver_1110043","name":"Kevin Bacon","age":54,"gender":"M","weight":170,"height":179}, \
    {"patientId":"CauC_deLiver_3330131","name":"Jeremy Lin","age":24,"gender":"M","weight":200,"height":191}, \
    {"patientId":"CauC_deLiver_2220019","name":"Lucy Smith","age":35,"gender":"F","weight":150,"height":163}, \
    {"patientId":"CauC_deLiver_1110455","name":"Billy Bob","age":25,"gender":"M","weight":250,"height":165}, \
    {"patientId":"CauC_deLiver_1110222","name":"Georgia Jones","age":40,"gender":"F","weight":120,"height":160} \
  ] }');
});

console.log("Starting server on http://localhost:3456/...")
app.listen(3456);