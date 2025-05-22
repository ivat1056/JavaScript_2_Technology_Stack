// const os = require("os");
// // получим имя текущего пользователя
// const userName = os.userInfo().username;
 
// console.log(userName);

	
// const greeting = require("./greeting");

// const greeting = require("./greeting");
// console.log(greeting); // {}


// const os = require("os");
// const greeting = require("./greeting");
 
// // имя текущего пользователя
// const userName = os.userInfo().username;
 
// console.log(`Дата запроса: ${greeting.date}`);
// greeting.printMessage(userName);


// const {date, printMessage} = require("./greeting");
 
// // имя текущего пользователя
// const userName = "Tom";
 
// console.log(`Дата запроса: ${date}`);
// printMessage(userName);


// получаем только функцию printMessage
// const User = require("./user.js");
 
// const eugene = new User("Eugene", 22);
// eugene.print();
// eugene.sayHi();




// const greeting1 = require("./greeting.js");
// console.log(`Hello ${greeting1.name}`); //Hello Alice
 
// const greeting2 = require("./greeting.js");
// greeting2.name= "Bob";
 
// console.log(`Hello ${greeting2.name}`); //Hello Bob
// // greeting1.name тоже изменилось
// console.log(`Hello ${greeting1.name}`); //Hello Bob

const messages = require("./messages");
  
messages.getMorningMessage();
messages.getEveningMessage();