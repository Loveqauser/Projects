"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var name = 'Lovekesh';
console.log(name);
console.log("Changed name is: ".concat(name));
var num1 = 10;
console.log(num1);
var str = 'TypeScript';
console.log(str);
var learningTypeScript = true;
console.log(learningTypeScript);
var undef;
console.log(undef);
var undef1;
console.log(undef1);
var nulltest = null;
console.log(nulltest);
// Arrays declaration
var numarray = [1, 11, 111];
console.log(numarray[2]);
var numarray2 = [2, 22, 222];
console.log(numarray2[2]);
//tuple declaration
var tuplenum;
tuplenum = [20, "hello"];
console.log(tuplenum[0]);
console.log(tuplenum[1]);
console.log(tuplenum[1].substring(1, 4));
//enum
var color;
(function (color) {
    color[color["Red"] = 0] = "Red";
    color[color["Green"] = 96] = "Green";
    color[color["Blue"] = 97] = "Blue";
    color["anothercolor"] = "Grey";
})(color || (color = {}));
;
var colorname = color.Green;
console.log(colorname); //Output is: 96
colorname = color.Red;
console.log(colorname); //Output is: 0
colorname = color.anothercolor;
console.log(colorname); //Output is: Grey
var cname;
cname = color[0];
console.log(cname);
//unknown type
var notsure;
console.log(notsure); //Output is Undefined
notsure = 5;
console.log(notsure); // Output is : 5
notsure = 'This is a different data type value';
console.log(notsure); // Output is : This is a different data type value
//Any type
var anynum;
anynum = 20;
console.log(anynum); // Output is : 20
anynum = 'This is another type String';
console.log(anynum.toUpperCase()); // Output is : THIS IS ANOTHER TYPE STRING
//Functions
function sum(num1, num2) {
    return num1 + num2;
}
var total = sum(7, 11);
console.log('Total is: ' + total);
