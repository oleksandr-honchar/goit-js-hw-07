// const a = 5;
// const b = 10;
// const biggerNumber = a > b ? a : b;

// console.log(biggerNumber); // 10

// function getBiggerNumber(a, b) {
//   return a > b ? a : b;
// }

// console.log(getBiggerNumber(5, 10)); // 10
// console.log(getBiggerNumber(20, 15)); // 20
// console.log(getBiggerNumber(7, 7)); // 7

// function checkPassword(password) {
//   const correctPassword = "jqueryismyjam";
//   return password == correctPassword
//     ? "Access granted"
//     : "Access denied, wrong password!";
// }
// console.log(checkPassword("jqueryismyjam"));

// function getSubscriptionPrice(type) {
//   switch (type) {
//     case "starter":
//       return 0;
//       break;
//     case "organization":
//       return 50;
//       break;
//     case "professional":
//       return 20;
//       break;
//     default:
//       return "Invalid subscription type!";
//   }
// }

// console.log(getSubscriptionPrice("professional"));
// console.log(getSubscriptionPrice("starter"));
// console.log(getSubscriptionPrice("random"));
// console.log(getSubscriptionPrice("premium"));

// function isNumberInRange(start, end, number) {
//   if (number <= end && number >= start) {
//     return "true";
//   } else {
//     return "false";
//   }
// }

// console.log(isNumberInRange(10, 30, 17));
// console.log(isNumberInRange(10, 30, 5));
// console.log(isNumberInRange(20, 50, 24));
// console.log(isNumberInRange(20, 50, 76));

// function checkAccess(subType) {
//   if (subType == "pro" || subType == "vip") {
//     return "true";
//   } else {
//     return "false";
//   }
// }

// console.log(checkAccess("pro"));
// console.log(checkAccess("starter"));
// console.log(checkAccess("vip"));
// console.log(checkAccess("free"));
// console.log(checkAccess("professional"));

// function toggleModalVisibility(isVisible) {
//   if (isVisible == !true) {
//     return "true";
//   } else {
//     return "false";
//   }
// }

// console.log(toggleModalVisibility(true));
// console.log(toggleModalVisibility(false));

// function getSubstring(string, length) {
//   return (string = string.slice(0, length));
// }
// console.log(getSubstring("Hello world", 3));
// console.log(getSubstring("Hello world", 6));
// console.log(getSubstring("Hello world", 8));
// console.log(getSubstring("Hello world", 11));

// function normalizeInput(input, to) {
//   if (to == "upper") return (normalizeInput = input.toUpperCase());
//   else if (to == "lower") return (normalizeInput = input.toLowerCase());
//   else return "upper or lower only";
// }

// console.log(normalizeInput("Hello world", "bad"));

// function checkForName(fullName, firstName) {
//   const lowerCaseFullName = fullName.toLowerCase();
//   const lowerCaseFirstName = firstName.toLowerCase();
//   if (lowerCaseFullName.includes(lowerCaseFirstName)) return "true";
//   else return "false";
// }

// console.log(checkForName("Egor Kolbasov", "Egir"));

// function checkFileExtension(fileName, ext) {
//   if (fileName.endsWith(ext)) return "true";
//   else return "false";
// }

// console.log(checkFileExtension("index.html", "html"));
// console.log(checkFileExtension("index.html", "css"));
// console.log(checkFileExtension("index.css", "css"));
// console.log(checkFileExtension("index.js", "js"));

// function getFileName(file) {
//   if (file.includes(".")) return file.slice(0, file.lastIndexOf("."));
//   else return file;
// }

// console.log(getFileName("styles.css"));
// console.log(getFileName("app.js"));
// console.log(getFileName("index.html"));
// console.log(getFileName("index"));

// function createFileName(name, ext) {
//   return `${name.trim()}.${ext.trim()}`;
// }

// console.log(createFileName("index", "html"));
// console.log(createFileName("style", "css"));
// console.log(createFileName(" app ", " js "));

// function calculateTotal(number) {
//   let sum = 0;
//   for (let i = 1; i <= number; i = i + 1) {
//     sum += i;
//   }
//   return sum;
// }

// console.log(calculateTotal(1));
// console.log(calculateTotal(3));
// console.log(calculateTotal(0));
// console.log(calculateTotal(18));
// console.log(calculateTotal(24));

// function calculateTotal(number) {
//   let sum = 0;
//   for (let i = 1; i <= number; i += 1) {
//     sum += i;
//   }
//   return sum;
// }

// console.log(calculateTotal(1));
// console.log(calculateTotal(3));
// console.log(calculateTotal(0));

// function calculateEvenTotal(number) {
//   let sum = 0;
//   for (let i = 0; i <= number; i += 2) {
//     sum += i;
//   }
//   return sum;
// }

// console.log(calculateEvenTotal(1));
// console.log(calculateEvenTotal(3));
// console.log(calculateEvenTotal(7));
// console.log(calculateEvenTotal(18));
// console.log(calculateEvenTotal(27));

