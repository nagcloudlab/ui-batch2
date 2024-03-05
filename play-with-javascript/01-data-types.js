"use strict";

// data types

// 1. undefined
var a;

// 2. number
var b = 10;
var c = 10.5;

// 3. string
var d = 'Hello';
var e = "Hello";
var f = `Hello`;
var dynamicString = `Hello ${d} ${1 + 1}`;
var multiLineString = `Hello
World`;
var htmlTemplate = `
    <div>
        <h1>Hello</h1>
    </div>
`;

// 4. boolean
var g = true;
var h = false;

// imp-note:
// falsy values : undefined, null, 0, '', NaN, false
// truthy values : except falsy values
// https://dorey.github.io/JavaScript-Equality-Table/

// 5. null
var i = null;

// --------------------------------------------
// reference data types (objects)
// --------------------------------------------

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }
// Person.prototype.sayName = function () {
//     console.log(`My name is ${this.name}`);
// }
// Person.prototype.sayAge = function () {
//     console.log(`My age is ${this.age}`);
// }

// var person1 = new Person('John', 30);
// var person2 = new Person('Smith', 35);

// person1.sayName();
// person1.sayAge();

// --------------------------------------------
// EcmaScript 2015 (ES6) - class
// --------------------------------------------

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayName() {
        console.log(`My name is ${this.name}`);
    }
    sayAge() {
        console.log(`My age is ${this.age}`);
    }
}

var person1 = new Person('John', 30);
var person2 = new Person('Smith', 35);

// person1.sayName();
// person1.sayAge();

// --------------------------------------------

// imp-note:
// by default, all objects are  extensible, configurable, and writable

// Object.preventExtensions(person1); // not allow to add new properties
// person1.skills = "javascript"

// Object.seal(person1); // not allow to add new properties, not allow to delete existing properties
// person1.skills = "javascript"
// delete person1.name;

// Object.freeze(person1); // not allow to add new properties, not allow to delete existing properties, not allow to modify existing properties
// person1.skills = "javascript"
// delete person1.name;
// person1.age = 40;

// --------------------------------------------


// 6. object

var config = new Object();
config.url = 'http://localhost';
config.method = 'GET';
config.timeout = 3000;

// or literal way

var config = {
    url: 'http://localhost',
    method: 'GET',
    timeout: 3000
}

// 7. array

var colors = new Array();
colors[0] = 'red';
colors[1] = 'green';
colors[2] = 'blue';

// or literal way

var colors = ['red', 'green', 'blue'];

// 8. function

var add = new Function('a', 'b', 'return a + b');

// or literal way

function add(a, b) {
    return a + b;
}

// 9. regular expression

var reg = new RegExp('\\d+');

// or literal way

var reg = /\d+/;

// --------------------------------------------


// imp-note:

// 1. all data types are mutable except primitive data types (number, string, boolean, undefined, null)
// 2. all data types are pass by value except object data type (pass by reference)

// --------------------------------------------
//imp-note : behind the scene, every data is  an object
// --------------------------------------------

// var a = 10;
// var b = new Number(10);



