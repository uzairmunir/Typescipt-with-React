// Basic Types
let id: number = 5;
let fName: string = 'Uzair';
let age: number = 21;
let student: boolean = true;
let company: any = '....';

//Array
let marks: number[] = [25, 50, 75, 100];
let arr: any[] = ['Hello', 12, true, {}];

//Tuple
let person: [string, number, boolean] = ['Uzair', 21, true];
// Tuple Array
let employees: [number, string][] = [
  [1, 'Uzair'],
  [2, 'Munir'],
];

//Union
let p_id: number | string = 22; // or "22 also valid"

//Enums
enum Direction {
  left,
  right,
  up,
  down,
}
console.log(Direction);

//Objects
type User = {
  id: number;
  name: string;
  isMale: boolean;
};

const user: User = {
  id: 1,
  name: 'Uzair',
  isMale: true,
};

const userArray: User[] = [
  {
    id: 1,
    name: 'Uzair',
    isMale: true,
  },
  {
    id: 1,
    name: 'Uzair',
    isMale: true,
  },
];

//Type Assertion
let _id: any = 1;
let customerId = <string>_id; //or _id as number

// Functions
function addNumber(x: number, y: number): number {
  return x + y;
}
console.log(addNumber(1, 5));

//Void
function log(message: string | number): void {
  console.log(message);
}
console.log(log('Hello'));

//Interfaces

interface UserInterface {
  readonly id: number; // now we cant change id,
  name: string;
  age?: number; // question marks means optional
}
const User1: UserInterface = {
  id: 1,
  name: 'Uzair',
};
// The main difference b/t types and interfaces is me cant use union type in interfaces

//Interface with Functions
//1:
interface MathFunc {
  (x: number, y: number): number;
}
const add: MathFunc = (x: number, y: number): number => {
  return x + y;
};
// 2:
interface NameFunc {
  (fName: string, lName: string): string;
}
const printName: NameFunc = (fName: string, lName: string): string => {
  return `My  Name is ${fName} ${lName}`;
};
console.log(printName('Uzair', 'Munir'));

// Classes
class Person {
  id: number;
  name: string;
  age?: number;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
    this.age = age;
  }
  register() {
    return `${this.name} is now registered`;
  }
}
const uzair = new Person(1, 'Uzair');
const newPer = new Person(1, 'New ');

// Classes With Interface
interface PersonInterface {
  id: number;
  name: string;
  register(): string;
}
class NewPerson implements PersonInterface {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
  register() {
    return `${this.name} is now registered`;
  }
}
const newP = new Person(1, 'New ');

//SubClasses
class Employee extends Person {
  position: string;
  constructor(id: number, name: string, position: string) {
    super(id, name);
    this.position = position;
  }
}
const employee = new Employee(1, 'Uzair', 'Developer');

//Generics
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}
let numArray = getArray([1, 2, 2, 3]);
let strArray = getArray(['a', 'b', 'c']);

// function getArray(items:any[]):any[]{
//     return new Array().concat(items)
// }
// let numArray=getArray([1,2,2,3])
// let strArray=getArray(["a","b","c",])

// numArray.push("a")