// const start = 6;
// const end = 17;
// let number;
// for (number = start; number <= end; number += 1) {
//   if (number % 5 === 0) {
//     console.log(number);
//     break;
//   }
// }

// function findNumber(start, end, divisor) {
//   for (let i = start; i <= end; i += 1) {
//     if (i % divisor === 0) {
//       return i;
//     }
//   }
//   return i;
// }

// console.log(findNumber(2, 6, 5));
// console.log(findNumber(8, 17, 3));
// console.log(findNumber(10, 50, 4));
// console.log(findNumber(43, 100, 7));

// function calcBmi(weight, height) {
//   let numWeight = weight.replace(",", ".");
//   numWeight = Number.parseFloat(numWeight);
//   const numHeight = Number.parseFloat(height);

//   const bmi = numWeight / numHeight ** 2;
//   return bmi.toFixed(1);
// }

// const bmi = calcBmi("82,3", "1.75");
// console.log(bmi);

// const user = "Alice";
// const i = 0;

// for (let i = 0; i < user.length; i += 1) {
//   console.log(user[i], i);
// }

// const user = {
//   name: "Peter",
//   age: 30,
//   pet: "cat",
//   "Wether is good": false,
// };

// console.log(user["Wether is good"]);

// function makePizza() {
//   return "Your pizza is being prepared, please wait.";
// }

// const result = makePizza();
// const pointer = makePizza;

// console.log(makePizza());
// console.log(makePizza);

// function greet(name) {
//   console.log(`Welcome ${name}!`);
// }

// function notify(name) {
//   console.log(`Dear ${name}, your room will be ready in 30 minutes`);
// }

// function registerGuest(name, callback) {
//   console.log(`Registering ${name}!`);
//   callback(name);
// }

// registerGuest("Alice", greet);
// registerGuest("Bob", notify);

// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// function makeMessage(pizzaName, callback) {
//   return callback(pizzaName);
// }

// console.log(makeMessage("Ultracheese", deliverPizza));
// console.log(makeMessage("Royal Grand", makePizza));

// //

// function registerGuest(name, callback) {
//   console.log(`Registering ${name}!`);
//   callback(name);
// }

// // Передаємо інлайн-функцію greet у якості колбека
// registerGuest("Mango", function greet(name) {
//   console.log(`Welcome ${name}!`);
// });

// // Передаємо інлайн-функцію notify у якості колбека
// registerGuest("Poly", function notify(name) {
//   console.log(`Dear ${name}, your room will be ready in 30 minutes`);
// });

// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}`);
// });

// makePizza("Ultracheese", function eatPizza(pizzaName) {
//   console.log(`Eating pizza ${pizzaName}`);
// });

// const numbers = [5, 10, 15, 20, 25];

// // Класичний for
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(`Index ${i}, value ${numbers[i]}`);
// }

// // Перебираючий метод forEach
// numbers.forEach(function (number, index) {
//   console.log(`Index ${index}, value ${number}`);
// });

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;

//   orderedItems.forEach(function (item) {
//     totalPrice += item;
//   });

//   return totalPrice;
// }

// const result = calculateTotalPrice([410, 370, 120, 850, 570]);
// console.log(result); //

// function filterArray(numbers, value) {
//   const filteredNumbers = [];

//   numbers.forEach(function (number) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   return filteredNumbers;
// }

// const result = filterArray([1, 2, 3, 4, 5], 3);
// console.log(result); // [4, 5]
// //

// const add = (a, b, c) => {
//   return a + b + c;
// };
// const multiply = (a, b, c) => {
//   return a * b * c;
// };
// const subtract = (a, b, c) => {
//   return a - b - c;
// };
// const divide = (a, b, c) => {
//   return a / b / c;
// };
// const showMenu = () => {
//   console.log("Menu:");
//   console.log("1. Add");
//   console.log("2. Multiply");
//   console.log("3. Subtract");
//   console.log("4. Divide");
//   console.log("0. Exit");
// };

// const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;

// console.log(calculateTotalPrice(5, 100)); // 500

// const add = (a, b, c) => {
//   console.log(a, b, c);
//   return a + b + c;
// };

// add(1, 2, 3); // 6)

// const add = (a, b, c) => a + b + c;

// console.log(add(1, 2, 3)); // 6
// //

// До
// function classicAdd(a, b, c) {
//   return a + b + c;
// }

// Після
// const arrowAdd = (a, b, c) => a + b + c;

// console.log(classicAdd(1, 2, 3)); // 6
// console.log(arrowAdd(1, 2, 3)); // 6

// //

// const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;

// console.log(calculateTotalPrice(5, 100)); // 500

// const add = (...args) => {
//   console.log(args);
// };

// add(1, 2, 3); // [1, 2, 3]

// const numbers = [5, 10, 15, 20, 25];

// // Звичайна анонімна функція
// numbers.forEach(function (number, index) {
//   console.log(`Index ${index}, value ${number}`);
// });

