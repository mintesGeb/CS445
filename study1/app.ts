// function add(a: number, b: number): number {
//   return a + b;
// }

// const sum1: number = add(10, 15);

// function hello(id: number, name: string): void {
//   console.log(`id=${id}, name= ${name}`);
// }

// let employee: {
//   id: number | string;
//   name: string;
// };

// employee = {
//   id: "321d",
//   name: "Asdf",
// };

// let ana: string[] = ["orange", "banana"];
// let mn: number[] = [1, 2, 3, 2, 1, 5];

// let fruits: Array<string> = ["ora", "dfs"];

// let multi: (string | number)[] = ["asdf", 654];
// let multi2: Array<string | boolean> = ["asdf", true];

// let user: [string, boolean, number];
// user = ["sdf", true, 5];
// let family: [string, number][] = [
//   ["sadf", 098],
//   ["asdf", 5412],
// ];

// enum Tech {
//   Angular,
//   React,
//   ReactNative,
// }

// let something: any = "Asaad";
// something = 569;
// something = true;
// let data: any[] = [true, "true", 1];

// let text = 321;
// // text = "123";

// let code: any = 321;
// let couseCode = <number>code;

// interface emp {
//   type: number;
// }

// let employee1 = <emp>{ type: 4 };

// employee1.type = 5;

// type Emplo = {
//   name: String;
// };
// let employee2: Emplo = {
//   name: "sadf",
// };
// let emplyee3 = <Emplo>{
//   name: "ksdf",
// };

// let code1: any = 234;
// let courseCode = <number>code1;
// let courseCode2 = code as string;

// function Greet(greeting: string, n?: string = "my dear"): string {
//   return `${greeting} and ${n}`;
// }

// interface IEmployee {
//   empCode: number;
//   empName: string;
//   getSalary: (s: number) => number;
//   getManagerName: (x: string) => string;
// }

// interface ICity {
//   name: string;
// }
// interface IAddress extends ICity {
//   zipcode: number;
// }

// let address: IAddress = {
//   name: "greenbelt",
//   zipcode: 20770,
// };

// interface ICourse {
//   code: number;
//   name: string;
//   getGrade: (grade: number) => number;
// }
// class Course implements ICourse {
//   code: number;
//   name: string;
//   constructor(code: number, name: string) {
//     this.code = code;
//     this.name = name;
//   }
//   getGrade(grade: number): number {
//     return grade;
//   }
// }
// class CourseNew {
//   name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
// }
// class MSD extends CourseNew {
//   code: number;
//   constructor(code: number, name: string) {
//     super(name);
//     this.code = code;
//   }
//   displayName(): void {
//     console.log(this.code);
//   }
// }

// ------------------------

// interface ICourse {
//   name: string;
//   display(): void;
// }
// interface ICode {
//   code: number;
// }
// class MSD implements ICourse, ICode {
//   name: string;
//   code: number;
//   constructor(name: string, code: number) {
//     this.name = name;
//     this.code = code;
//   }
//   display(): void {
//     console.log("hi");
//   }
// }
// let wad: MSD = new MSD("OOP", 445);

// abstract class Course {
//   faculty: string;
//   abstract name: string;
//   constructor(faculty: string) {
//     this.faculty = faculty;
//   }
//   abstract checkPre(x: string): boolean;
// }

// class MAP extends Course {
//   name: string;
//   code: number;
//   constructor(name: string, code: number, faculty: string) {
//     super(faculty);
//     this.name = name;
//     this.code = code;
//   }
//   checkPre(x: string): boolean {
//     return true;
//   }
// }
// interface IBook {
//   bookName: string;
//   isnb: number;
// }

// class Course1 {
//   constructor(public name: string, public code: number) {}

//   useBook(book: IBook): void {
//     console.log(`Course ${this.name} is using the text book:
//         ${book.bookName} who's ISBN=${book.isnb}`);
//   }
// }

interface IUni {
  name: string;
  dept: string;
  graduation(year: number): void;
}
class University implements IUni {
  constructor(public name: string, public dept: string) {}
  graduation(year: number): void {
    console.log(`${this.dept} ${year}`);
  }
}
let miu = new University("MIU", "CS");
miu.graduation(2019);

interface IBankAccount {
  money: number;
  deposit(value: number): void;
}
interface IPerson {
  name: string;
  bankaccount: IBankAccount;
  hobbies: string[];
}

// class BankAccount{

// }

// class Person implements IPerson {
//   name: string;
//   bankaccount: IBankAccount;
//   hobbies: string[];
//   constructor(name: string, bankaccount: IBankAccount, hobbies: string[]) {
//     this.name = name;
//     this.bankaccount = bankaccount;
//     this.hobbies = hobbies;
//   }
// }
// let asaadBankAccount = {
//   money: 2000,
//   deposit(value: number): void {
//     this.money += value;
//   },
// };

// let myself = new Person("Assad", asaadBankAccount, ["cooking", "violin"]);

// myself.bankaccount.deposit(3000);
// console.log(myself);

// interface ICar {
//   name: string;
//   acceleration: number;
//   honk(): void;
//   accelerate(speed: number): void;
// }

// class Car {
//   name: string;
//   acceleration: number;
//   constructor(name: string, acceleration?: number) {
//     this.name = name;
//     this.acceleration = 0;
//   }
//   honk(): void {
//     console.log(`${this.name} is saying : tooot!`);
//   }
//   accelerate(speed: number): void {
//     this.acceleration += speed;
//   }
// }

// let car1 = new Car("BMW");
// car1.honk();
// car1.accelerate(60);
// console.log(car1.acceleration);

interface IObj {
  width: number;
  length: number;
  calcArea(): number;
}

let rec = <IObj>{
  width: 5,
  length: 2,
};
rec.calcArea = function () {
  return this.width * this.length;
};

console.log(rec.calcArea());
