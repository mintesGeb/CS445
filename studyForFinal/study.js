// ----Prototype DP
// const car = {
//   name: "toyota camry",
//   drive() {
//     console.log("im driving");
//   },
//   honk() {
//     //
//   },
// };
// const myCar = Object.create(car);
// myCar.drive();

// ----Module DP
// const counterModule = (function () {
//   let counter = 0;
//   return {
//     increamentCounter: function () {
//       return counter++;
//     },
//     resetCounter: function () {
//       console.log("counter value is currently " + counter);
//       counter = 0;
//     },
//   };
// })();
// counterModule.increamentCounter();
// counterModule.increamentCounter();
// counterModule.increamentCounter();
// counterModule.resetCounter();

// ----Singleton DP

// const Singleton = (function () {
//   let instance;
//   return {
//     getInstance: function () {
//       if (!instance) {
//         instance = new Object("I am the instance");
//       }
//       return instance;
//     },
//   };
// })();

// const instance1 = Singleton.getInstance();
// const instance2 = Singleton.getInstance();
// console.log(instance1 === instance2);

// ----Observer DP

// class Subject {
//   constructor() {
//     this.observer = [];
//   }
//   subscribe(fn) {
//     this.observer.push(fn);
//   }
//   emit(msg) {
//     this.observer.forEach((fn) => {
//       fn.call(null, msg);
//     });
//   }
//   showList() {
//     console.log(this.observer);
//   }
// }

// let subject = new Subject();
// subject.subscribe(console.log);
// function reverse(str) {
//   let arr = [];
//   for (let i = str.length - 1; i >= 0; i--) {
//     arr.push(str[i]);
//   }
//   console.log(arr.join(""));
//   return arr.join("");
// }

// subject.subscribe(reverse);
// subject.emit("hello");
// subject.showList();

// ----Facade DP
// function Mortgage(name) {
//   this.name = name;
// }
// Mortgage.prototype.applyFor = function (amount) {
//   //
//   let result = "approved";
//   return `${this.name} is ${result} for ${amount} mortgage`;
// };

// const mortgage = new Mortgage("mintes");
// let application = mortgage.applyFor(200000);
// console.log(application);

// ----Factory DP
// function Mahler(options) {
//   this.clef = options.clef || "treble";
//   this.signature = options.signature || "4-flat";
//   this.tempo = options.tempo || 75;
// }

// function Bruckner(options) {
//   this.clef = options.clef || "bass";
//   this.tone = options.tone;
// }

// const createMelody = function (options) {
//   switch (options.clef) {
//     case "treble":
//       return new Mahler(options);
//     case "bass":
//       return new Bruckner(options);
//   }
// };

// const melody = createMelody({
//   clef: "treble",
//   signature: "1-flat",
//   tempo: 102,
// });

// ----Decorator DP

// function User(name) {
//   this.name = name;
//   this.log = () => console.log(`U: I am ${name}`);
// }

// const DecoratedUser = function (user, city, state) {
//   this.name = user.name;
//   this.city = city;
//   this.state = state;
//   this.log = () =>
//     console.log(`D: I am ${this.name} from ${this.city} in ${this.state}`);
// };
// let mintes = new User("Mintes");
// mintes.log();
// const decorated = new DecoratedUser(mintes, "Greenbelt", "MD");
// decorated.log();

// ----Strategy DP

// class UPS {
//   calculate(product) {
//     return "$45";
//   }
// }
// class USPS {
//   calculate(product) {
//     return "$39";
//   }
// }
// class Fedex {
//   calculate(product) {
//     return "$43";
//   }
// }

// class Strategy {
//   shippingCompany = "";

//   setStrategy(shippingCompany) {
//     this.shippingCompany = shippingCompany;
//   }
//   calculate(product) {
//     return this.shippingCompany.calculate(product);
//   }
// }

// const product = { from: "234", to: "2344", weight: "1lbs" };