// // Стрілочна анонімна функція
// numbers.forEach((number, index) => {
//   console.log(`Index ${index}, value ${number}`);
// });

// const numbers = [5, 10, 15, 20, 25];

// const logMessage = (number, index) => {
//   console.log(`Index ${index}, value ${number}`);
// };

// numbers.forEach(logMessage);

// const orderedItems = [10, 20, 30]; // Example items

// const calculateTotalPrice = (orderedItems) => {
//   let totalPrice = 0;
//   orderedItems.forEach((item) => {
//     totalPrice += item;
//   });
//   return totalPrice;
// };

// const total = calculateTotalPrice(orderedItems);
// console.log(total); // ➡️ 60

// function filterArray(numbers, value) {
//   const filteredNumbers = [];

//   numbers.forEach(function (number) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   return filteredNumbers;
// }

// const filterArray = (numbers, value) => {
//   const filteredNumbers = [];

//   numbers.forEach((number) => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   return filteredNumbers;
// };

// const result = filterArray([1, 2, 3, 4, 5], 3);
// console.log(result); // [4, 5]

// const dirtyMultiply = (array, value) => {
//   for (let i = 0; i < array.length; i += 1) {
//     array[i] = array[i] * value;
//   }
// };

// const numbers = [1, 2, 3, 4, 5];
// dirtyMultiply(numbers, 2);
// // Відбулася мутація вихідних даних - масиву numbers
// console.log(numbers); // [2, 4, 6, 8, 10]

// const pureMultiply = (array, value) => {
//   const newArray = [];

//   array.forEach((element) => {
//     newArray.push(element * value);
//   });

//   return newArray;
// };

// const numbers = [1, 2, 3, 4, 5];
// const doubledNumbers = pureMultiply(numbers, 2);

// // Мутація вихідних даних не відбулася
// console.log(numbers); // [1, 2, 3, 4, 5]
// // Функція повернула новий масив зі зміненими даними
// console.log(doubledNumbers); // [2, 4, 6, 8, 10]

