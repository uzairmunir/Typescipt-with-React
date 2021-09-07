var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Basic Types
var id = 5;
var fName = 'Uzair';
var age = 21;
var student = true;
var company = '....';
//Array
var marks = [25, 50, 75, 100];
var arr = ['Hello', 12, true, {}];
//Tuple
var person = ['Uzair', 21, true];
// Tuple Array
var employees = [
    [1, 'Uzair'],
    [2, 'Munir'],
];
//Union
var p_id = 22; // or "22 also valid"
//Enums
var Direction;
(function (Direction) {
    Direction[Direction["left"] = 0] = "left";
    Direction[Direction["right"] = 1] = "right";
    Direction[Direction["up"] = 2] = "up";
    Direction[Direction["down"] = 3] = "down";
})(Direction || (Direction = {}));
console.log(Direction);
var user = {
    id: 1,
    name: 'Uzair',
    isMale: true
};
var userArray = [
    {
        id: 1,
        name: 'Uzair',
        isMale: true
    },
    {
        id: 1,
        name: 'Uzair',
        isMale: true
    },
];
//Type Assertion
var _id = 1;
var customerId = _id; //or _id as number
// Functions
function addNumber(x, y) {
    return x + y;
}
console.log(addNumber(1, 5));
//Void
function log(message) {
    console.log(message);
}
console.log(log('Hello'));
var User1 = {
    id: 1,
    name: 'Uzair'
};
var add = function (x, y) {
    return x + y;
};
var printName = function (fName, lName) {
    return "My  Name is " + fName + " " + lName;
};
console.log(printName('Uzair', 'Munir'));
// Classes
var Person = /** @class */ (function () {
    function Person(id, name) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    Person.prototype.register = function () {
        return this.name + " is now registered";
    };
    return Person;
}());
var uzair = new Person(1, 'Uzair');
var newPer = new Person(1, 'New ');
var NewPerson = /** @class */ (function () {
    function NewPerson(id, name) {
        this.id = id;
        this.name = name;
    }
    NewPerson.prototype.register = function () {
        return this.name + " is now registered";
    };
    return NewPerson;
}());
var newP = new Person(1, 'New ');
//SubClasses
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(id, name, position) {
        var _this = _super.call(this, id, name) || this;
        _this.position = position;
        return _this;
    }
    return Employee;
}(Person));
var employee = new Employee(1, 'Uzair', 'Developer');
//Generics
function getArray(items) {
    return new Array().concat(items);
}
var numArray = getArray([1, 2, 2, 3]);
var strArray = getArray(['a', 'b', 'c']);
// function getArray(items:any[]):any[]{
//     return new Array().concat(items)
// }
// let numArray=getArray([1,2,2,3])
// let strArray=getArray(["a","b","c",])
// numArray.push("a")
