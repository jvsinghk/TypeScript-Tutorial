"use strict";
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
exports.__esModule = true;
var message = 'Welcome Back';
console.log(message);
// Variable Declaration
var x = 10;
var y = 20;
var sum;
var title = 'Code With TypeScript';
// Basic Variable Types
var isBegineer = true;
var total = 0;
var name = 'Jasvinder';
var sentence = "My name is " + name + "\nI am a beginner in Typescript";
console.log(sentence);
// Sub types
var n = null;
var u = undefined;
var isNew = null;
var myName = undefined;
// Array type
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
// Tuple type
var person1 = ['Chris', 22];
// Enum type
var Color;
(function (Color) {
    Color[Color["Red"] = 5] = "Red";
    Color[Color["Green"] = 6] = "Green";
    Color[Color["Blue"] = 7] = "Blue";
})(Color || (Color = {}));
;
var g = Color.Green;
console.log(g);
// Any type
var randomValue = 10;
randomValue = true;
randomValue = 'Jasvinder';
// Unknown type
var myVariable = 'j';
function hasName(obj) {
    return !!obj &&
        typeof obj === 'object' &&
        'name' in obj;
}
if (hasName(myVariable)) {
    console.log(myVariable.name);
}
myVariable.toUpperCase(); //assertion
// Type Inference
var a;
a = 10;
a = true;
var b = 20;
// Union Types
var multiType;
multiType = 20;
multiType = true;
var anyType;
anyType = 20;
anyType = true;
// 2 Reasons
// The Unions Type restrict to the specified types
// Whereas the any type has no restrictions
// Intellisense Support
// * Functions
function add(num1, num2) {
    if (num2 === void 0) { num2 = 10; }
    if (num2)
        return num1 + num2;
    else
        return num2;
}
add(5, 10);
add(5);
// function fullName(person: {firstName: string, lastName: string}) {
function fullName(person) {
    console.log(person.firstName + " " + person.lastName);
}
var p = {
    firstName: 'Bruce',
    lastName: 'Wayne'
};
fullName(p);
// * Very Straight Forward use case for optional properties is forms for eg. The registration form  there can be a specific type of data that the registration form is supposed to gather for which you can use interface but not all form fields are  mandatory optional properties can be used in such situations
// Classes
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Good Morning " + this.employeeName);
    };
    return Employee;
}());
var emp1 = new Employee('Jasvinder');
console.log(emp1.employeeName);
emp1.greet();
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log("Manager delegating tasks " + this.employeeName);
    };
    return Manager;
}(Employee));
var m1 = new Manager('Bruce');
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);
// Access Modifiers  
/* public - for free accessibility
private - for accessibility within the class
protected - for accessibility within  the class and the classes derived form it  */