// function changeEven(numbers, value) {
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 2 === 0) {
//       numbers[i] = numbers[i] + value;
//     }
//   }
// }

// const numbers = [1, 2, 3, 4, 5];
// changeEven(numbers, 10);

// function changeEven(numbers, value) {
//   const newArray = [];

//   numbers.forEach((number) => {
//     if (number % 2 === 0) {
//       newArray.push(number + value);
//     } else {
//       newArray.push(number);
//     }
//   });

//   return newArray;
// }

// const numbers = [1, 2, 3, 4, 5];
// const updatedNumbers = changeEven(numbers, 10);

// console.log(updatedNumbers); //

// const planets = ["Earth", "Mars", "Venus", "Jupiter"];

// const planetsInUpperCase = planets.map((planet) => planet.toUpperCase());
// console.log(planetsInUpperCase); // ["EARTH", "MARS", "VENUS", "JUPITER"]

// const planetsInLowerCase = planets.map((planet) => planet.toLowerCase());
// console.log(planetsInLowerCase); // ["earth", "mars", "venus", "jupiter"]

// // Оригінальний масив не змінився
// console.log(planets); // ["Earth", "Mars", "Venus", "Jupiter"]

// const planets = ["Earth", "Mars", "Venus", "Jupiter"];

// const planetsLengths = planets.map((planet) => planet.length);
// console.log(planetsLengths); // [5, 4, 5, 7]

// const students = [
//   { name: "Mango", score: 83 },
//   { name: "Poly", score: 59 },
//   { name: "Ajax", score: 37 },
//   { name: "Kiwi", score: 94 },
//   { name: "Houston", score: 64 },
// ];

// const names = students.map((student) => student.name);
// console.log(names); // ["Mango", "Poly", "Ajax", "Kiwi", "Houston"]

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
// //   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// // ];

// // const titles = books.map((book) => book.title);
// // // console.log(titles); //

// // const students = [
// //   { name: "Mango", courses: ["mathematics", "physics"] },
// //   { name: "Poly", courses: ["science", "mathematics"] },
// //   { name: "Kiwi", courses: ["physics", "biology"] },
// // ];

// // const mappedCourses = students.map((student) => student.courses);
// // console.log(mappedCourses); // [["mathematics", "physics"], ["science", "mathematics"], ["physics", "biology"]]

// // const flattenedCourses = students.flatMap((student) => student.courses);
// // console.log(flattenedCourses); // ["mathematics", "physics", "science", "mathematics", "physics", "biology"];

// // const books = [
// //   {
// //     title: "The Last Kingdom",
// //     author: "Bernard Cornwell",
// //     genres: ["adventure", "history"],
// //   },
// //   {
// //     title: "Beside Still Waters",
// //     author: "Robert Sheckley",
// //     genres: ["fiction"],
// //   },
// //   {
// //     title: "Redder Than Blood",
// //     author: "Tanith Lee",
// //     genres: ["horror", "mysticism"],
// //   },
// // ];

// // const genres = books.flatMap((book) => book.genres);
// // console.log(genres); // ["adventure", "history", "fiction", "horror", "mysticism"]

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     skills: ["ipsum", "lorem"],
//     gender: "male",
//     age: 37,
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//     gender: "female",
//     age: 34,
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//     gender: "male",
//     age: 24,
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     skills: ["adipisicing", "irure", "velit"],
//     gender: "female",
//     age: 21,
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     skills: ["ex", "culpa", "nostrud"],
//     gender: "male",
//     age: 27,
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
// //     balance: 1498,
// //     skills: ["non", "amet", "ipsum"],
// //     gender: "male",
// //     age: 38,
// //   },
// //   {
// //     name: "Sheree Anthony",
// //     email: "shereeanthony@kog.com",
// //     eyeColor: "brown",
// //     friends: ["Goldie Gentry", "Briana Decker"],
// //     isActive: true,
// //     balance: 2764,
// //     skills: ["lorem", "veniam", "culpa"],
// //     gender: "female",
// //     age: 39,
// //   },
// // ];

// // const getUserEmails = (users) => users.map((user) => user.email);
// // console.log(getUserEmails(users)); // ["moorehensley@indexia.com", "sharlenebush@tubesys.com", "

// // const values = [51, -3, 27, 21, -68, 42, -37];

// // const positiveValues = values.filter((value) => value >= 0);
// // console.log(positiveValues); // [51, 27, 21, 42]
// // // до positiveValues потрапили всі елементи масиву values, які задовольнили умову колбека, тобто були >= 0

// // // const negativeValues = values.filter((value) => value < 0);
// // // console.log(negativeValues); // [-3, -68, -37]
// // // // до negativeValues потрапили всі елементи масиву values, які задовольнили умову колбека, тобто були < 0

// // // const bigValues = values.filter((value) => value > 1000);
// // // console.log(bigValues); // []
// // // // до bigValues потрапили всі елементи масиву values, які задовольнили умову колбека, тобто були > 1000

// // // console.log(values); // [51, -3, 27, 21, -68, 42, -37]
// // // // Оригінальний масив values не змінився

// // // const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];

// // // const evenNumbers = numbers.filter((number) => number % 2 === 0);
// // // console.log(evenNumbers); //;
// // // const oddNumbers = numbers.filter((number) => number % 2 !== 0);
// // // console.log(oddNumbers); //;

// // // const LOW_SCORE = 50;
// // // const HIGH_SCORE = 80;
// // // const students = [
// // //   { name: "Mango", score: 83 },
// // //   { name: "Poly", score: 59 },
// // //   { name: "Ajax", score: 37 },
// // //   { name: "Kiwi", score: 94 },
// // //   { name: "Houston", score: 64 },
// // // ];

// // // const best = students.filter((student) => student.score >= HIGH_SCORE);
// // // console.log(best); // Масив об'єктів з іменами Mango і Kiwi

// // // const worst = students.filter((student) => student.score < LOW_SCORE);
// // // console.log(worst); // Масив з одним об'єктом Ajax

// // // const average = students.filter(
// // //   (student) => student.score >= LOW_SCORE && student.score < HIGH_SCORE
// // // );
// // // console.log(average); // Масив об'єктів з іменами Poly і Houston

// // // const books = [
// // //   {
// // //     title: "The Last Kingdom",
// // //     author: "Bernard Cornwell",
// // //     rating: 8.38,
// // //   },
// // //   {
// // //     title: "Beside Still Waters",
// // //     author: "Robert Sheckley",
// // //     rating: 8.51,
// // //   },
// // //   {
// // //     title: "The Dream of a Ridiculous Man",
// // //     author: "Fyodor Dostoevsky",
// // //     rating: 7.75,
// // //   },
// // //   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
// // //   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// // // ];

// // // const MIN_RATING = 8;
// // // const AUTHOR = "Bernard Cornwell";

// // // const topRatedBooks = books.filter((book) => book.rating >= MIN_RATING);
// // // console.log(topRatedBooks);
// // // const booksByAuthor = books.filter((book) => book.author === AUTHOR);
// // // console.log(booksByAuthor);

// // const users = [
// //   {
// //     name: "Moore Hensley",
// //     email: "moorehensley@indexia.com",
// //     eyeColor: "blue",
// //     friends: ["Sharron Pace"],
// //     isActive: false,
// //     balance: 2811,
// //     gender: "male",
// //   },
// //   {
// //     name: "Sharlene Bush",
// //     email: "sharlenebush@tubesys.com",
// //     eyeColor: "blue",
// //     friends: ["Briana Decker", "Sharron Pace"],
// //     isActive: true,
// //     balance: 3821,
// //     gender: "female",
// //   },
// //   {
// //     name: "Ross Vazquez",
// //     email: "rossvazquez@xinware.com",
// //     eyeColor: "green",
// //     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
// //     isActive: false,
// //     balance: 3793,
// //     gender: "male",
// //   },
// //   {
// //     name: "Elma Head",
// //     email: "elmahead@omatom.com",
// //     eyeColor: "green",
// //     friends: ["Goldie Gentry", "Aisha Tran"],
// //     isActive: true,
// //     balance: 2278,
// //     gender: "female",
// //   },
// //   {
// //     name: "Carey Barr",
// //     email: "careybarr@nurali.com",
// //     eyeColor: "blue",
// //     friends: ["Jordan Sampson", "Eddie Strong"],
// //     isActive: true,
// //     balance: 3951,
// //     gender: "male",
// //   },
// //   {
// //     name: "Blackburn Dotson",
// //     email: "blackburndotson@furnigeer.com",
// //     eyeColor: "brown",
// //     friends: ["Jacklyn Lucas", "Linda Chapman"],
// //     isActive: false,
// //     balance: 1498,
// //     gender: "male",
// //   },
// //   {
// //     name: "Sheree Anthony",
// //     email: "shereeanthony@kog.com",
// //     eyeColor: "brown",
// //     friends: ["Goldie Gentry", "Briana Decker"],
// //     isActive: true,
// //     balance: 2764,
// //     gender: "female",
// //   },
// // ];

// // const getUsersWithEyeColor = (users, color) => {
// //   return users.filter((user) => user.eyeColor === color);
// // };

// // console.log(getUsersWithEyeColor(users, "blue"));
// // console.log(getUsersWithEyeColor(users, "green"));
// // console.log(getUsersWithEyeColor(users, "brown"));
// // console.log(getUsersWithEyeColor(users, "black"));

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//     age: 37,
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//     age: 34,
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//     age: 24,
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//     age: 21,
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//     age: 27,
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//     age: 38,
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//     age: 39,
//   },
// ];

// const getUsersWithAge = (users, minAge, maxAge) => {
//   return users.filter((user) => user.age >= minAge && user.age <= maxAge);
// };

// // console.log(getUsersWithAge(users, 80, 100));

// const colorPickerOptions = [
//   { label: "red", color: "#F44336" },
//   { label: "green", color: "#4CAF50" },
//   { label: "blue", color: "#2196F3" },
//   { label: "pink", color: "#E91E63" },
//   { label: "indigo", color: "#3F51B5" },
// ];

// colorPickerOptions.find((option) => option.label === "blue"); // { label: "blue", color: "#2196F3" }
// colorPickerOptions.find((option) => option.label === "pink"); // { label: "pink", color: "#E91E63" }
// colorPickerOptions.find((option) => option.label === "white"); // undefined

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
// ];
// const BOOK_TITLE = "The Dream of a Ridiculous Man";
// const AUTHOR = "Robert Sheckley";

// const bookWithTitle = books.find((book) => book.title === BOOK_TITLE);
// const bookByAuthor = books.find((book) => book.author === AUTHOR);

// console.log(bookWithTitle, BOOK_TITLE); //
// console.log(bookByAuthor, AUTHOR);

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//   },
// ];

// const getUserWithEmail = (users, email) => {
//   return users.find((user) => user.email === email);
// };

// console.log(getUserWithEmail(users, "elmahead@omatom.com"));
// const products = [
//   { name: "apple", quantity: 2 },
//   { name: "orange", quantity: 5 },
//   { name: "plum", quantity: 0 },
// ];

// const hasEveryProduct = products.every((product) => product.quantity > 0);
// console.log(hasEveryProduct); // false

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//   },
// ];

// const isEveryUserActive = (users) => {
//   return users.every((user) => user.isActive === true);
// };

// console.log(isEveryUserActive(users)); // false

// const total = [2, 7, 3].reduce((previousValue, number) => {
//   return previousValue + number;
// }, 0);

// console.log(total); // 12

// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244,
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]

