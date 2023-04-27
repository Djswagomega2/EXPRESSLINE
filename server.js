const express = require('express')
const app = express()
const port = 3000
const path = require('path');

const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("mydb.db");

app.set("views","src/views")
app.set("view engine", "ejs");

// Render Html File
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'templates/index.html'));
});

app.get("/JEESE", function(req, res) 
{
 let output = "<html><title>YO! YO! YO! MISTA WHITE!</title><body><b>WE NEED TO COOK</b>" 
  for(let i = 0; i < 1324567; i++)
  {
    output += i + " ";
  }
  output += "</body></html>"
  res.send(output);
});

app.get('/index', (request, response) => {
  response.render('index', {
    subject: 'EJS template engine',
    name: 'our template',
    link: 'https://youtu.be/aW7bzd8uwyQ'
  });
});


app.get('/talkingbad', (request, response) => {

  db.serialize(() => {
    console.log("Running database queries");
      db.get("SELECT * FROM phone_book", (err, row) => {
        if(row != null)
        {
          console.log(row.name + ": " + row.phone);
          let output = "<html><title>My Site</title><body><b>My name is Walter Hartwell White. I live at 308 Negra Arroyo Lane, Albuquerque, New Mexico, 87104. This is my confession.</b> ";
          output += "Name: " + row.name;
          output += "Phone: " + row.phone;
          output += "</body></html>";
          response.send(output);          
        }
        else
          console.log("No rows found");
          
      }); 
  });
  
});

app.listen(port, () => {
  // Code.....
})