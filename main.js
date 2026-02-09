// "use strict";
// let age = 20;
// let name = "Denis";
// let isStudent = true;

// console.log("Name: ", name);
// console.log("Age: ", age);
// console.log("Is student: ", isStudent);

// let value = 10;
// console.log(value);
// value = "Теперь это строка";
// console.log(value);
// value = true;
// console.log(value);

// let userName = "Алексей";
// console.log(`Привет, ${userName}!`);
// let price = 99.99;
// let temperature = -15;
// let infinity = 1 / 0;
// let nitANumber = 0 / 0;
// console.log(0.1 + 0.2);
// let bigNumber = 90n;
// let huge = BigInt("123123");
// let isAlive = true;
// let isWorking = false;
// let isAdult = age >= 18;
// let x;
// let y = undefined;
// let userData = null;
// let id = Symbol("id");
// let person = {
//    name: "Станислав",
//    age: 30,
//    isStudent: false,
//    sayHello: function () {
//       console.log("Привет!");
//    },
// };

// console.log(person.name);
// let fruits = ["яблоко", "банан", "апельсин"];
// let numbers = [1, 2, 3, 4, 5];
// let mixed = ["текст", 42, true, null];
// function sum(a, b) {
//    return a + b;
// }
// let multiply = function (x, y) {
//    return x * y;
// };
// console.log(sum(5, 3));

// let now = new Date();
// let birthday = new Date("1995-12-17");
// let a = 10;
// let b = 3;
// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(10 + "5");
// console.log("10" - 5);
// const numberArray = [1, 2, 3];
// numbersArray[0] = 10;
// console.log(numbersArray);
// numbersArray = [5, 6, 7];
// const persons = { name: "Denis", age: 18 };
// persons.age = 50;
// persons.city = "Volgograd";
// console.log(persons);
// person = { name: "Stas" };

// console.log(typeof "текст");
// console.log(typeof 42);
// console.log(typeof true);
// console.log(typeof undefined);
// console.log(typeof null);
// console.log(typeof {});
// console.log(typeof []);
// console.log(typeof function () {});

// let numberX = null;
// console.log(numberX === null);

// let newPrice = 50;
// console.log(`значение: ${newPrice} и тип: ${typeof newPrice}`);
// newPrice = "50Р";
// console.log(`значение: ${newPrice} и тип: ${typeof newPrice}`);

// let num = 42;
// let str = String(num);
// let str2 = num.toString();
// let str3 = "" + num;

// let strNum = "123";
// let int = Number(strNum);
// let int2 = parseInt("42.5");
// let float = parseFloat("3.14");
// let int3 = +"99";

// let bool1 = Boolean(1);
// let bool2 = !!1;
// let bool3 = Boolean(0);
// let bool4 = Boolean("");

// console.log(5 == "5");
// console.log(5 === "5");
// console.log(0 == false);
// console.log(0 === false);
// console.log(null == undefined);
// console.log(null === undefined);

// let obj1 = { name: "john" };
// let obj2 = { name: "john" };

// console.log(obj1 == obj2);
// console.log(obj1 === obj2);

// let obj3 = obj1;
// console.log(obj1 === obj3);

// let arr1 = [1, 2, 3];
// let arr2 = [1, 2, 3];
// console.log(arr1 === arr2);

let yourAge = 18;
if (yourAge >= 18) {
   console.log("Доступ разрешен");
} else {
   console.log("доступ запрещен");
}

const temperature = 0;
if (temperature > 20) {
   console.log("Тепло");
} else if (temperature > 0) {
   console.log("Прохладно");
} else {
   console.log("Холодной");
}

const isLoggedIn = true;
const isAdmin = true;
if (isLoggedIn && isAdmin) {
   console.log("Полный доступ");
} else if (isLoggedIn && !isAdmin) {
   console.log("Ограниченный доступ");
} else {
   console.log("Доступ запрещен");
}

const a3 = 10;
const b3 = "10";
console.log(a3 == b3);
console.log(a3 === b3);

let message = age >= 18 ? "Совершеннолетний" : "Несовершеннолетний";
console.log(message);

let day = 3;
switch (day) {
   case 1:
      console.log("Понедельник");
      break;
   case 2:
      console.log("Вторник");
      break;
   case 3:
      console.log("Среда");
      break;
   default:
      console.log("Неизвестный день");
}

const monthNumber = 3;
switch (monthNumber) {
   case 1:
      console.log("январь");
      break;
   case 2:
      console.log("февраль");
      break;
   case 3:
      console.log("март");
      break;
   case 4:
      console.log("апрель");
      break;
   case 5:
      console.log("май");
      break;
   case 6:
      console.log("июнь");
      break;
   case 7:
      console.log("июль");
      break;
   case 8:
      console.log("август");
      break;
   case 9:
      console.log("сентябрь");
      break;
   case 10:
      console.log("октябрь");
      break;
   case 11:
      console.log("ноябрь");
      break;
   case 12:
      console.log("декабрь");
      break;
   default:
      console.log("я не знаю такого месяца");
}