// const totalPlayTime = playtimes.reduce((a, b) => {
//   return a + b;
// }, 0);

// const averagePlayTime = totalPlayTime / playtimes.length;

// console.log(averagePlayTime);

// const students = [
//   { name: "Mango", score: 83 },
//   { name: "Poly", score: 59 },
//   { name: "Ajax", score: 37 },
//   { name: "Kiwi", score: 94 },
//   { name: "Houston", score: 64 },
// ];

// // Назва акумулятора може бути довільною, це просто параметр функції
// const totalScore = students.reduce((total, student) => {
//   return total + student.score;
// }, 0);

// const averageScore = totalScore / students.length;

// console.log(averageScore); // 67.

// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];

// const totalAveragePlaytimePerGame = players.reduce((acc, player) => {
//   return acc + player.playtime / player.gamesPlayed;
// }, 0);

// console.log(totalAveragePlaytimePerGame);

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//   },
// // ];

// // const calculateTotalBalance = (users) => {
// //   return users.reduce((total, user) => {
// //     return total + user.balance;
// //   }, 0);
// // };

// // console.log(calculateTotalBalance(users));

// // const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// // const authors = [
// //   "Tanith Lee",
// //   "Bernard Cornwell",
// //   "Robert Sheckley",
// //   "Fyodor Dostoevsky",
// // ];