// let ups = new UPS(product);
// let usps = new USPS(product);
// let fedex = new Fedex(product);

// let shipping = new Strategy();

// shipping.setStrategy(usps);
// console.log(shipping.calculate(product));

// ----Memoization

// function fib(num, memo = {}) {
//   if (memo[num]) return memo[num];
//   if (num <= 1) return 1;
//   return (memo[num] = fib(num - 1, memo) + fib(num - 2, memo));
// }
// // console.log(fib(10));

// function memoizer(fn) {
//   let cache = {};
//   return function (n) {
//     if (cache[n]) return cache[n];
//     else {
//       let result = fn(n);
//       cache[n] = result;
//       return result;
//     }
//   };
// }
// const fibMemoFun = memoizer(fib);
// console.log(fibMemoFun(10));

// let url = [
//   { employee: "https://randomuser.me/api/?results=5" },
//   {
//     worldcup:
//       "https://raw.githubusercontent.com/lsv/fifa-worldcup-2018/master/data.json",
//   },
// ];

// fetch(url[0].employee)
//   .then((res) => res.json())
//   .then((data) => console.log(data.results));

// let product1 = {
//   id: 0,
//   name: "Coffee",
//   description: "Coffee Grounds from Ethiopia",
//   price: 9.5,
//   count: 1,
// };
// let product2 = {
//   id: 1,
//   name: "tea",
//   description: "tea from Ethiopia",
//   price: 10,
//   count: 1,
// };

// let shoppingCart = (function () {
//   let instance;

//   function getShoppingCart() {
//     basket = [];
//     return {
//       upsertItem(item) {
//         let found = basket.find((prod) => prod.id === item.id);
//         if (found) {
//           found.count++;
//           basket = basket.filter((prod) => prod.id !== item.id).push(found);
//         } else {
//           basket.push(item);
//         }
//         console.log(basket);
//       },
//       getItemsCount() {},
//       getTotalPrice() {},
//       removeItemById(id) {},
//     };
//   }
//   return {
//     getInstance() {
//       if (!instance) {
//         instance = getShoppingCart();
//         return instance;
//       }
//     },
//   };
// })();

// shoppingCart.upsertItem(product1);
// shoppingCart.upsertItem(product1);

// function Subject() {
//   this.observers = [];
// }
// Subject.prototype.subscribe = function (fn) {
//   this.observers.push(fn);
// };
// Subject.prototype.emit = function (msg) {
//   this.observers.forEach((fn) => {
//     fn.call(null, msg);
//   });
// };

// let subject = new Subject();

// subject.subscribe(console.log);
// subject.emit("hi");

// function Subject() {
//   this.observers = {};
// }
// Subject.prototype.on = function (key, fn) {
//   if (this.observers[key]) {
//     this.observers[key].push(fn);
//   } else {
//     this.observers[key] = [];
//     this.observers[key].push(fn);
//   }
// };
// Subject.prototype.emit = function (key) {
//   this.observers[key].forEach((fn) => {
//     fn.call(null, key);
//   });
// };

// let obs = new Subject();

// obs.on("click1: ", console.log);
// obs.on("click2: ", console.log);
// obs.on("click3: ", console.log);
// obs.on("click1: ", console.log);
// obs.emit("click3: ");

// function RegularBulbs(options) {
//   this.range = options.range;
//   ("50 and 100");
//   this.duration = options.duration || "1 year";
// }
// function EnergySavingBulbs(options) {
//   this.range = options.range || "5 and 40";
//   this.duration = options.duration || "10 year";
//   this.color = "multiple";
// }
// let bulbOption = function (option) {
//   if (option.range === "5 and 40" && option.duration === "10 year") {
//     return new EnergySavingBulbs(options);
//   } else if (option.range === "50 and 100" && option.duration === "1 year") {
//     return new RegularBulbs();
//   }
// };

