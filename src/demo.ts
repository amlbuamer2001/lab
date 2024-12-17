// let arr: (number | string)[] = [1, 'mona', 4, 'ali'];

//////////////////////////////////////////////////////////////

// function arrValues(arr: (number | string)[]): number | string | number[] {
//     const numbers = arr.filter(item => typeof item === "number");
//     const strings = arr.filter(item => typeof item === "string");

//     if (numbers.length == arr.length) {
//         return numbers.reduce((sum, num) => sum + num, 0);
//     } 

//     if (strings.length === arr.length) {
//         return strings.join(""); 
//     }

//     return numbers.sort((a, b) => a - b); 
// }

// console.log(arrValues([1, 2, 3]));          
// console.log(arrValues(["a", "b", "c"]));  
// console.log(arrValues([1, "a", 3, "b", 2]));

//////////////////////////////////////////////////////////////////

// abstract class Shape {
//     constructor() {}
//     abstract area(): number;
// }

// class Rectangle extends Shape {
//     private width: number;
//     private height: number;

//     constructor(width: number, height: number) {
//         super();
//         this.width = width;
//         this.height = height;
//     }

//     area(): number {
//         return this.width * this.height;
//     }
// }

// class Circle extends Shape {
//     private radius: number;

//     constructor(radius: number) {
//         super();
//         this.radius = radius;
//     }

//     area(): number {
//         return Math.PI * this.radius * this.radius;
//     }
// }

// const rectangle = new Rectangle(10, 5);
// console.log("Rectangle Area:", rectangle.area());

// const circle = new Circle(7);
// console.log("Circle Area:", circle.area());

//////////////////////////////////////////////////////////////////

// interface IEmployee {
//     id: number;
//     fname: string;
//     lname: string;
//     age: number;
//     salary: number;
//     address: {
//         city: string;
//         street: string;
//         zCode: string;
//     };
//     getSalary(): number;
// }

// class Employee implements IEmployee {
//     id: number;
//     fname: string;
//     lname: string;
//     age: number;
//     salary: number;
//     address: { city: string; street: string; zCode: string };

//     constructor(
//         id: number,
//         fname: string,
//         lname: string,
//         age: number,
//         salary: number,
//         address: { city: string; street: string; zCode: string }
//     ) {
//         this.id = id;
//         this.fname = fname;
//         this.lname = lname;
//         this.age = age;
//         this.salary = salary;
//         this.address = address;
//     }

//     getSalary(): number {
//         return this.salary;
//     }
// }

// class Manager extends Employee {
//     constructor(
//         id: number,
//         fname: string,
//         lname: string,
//         age: number,
//         salary: number,
//         address: { city: string; street: string; zCode: string }
//     ) {
//         super(id, fname, lname, age, salary, address);
//     }

//     showEmployeeData(empId: number): void {
//         if (this.id == empId) {
//             console.log(`Employee ID: ${this.id}`);
//             console.log(`Name: ${this.fname} ${this.lname}`);
//             console.log(`Age: ${this.age}`);
//             console.log(`Salary: ${this.salary}`);
//             console.log(
//                 `Address: ${this.address.street}, ${this.address.city}, ${this.address.zCode}`
//             );
//         } else {
//             console.log("Employee ID not found.");
//         }
//     }
// }

// const emp = new Employee(1, "aml", "ahmed", 23, 5000, {
//     city: "tala",
//     street: "bahr street",
//     zCode: "10001",
// });

// console.log("Employee Salary:", emp.getSalary());

// const manager = new Manager(1, "aml", "ahmed", 24, 5000, {
//     city: "tala",
//     street: "bahr street",
//     zCode: "10001",
// });

// console.log("Employee Data:");
// manager.showEmployeeData(1);

////////////////////////////////////////////////////////

enum WeekDays {
    Sunday = "Sunday",
    Monday = "Monday",
    Tuesday = "Tuesday",
    Wednesday = "Wednesday",
    Thursday = "Thursday",
    Friday = "Friday",
    Saturday = "Saturday"
}

function isWeekend(day: WeekDays): boolean {
    return day == WeekDays.Friday || day == WeekDays.Saturday;
}

console.log(`Is Saturday a weekend? ${isWeekend(WeekDays.Saturday)}`);
console.log(`Is Sunday a weekend? ${isWeekend(WeekDays.Sunday)}`);
console.log(`Is Monday a weekend? ${isWeekend(WeekDays.Monday)}`);
console.log(`Is Tuesday a weekend? ${isWeekend(WeekDays.Monday)}`);
console.log(`Is Wednesday a weekend? ${isWeekend(WeekDays.Wednesday)}`);
console.log(`Is Thursday a weekend? ${isWeekend(WeekDays.Wednesday)}`);
console.log(`Is Friday a weekend? ${isWeekend(WeekDays.Wednesday)}`);