// // const ascendingReleaseDates = releaseDates.toSorted();

// // const alphabeticalAuthors = authors.toSorted();

// // console.log(ascendingReleaseDates); // [1967, 1973, 1984, 19
// // console.log(alphabeticalAuthors); //

// // const scores = [61, 19, 74, 35, 92, 56];
// // const ascendingScores = scores.toSorted((a, b) => b - a);
// // console.log(ascendingScores); // [19, 35, 56, 61, 74, 92]

// // const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];

// // const ascendingReleaseDates = releaseDates.toSorted((a, b) => a - b);

// // const descendingReleaseDates = releaseDates.toSorted((a, b) => b - a);

// // console.log(ascendingReleaseDates); // [1967, 1973, 1984, 1
// // console.log(descendingReleaseDates); // [2016, 20

// // const students = ["Jacob", "Artemis", "Solomon", "Adrian", "Kai", "Ganymede"];

// // const inAlphabetOrder = students.toSorted((a, b) => a.localeCompare(b));
// // console.log(inAlphabetOrder); // [ "Adrian", "Artemis", "Ganymede", "Jacob", "Kai", "Solomon" ]

// // const inReversedOrder = students.toSorted((a, b) => b.localeCompare(a));
// // console.log(inReversedOrder); // [ "Solomon", "Kai", "Jacob", "Ganymede", "Artemis", "Adrian" ]

// // const authors = [
// //   "Tanith Lee",
// //   "Bernard Cornwell",
// //   "Robert Sheckley",
// //   "Fyodor Dostoevsky",
// //   "Howard Lovecraft",
// // ];

// // const authorsInAlphabetOrder = authors.toSorted((a, b) => a.localeCompare(b));
// // const authorsInReversedOrder = authors.toSorted((a, b) => b.localeCompare(a));

// // console.log(authorsInAlphabetOrder); //

// // const students = [
// //   { name: "Mango", score: 83 },
// //   { name: "Poly", score: 59 },
// //   { name: "Ajax", score: 37 },
// // //   { name: "Kiwi", score: 94 },
// // // ];

// // // const inAscendingScoreOrder = students.toSorted(
// // //   (firstStudent, secondStudent) => firstStudent.score - secondStudent.score
// // // );

// // // const inDescendingScoreOrder = students.toSorted(
// // //   (firstStudent, secondStudent) => secondStudent.score - firstStudent.score
// // // );

// // // const inAlphabeticalOrder = students.toSorted((firstStudent, secondStudent) =>
// // //   firstStudent.name.localeCompare(secondStudent.name)
// // // );

// // // console.log(inAscendingScoreOrder);
// // // console.log(inDescendingScoreOrder);
// // // console.log(inAlphabeticalOrder);

// // const books = [
// //   {
// //     title: "The Last Kingdom",
// //     author: "Bernard Cornwell",
// //     rating: 8.38,
// //   },
// //   {
// //     title: "Beside Still Waters",
// //     author: "Robert Sheckley",
// //     rating: 8.51,
// //   },
// //   {
// //     title: "The Dream of a Ridiculous Man",
// //     author: "Fyodor Dostoevsky",
// //     rating: 7.75,
// //   },
// //   {
// //     title: "Redder Than Blood",
// //     author: "Tanith Lee",
// //     rating: 7.94,
// //   },
// //   {
// //     title: "Enemy of God",
// //     author: "Bernard Cornwell",
// //     rating: 8.67,
// //   },
// // ];

// // const sortedByAuthorName = books.toSorted((a, b) =>
// //   a.author.localeCompare(b.author)
// // );

// // const sortedByReversedAuthorName = books.toSorted((a, b) =>
// //   b.author.localeCompare(a.author)
// // );

// // const sortedByAscendingRating = books.toSorted((a, b) => a.rating - b.rating);

// // const sortedByDescendingRating = books.toSorted((a, b) => b.rating - a.rating);

// // console.log(sortedByAuthorName);
// // console.log(sortedByReversedAuthorName);
// // console.log(sortedByAscendingRating);
// // console.log(sortedByDescendingRating);

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;

// const names = books
//   .filter((book) => book.rating >= MIN_BOOK_RATING)
//   .map((book) => book.author)
//   .toSorted((a, b) => a.localeCompare(b));

// console.log(names);

// const pizzaPalace = {
//   pizzas: ["Supercheese", "Smoked", "Four meats"],
//   checkPizza(pizzaName) {
//     return this.pizzas.includes(pizzaName);
//   },
//   order(pizzaName) {
//     const isPizzaAvailable = this.checkPizza(pizzaName);

//     if (!isPizzaAvailable) {
//       return `Sorry, there is no pizza named «${pizzaName}»`;
//     }

//     return `Order accepted, preparing «${pizzaName}» pizza`;
//   },
// };

