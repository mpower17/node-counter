const express = require("express");

const app = express();
let counter = 0;

app.get("/", function(request, response){
    response.send("<h3>" + counter + "</h3>");
});

app.get("/stat", function(request, response){
    let res = counter;
    counter += 1;
    response.send("<h3>" + res + "</h3>");
});

app.get("/about", function(request, response){
    response.send("<h3>Hello, Maksim!</h3>");
});


app.listen(3000);