// let options1 = { range: "50 and 100 lumens", duration: "1 year" };
// let options2 = {
//   range: "5 and 40 lumens",
//   duration: "10 year",
//   colorOpt: ["blue", "red", "orange"],
// };
// console.log(bulbOption(options1));
// console.log(bulbOption(options2));

// let obj = {
//   name = "mintes",
//   age: 28
// }

// function Decorator (obj, city, state){
//   this.name = obj.name;
//   this.age = obj.age;
//   this.city=city;
//   this.state=state;

// }
// let mintes =new Decorator(obj, "Greenbelt", "MD")

// class info {
//   console(msg) {
//     console.info("info: " + msg);
//   }
// }
// class warn {
//   console(msg) {
//     console.warn("warn: " + msg);
//   }
// }
// class error {
//   console(msg) {
//     console.error("error: " + msg);
//   }
// }

// class Strategy {
//   consoleStr = "";

//   setStrategy(console) {
//     this.consoleStr = console;
//   }
//   consoleMsg(msg) {
//     this.consoleStr.console(msg);
//   }
// }

// let info1 = new info();
// let warn1 = new warn();
// let error1 = new error();

// let myStr = new Strategy();
// myStr.setStrategy(error1);
// myStr.setStrategy(warn1);
// myStr.setStrategy(info1);
// myStr.consoleMsg("hallelujah");

// const counterModule = (function () {
//   let instance = null;

//   function getCounter() {
//     let counter = 0;
//     return {
//       increament() {
//         return counter++;
//       },
//       resetCounter() {
//         console.log("current: " + counter);
//         counter = 0;
//       },
//     };
//   }

//   return {
//     getInstance() {
//       if (!instance) {
//         instance = getCounter();
//         return instance;
//       }
//     },
//   };
// })();

// counterModule.increament();
// counterModule.increament();
// counterModule.resetCounter();
// let x = counterModule.getInstance();
// console.log(x);
// x.increament();
// x.increament();
// x.resetCounter();
// counterModule.getInstance.increament();
// counterModule.getInstance.resetCounter();

// let shoppingCart = (function () {
//   let instance = null;

//   function getShoppingCart() {
//     basket = [];

//     return {
//       upstertItem(prod) {},
//       getItemsCount() {},
//     };
//   }
//   return {
//     getInstance() {
//       if (!instance) {
//         instance = getShoppingCart();
//       }
//         return instance;
//     },
//   };
// })();

// function Subject() {
//   this.observers = [];
// }
// Subject.prototype.subscribe = function (fn) {
//   this.observers.push(fn);
// };
// Subject.prototype.emit = function (msg) {
//   this.observers.forEach((fn) => {
//     fn.call(null, msg);
//   });
// };

// let subject = new Subject();
// subject.subscribe(console.log);
// subject.emit("hello");

// function Subject() {
//   this.observers = {};
// }
// Subject.prototype.on = function (event, fn) {
//   let obj = this.observers;
//   if (obj[event]) obj[event].push(fn);
//   else obj[event] = [fn];
// };
// Subject.prototype.emit = function (event) {
//   let obj = this.observers;
//   if (obj[event]) {
//     obj[event].forEach(function (fn) {
//       fn.call(null, event);
//     });
//   }
// };

// const subject = new Subject();

// subject.on("print1", (b) => {
//   console.log("print1: " + b);
// });
// subject.on("print1", (b) => {
//   console.log("print1 (2): " + b);
// });
// subject.on("print2", (b) => {
//   console.log("print2: " + b);
// });
// subject.on("print3", (a) => {
//   console.log("print3: " + a);
// });
// subject.emit("print3");

// function memoizer(fn) {
//   let cache = {};
//   return function (n) {
//     if (cache[n]) return cache[n];
//     else {
//       return (cache[n] = fn(n));
//     }
//   };
// }

// function fib(n) {
//   if (n <= 1) return 1;
//   return fib(n - 1) + fib(n - 2);
// }
// console.log(fib(10));
// console.log(memoizer(fib)(10));
