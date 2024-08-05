//Built-in/primitive datatype
// number data type can store integer, float, decimal,binary etc 
let num1:number=23;
let num2:number=212.09;
let num3:number =0x308CF;
// binary
let num4:number =0b111011;

let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

console.log(" decimal no is " + "hex no is " + hex + "binary no is" + binary + "octal  no is " + octal);


// string
// Same as in C# only accept string value. It allows text concatenation

let word:string = "Hello";
let anotherWord:string ="world";

let fullWord = word + anotherWord;
console.log(`Full sentence you enter is ${fullWord}`);

//Void
//void is a little like the opposite of any: the absence of having any type at all.
// You may commonly see this as the return type of functions that do not return a value:

// Null/Undefined
// null -> mean undefined. Meaning to value is assigned to the variable
//both undefined and null actually have their types named undefined and null respectively. Much like void, they’re not extremely useful on their own:

// Not much else we can assign to these variables!
let u: undefined = undefined;
let n: null = null;
let newNo:undefined = undefined;

// Any type: It accepts any value type e.g. bool, string, number etc
let anyType:any="Number";
anyType=12;
anyType = true;
