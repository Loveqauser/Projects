export{}
let name = 'Lovekesh'
console.log(name);
console.log(`Changed name is: ${name}`);

let num1:number = 10;
console.log(num1);
let str: string = 'TypeScript' ;
console.log(str);
let learningTypeScript: boolean = true 
console.log(learningTypeScript);
let undef:undefined;
console.log(undef);
let undef1;
console.log(undef1);
let nulltest:null = null;
console.log(nulltest);

// Arrays declaration

let numarray: number[] = [1,11,111];
console.log(numarray[2]);

let numarray2:Array<number> = [2,22,222];
console.log(numarray2[2]);

//tuple declaration
let tuplenum:[number,string];
tuplenum=[20,"hello"];
console.log(tuplenum[0]);
console.log(tuplenum[1]);
console.log(tuplenum[1].substring(1,4));

//enum

enum color {Red,Green=96,Blue,anothercolor="Grey"};
let colorname:color = color.Green;
console.log(colorname); //Output is: 96

colorname = color.Red;
console.log(colorname);//Output is: 0

colorname = color.anothercolor;
console.log(colorname);//Output is: Grey

let cname:string;
cname = color[0];
console.log(cname);

//unknown type
let notsure:unknown;
console.log(notsure); //Output is Undefined

notsure = 5;
console.log(notsure);// Output is : 5

notsure = 'This is a different data type value';
console.log(notsure); // Output is : This is a different data type value

//Any type
let anynum:any;

anynum=20;
console.log(anynum);// Output is : 20

anynum='This is another type String';
console.log(anynum.toUpperCase());// Output is : THIS IS ANOTHER TYPE STRING

//Functions

function sum(num1:number,num2:number):number{

    return num1+num2;
}

let total:number = sum(7,11);
console.log('Total is: ' + total);