// console.log(pizzaPalace.order("Smoked")); // true
// console.log(pizzaPalace.order("Four meats")); // true
// console.log(pizzaPalace.order("Big Mike")); // false
// console.log(pizzaPalace.order("Viennese"));

// "use strict";

// function showThis() {
//   console.log("this in showThis: ", this);
// }

// const user = {
//   username: "Poly",
// };

// user.showContext = showThis;

// // Викликаємо в контексті об'єкта
// user.showContext(); // this in showThis: {username: "Poly", showContext: ƒ}

// // Викликаємо в глобальному контексті
// showThis(); // "this in showThis: undefined"

// function greet(str) {
//   console.log(`${str}, ${this.username}, your room is ${this.room}!`);
// }

// const mango = {
//   username: "Mango",
//   room: 27,
// };

// const poly = {
//   username: "Poly",
//   room: 191,
// };

// greet.call(mango, "Welcome"); // "Welcome, Mango, your room is 27!"
// greet.call(poly, "Aloha"); // "Aloha, Poly, your room is 191!"

// function greet(name) {
//   console.log(`Hello, ${name}! I am ${this.person}`);
// }

// const person = "John";
// const context = {
//   person: "Alice",
// };

// // greet.call(context, "Bob");

// const customer = {
//   firstName: "Jacob",
//   lastName: "Mercer",
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// function makeMessage(callback) {
//   const username = callback();
//   console.log(`Processing an application from ${username}`);
// }

// makeMessage(customer.getFullName.bind(customer)); // "Processing an application from Jacob Mercer"

// const parent = {
//   name: "Stacey",
//   surname: "Moore",
//   age: 54,
//   heritage: "Irish",
// };

// const child = Object.create(parent);
// child.name = "Jason";
// child.age = 27;

// console.log(parent.hasOwnProperty("surname"));
// console.log(parent.hasOwnProperty("heritage"));
// console.log(parent.hasOwnProperty("name"));
// console.log(child.name);
// console.log(child.hasOwnProperty("age"));
// console.log(child.age);
// console.log(child.surname);
// console.log(parent.hasOwnProperty("surname"));
// console.log(child.hasOwnProperty("heritage"));
// console.log(child.hasOwnProperty("name"));
// console.log(parent.isPrototypeOf(child));
// console.log(child.heritage);

// const ancestor = {
//   name: "Paul",
//   age: 83,
//   surname: "Dawson",
//   heritage: "Irish",
// };

// const parent = Object.create(ancestor);
// parent.name = "Stacey";
// parent.surname = "Moore";
// parent.age = 54;

// const child = Object.create(parent);
// child.name = "Jason";
// child.age = 27;

// console.log(ancestor.surname); //); //

// const objB = {
//   b: "objB prop",
// };

// const objA = Object.create(objB);
// objA.a = "objA prop";

// console.log(objA);
// // console.log(objB);

// const employee = {
//   baseSalary: 30000,
//   overtime: 10,
//   rate: 20,
//   getWage() {
//     return this.baseSalary + this.overtime * this.rate;
//   },
// };

// console.log(employee.getWage());

// class User {
//   // Тіло класу
// }

// const mango = new User();
// console.log(mango); // {}

// const poly = new User();
// console.log(poly); // {}

// class User {
//   constructor() {
//     console.log("constructor call");
//   }
// }

// // const mango = new User(); // "constructor call"
// // console.log(mango); // {}

// class User {
//   constructor(name, email) {
//     console.log(name, email);
//   }
// }

// const mango = new User("Mango", "mango@mail.com"); // "Mango mango@mail.com"
// console.log(mango); // {}

// class User {
//   constructor(name, email) {
//     // Ініціалізація властивостей екземпляра
//     this.name = name;
//     this.email = email;
//   }
// }

// const mango = new User("Mango", "mango@mail.com");
// console.log(mango); // { name: 'Mango', email: 'mango@mail.com' }

// const poly = new User("Poly", "poly@mail.com");
// console.log(poly); // { name: 'Poly', email: 'poly@mail.com' }

// class User {
//   constructor(params) {
//     this.name = params.name;
//     this.email = params.email;
//   }
// }

// const mango = new User({
//   name: "Mango",
//   email: "mango@mail.com",
// });

// console.log(mango);
// // { name: "Mango", email: "mango@mail.com" }

// class Car {
//   constructor(params) {
//     this.brand = params.brand;
//     this.model = params.model;
//     this.price = params.price;
//   }
// }

// class User {
//   constructor(params) {
//     this.name = params.name;
//     this.email = params.email;
//   }

//   getEmail() {
//     return this.email;
//   }

//   changeEmail(newEmail) {
//     this.email = newEmail;
//   }
// }

// const mango = new User({
//   name: "Mango",
//   email: "mango@mail.com",
// });

// console.log(mango.getEmail()); // “mango@mail.com”

// class User {
//   constructor(params) {
//     this.name = params.name;
//     this.email = params.email;
//   }

//   getEmail() {
//     return this.email;
//   }

