const express = require('express');
const app = express();
app.listen(3000);
app.get('/', function(req, res) {
  var text = 'Hello World!';
  const BigInteger = Java.type('java.math.BigInteger');
  text += BigInteger.valueOf(2).pow(100).toString(16);
  //text += Polyglot.eval('R', 'runif(100)')[0];
  res.send(text);
})
