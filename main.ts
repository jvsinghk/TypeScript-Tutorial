export {}
let message = 'Welcome Back';
console.log(message);

// Variable Declaration
let x = 10;
const y = 20;

let sum;
const title = 'Code With TypeScript';


// Basic Variable Types
let isBegineer: boolean  = true;
let total: number = 0;
let name: string = 'Jasvinder';

let sentence: string = `My name is ${name}
I am a beginner in Typescript`;

console.log(sentence);


// Sub types
let n: null = null;
let u: undefined =  undefined;

let isNew: number = null;
let myName: string = undefined;


// Array type
const list1: number[] = [1,2,3];
const list2: Array<number> = [1,2,3];


// Tuple type
const person1: [string, number] = ['Chris', 22];


// Enum type
enum Color {Red = 5, Green, Blue};
let g: Color = Color.Green;
console.log(g);


// Any type
let randomValue: any = 10;
randomValue = true;
randomValue = 'Jasvinder';


// Unknown type
let myVariable: unknown = 'j';

function hasName(obj: any) : obj is { name: string } {
    return !!obj &&
    typeof obj === 'object' &&
    'name' in obj
}

if (hasName(myVariable)) {
    console.log(myVariable.name);
}
(myVariable as string).toUpperCase();  //assertion

// Type Inference
let a;
a = 10;
a = true;

let b = 20;

// Union Types
let multiType: number | boolean;
 multiType = 20;
 multiType = true;

let anyType: any;
anyType = 20;
anyType = true;

// 2 Reasons
// The Unions Type restrict to the specified types
// Whereas the any type has no restrictions
// Intellisense Support

// * Functions

function add(num1: number, num2: number = 10): number {
    if(num2)
        return num1 + num2;
    else
        return num2;
}

add(5, 10);
add(5);

// * Optional Parameters
//Add ? to the parameters right
// We can have any num optional parameters condition optional parameters should always be after the required parameters


// * Default Parameters : The default parameters are the optional parameters with a set value instead of undefined


// * Interface

interface Person {
    firstName: string,
    lastName?: string
}

// function fullName(person: {firstName: string, lastName: string}) {
function fullName(person: Person) {
    console.log(`${person.firstName} ${person.lastName}`);
}

let p = {
    firstName: 'Bruce',
    lastName: 'Wayne'
}

fullName(p);


// * Very Straight Forward use case for optional properties is forms for eg. The registration form  there can be a specific type of data that the registration form is supposed to gather for which you can use interface but not all form fields are  mandatory optional properties can be used in such situations



// Classes


class Employee {
    public employeeName: string;

    constructor(name: string) {
        this.employeeName = name
    }

    greet() {
        console.log(`Good Morning ${this.employeeName}`);
        
    }
}


let emp1 = new Employee('Jasvinder');
console.log(emp1.employeeName);
emp1.greet();


class Manager extends Employee {
    constructor(managerName: string) {
        super(managerName)

    }
    delegateWork() {
        console.log(`Manager delegating tasks ${this.employeeName}`);
    }
}

let m1 = new Manager('Bruce');
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);


// Access Modifiers  
    /* public - for free accessibility
    private - for accessibility within the class
    protected - for accessibility within  the class and the classes derived form it  */

