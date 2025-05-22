// const http = require("http");
 
// let message = "Goodbye World!";
// http.createServer(function(request,response){
     
//     console.log(message);
//     response.end(message);
     
// }).listen(3000, "127.0.0.1",()=>{
//     console.log("Сервер начал прослушивание запросов");
// });

// const fs = require("fs");
 
// fs.readFile("hello.txt", function(error,data){
//     if(error) {  // если возникла ошибка
//         return console.log(error);
//     }
//     console.log(data.toString());   // выводим считанные данные
// });
// console.log("Асинхронное чтение файлов");


// const fs = require("fs");
 
// const data = "Hello Node.js\n";
     
// fs.writeFile("hello2.txt", data, function(error){
//     if(error){  // если ошибка
//         return console.log(error);
//     }
//     console.log("Файл успешно записан");
// });

// const fs = require("fs");
 
// // синхронное добавление
// fs.appendFileSync("hello2.txt", "Hello word\n");
 
// // асинхронное добавление
// fs.writeFile("hello2.txt", "Hello all\n", {flag:"a"},  function(error){
//     if(error) return console.log(error); // если возникла ошибка
                 
//     console.log("Запись файла завершена");
// });

// const fs = require("fs");
 
// // асинхронное добавление
// fs.stat("hello.txt", (error, stats) => {  
//     if (error)  return console.error(error);
//     console.log(stats.isFile());        // true  
//     console.log(stats.isDirectory());   // false  
//     console.log(stats);
// });

// const fs = require("fs");
 
// const stats = fs.statSync("hello2.txt")
// console.log(stats.isFile());        // true  
// console.log(stats.isDirectory());   // false  
// console.log(stats);



// fs.unlink("hello.txt", (error) => {
//   if (error) return console.log(error); // если возникла ошибка 
//   console.log("File deleted");
// });


// const fs = require("fs");
 
// fs.mkdir("test", (error) => {  
//         if (error) return console.log(error);
//         console.log("Folder created");
// });

// const fs = require("fs");
 
// fs.readdir("test", (error, files) => {  
//         if (error) return console.log(error);
//         files.forEach((file) => console.log(file));
// });

const fs = require("fs");
 
fs.rmdir("test", (error) => {  
        if (error) return console.log(error);
        console.log("Folder deleted");
});