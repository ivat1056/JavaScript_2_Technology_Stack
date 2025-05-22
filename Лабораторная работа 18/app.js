// const EventEmitter = require("events");
// // определяем эмиттер событий
// const emitter = new EventEmitter();
 
// // имя события, которое будет обрабатываться
// const eventName = "greet";
 
// // регистрируем три обработчика для события "greet"
// emitter.on(eventName, function(){
//     console.log("Hello World!");
// });
// emitter.on(eventName, function(){
//     console.log("Привет мир!");
// });
// emitter.on(eventName, function(){
//     console.log("Hallo Welt!");
// });
  
// // генерируем событие greet
// emitter.emit(eventName);


// const EventEmitter = require("events");
// const emitter = new EventEmitter();
 
// const eventName = "greet";
 
// emitter.on(eventName, function(data){
//     console.log(data);
// });
 
// emitter.emit(eventName, "Привет пир!");

// const EventEmitter = require("events");

// const eventName = "greet";

// class User extends EventEmitter {
//     constructor(username) {
//         super(); // вызываем конструктор EventEmitter
//         this.name = username;
//     }

//     sayHi() {
//         console.log("Привет. Меня зовут", this.name);
//         this.emit(eventName, this.name); // генерируем событие, передаем обработчику имя
//     }
// }

// const tom = new User("Tom");

// // добавляем к объекту tom обработку события "greet"
// // обработчик ожидает получить имя пользователя
// tom.on(eventName, function(username) {
//     console.log("Привет,", username);
// });

// // при выполнении метода генерируется событие "greet"
// tom.sayHi();


// const EventEmitter = require("events");
// const emitter = new EventEmitter();
 
// const eventName = "greet";
 
// emitter.on(eventName, function(username){
//     console.log("Прив", username);
// });
 
// class User{
//     constructor(username, emitter){
//         this.name = username;
//         this.emitter = emitter;
//     }
//     sayHi() {
//         console.log("Привет. Меня зовут", this.name);
//     this.emitter.emit(eventName, this.name);    // генерируем событие, передаем обработчику имя
//     }
// }
 
// const tom = new User("Tom", emitter);
// tom.sayHi();

// const http = require("http");
 
// http.createServer(function(request, response){
     
// }).listen(3000);


const fs = require("fs");
  
const writeableStream = fs.createWriteStream("hello.txt");
writeableStream.write("Привет мир!\n");
writeableStream.write("Продолжение записи\n");
writeableStream.end("Завершение записи\n");
 
const readableStream = fs.createReadStream("hello.txt");
  
readableStream.on("data", function(chunk){ 
    console.log(chunk.toString());
});