//   changeEmail(newEmail) {
//     this.email = newEmail;
//   }
// }

// console.log(User.prototype); // {constructor: ƒ, getEmail: ƒ, changeEmail: ƒ}

// class User {
//   // Необов'язкове оголошення публічних властивостей
//   name;
//   // Обов'язкове оголошення приватних властивостей
//   #email;

//   constructor(params) {
//     this.name = params.name;
//     this.#email = params.email;
//   }
// }

// const mango = new User({
//   name: "Mango",
//   email: "mango@mail.com",
// });
// console.log(mango.name); // "Mango"
// console.log(mango.#email); // Виникне помилка, це приватна властивість

// class User {
//   name;
//   #email;

//   constructor(params) {
//     this.name = params.name;
//     this.#email = params.email;
//   }

//   getEmail() {
//     return this.#email;
//   }

//   changeEmail(newEmail) {
//     this.#email = newEmail;
//   }
// }

// const mango = new User({
//   name: "Mango",
//   email: "mango@mail.com",
// });

// console.log(mango.getEmail()); // "mango@mail.com"
// mango.changeEmail("mango@supermail.com");
// console.log(mango.getEmail()); // "mango@supermail.com"

// class User {
//   #email;

//   constructor(params) {
//     this.name = params.name;
//     this.#email = params.email;
//   }

//   // Геттер email
//   get email() {
//     return this.#email;
//   }

//   // Сеттер email
//   set email(newEmail) {
//     if (newEmail === "") {
//       console.log("Помилка! Пошта не може бути порожнім рядком!");
//       return;
//     }

//     this.#email = newEmail;
//   }
// }

// const mango = new User({
//   name: "Mango",
//   email: "mango@mail.com",
// });

// console.log(mango.email); // mango@mail.com

// mango.email = "mango@supermail.com";

// console.log(mango.email); // mango@supermail.com

// class Car {
//   static maxPrice = 50000;
//   #price;

//   constructor(params) {
//     this.#price = params.price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     if (newPrice <= Car.maxPrice) {
//       this.#price = newPrice;
//     }
//   }
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000

// class User {
//   static #takenEmails = [];

//   static isEmailTaken(email) {
//     return User.#takenEmails.includes(email);
//   }

//   #email;

//   constructor(params) {
//     this.#email = params.email;
//     User.#takenEmails.push(params.email);
//   }
// }

// const mango = new User({ email: "mango@mail.com" });

// console.log(User.isEmailTaken("mango@mail.com")); // true
// console.log(User.isEmailTaken("poly@mail.com")); // false

// class Car {
//   static #maxPrice = 50000;
//   static checkPrice(price) {
//     if (price <= Car.#maxPrice) {
//       return "Success! Price is within acceptable limits";
//     }

//     return "Error! Price exceeds the maximum";
//   }

//   constructor(params) {
//     this.price = params.price;
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"

// class User {
//   #email;

//   constructor(email) {
//     this.#email = email;
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

// class ContentEditor extends User {
//   // Тіло класу ContentEditor
// }

// const editor = new ContentEditor("mango@mail.com");
// console.log(editor); // { #email: "mango@mail.com" }
// console.log(editor.email); // "mango@mail.com"

// class User {
//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {
//   static role = { BASIC: "basic", SUPERUSER: "superuser" };
// }

// console.log(Admin.role.BASIC); // "basic"
// console.log(Admin.role.SUPERUSER); // { BASIC: "basic", SUPERUSER: "superuser" }

// class User {
//   #email;

//   constructor(email) {
//     this.#email = email;
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

// class ContentEditor extends User {
//   constructor(params) {
//     // Виклик конструктора батьківського класу User
//     super(params.email);

//     this.posts = params.posts;
//   }
// }

// const editor = new ContentEditor({
//   email: "mango@mail.com",
//   posts: [],
// });
// console.log(editor); // { #email: "mango@mail.com", posts: [] }
// console.log(editor.email); // "mango@mail.com"

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {
//   static role = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };

//   constructor(params) {
//     super(params.email);
//     this.access = params.access;
//   }
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   access: Admin.role.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.access); // "superuser"

class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}
class Admin extends User {
  static role = {
    BASIC: "basic",
    SUPERUSER: "superuser",
  };

  blacklistedEmails = [];

  blacklist(email) {
    this.blacklistedEmails.push(email);
  }

  isBlacklisted(email) {
    if (this.blacklistedEmails.includes(email)) return true;

    return false;
  }

  constructor(params) {
    super(params.email);
    this.access = params.access;
  }
}

const mango = new Admin({
  email: "mango@mail.com",
  access: Admin.role.SUPERUSER,
});

console.log(mango.email); // "mango@mail.com"
console.log(mango.access); // "superuser"

mango.blacklist("poly@mail.com");
console.log(mango.blacklistedEmails); // ["poly@mail.com"]
console.log(mango.isBlacklisted("mango@mail.com")); // false
console.log(mango.isBlacklisted("poly@mail.com")); // true
