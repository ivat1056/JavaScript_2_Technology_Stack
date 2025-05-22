// const fs = require("fs");
  
// const readableStream = fs.createReadStream("hello.txt");
  
// const writeableStream = fs.createWriteStream("some.txt");
  
// readableStream.on("data", function(chunk){
//     writeableStream.write(chunk);
// });

// const fs = require("fs");
 
// const readableStream = fs.createReadStream("hello.txt");
 
// const writeableStream = fs.createWriteStream("some2.txt");
 
// readableStream.pipe(writeableStream);

// const fs = require("fs");
// const zlib = require("zlib");
  
// const readableStream = fs.createReadStream("hello.txt");
  
// const writeableStream = fs.createWriteStream("hello.txt.gz");
  
// const gzip = zlib.createGzip();
  
// readableStream.pipe(gzip).pipe(writeableStream);


// const http = require("http");
  
// http.createServer(function(request, response){
     
//     response.setHeader("Content-Type", "text/html; charset=utf-8;");
     
//     if(request.url === "/home" || request.url === "/"){
//         response.write("<h2>Home</h2>");
//     }
//     else if(request.url == "/about"){
//         response.write("<h2>About</h2>");
//     }
//     else if(request.url == "/contact"){
//         response.write("<h2>Contacts</h2>");
//     }
//     else{
//         response.write("<h2>Not found</h2>");
//     }
//     response.end();
// }).listen(3000);

const http = require("http");
  
http.createServer(function(request, response){
     
    response.setHeader("Content-Type", "text/html; charset=utf-8;");
     
    if(request.url === "/"){
        response.statusCode = 302; // временная переадресация
        // на адрес localhost:3000/newpage
        response.setHeader("Location", "/newpage");
    }
    else if(request.url == "/newpage"){
        response.write("New address");
    }
    else{
        response.statusCode = 404; // адрес не найден
        response.write("Not Found");
    }
    response.end();
}).listen(3000);