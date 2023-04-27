const express = require('express')
const app = express();
const path = require('path');

app.get('/',(request,respond) =>
  {
    return response.send('OK');
  });

app.listen(5000,() =>
  {
    console.log('App is listening on port 5000')
  });