//Named function
// Parameterless function
function Details() {
    console.log("My name is Yomi");
}

//calling function
Details();

// Parameter function
function Details1(name: string, lname: string): string {
    return name + " " + lname;
}

// calling Parameter function

Details1("Yele", "Sanusi");


//Anonymous function -> function without a name, the function is stored in a variable
// and the varaible name is called when invoking the function
//Anonymous function 

var getDetails = function () {
    console.log("Welcome back");
}

// calling anonymous function
getDetails();
// Parameter

var getDetails2 = function (name: string, age: number) {
    return console.log(` my name is ${name} and I am ${age} years old`);
}

// calling function 
getDetails2("Dele", 23);
console.log(getDetails2("Dune", 32))
// 2 types of  parameters are : optional and default parameters]
/* Default parameter-> This is when a default value is assigned to a parameter
in the function. If no parameter is not assigned to a variable. Default value will be used. 
However, if value is passed, then passed value will be used instead of default value
* Optional parameter-> Makes the parameter optional and no error message is thrown when the
if the optional paramater is not passed
**/

// Default parameter

function MobilePhone(brand: string, model: string = "S20"): string {
    return brand + model
}

MobilePhone("Samsung"); // Samsung + S20 default value  will be returned
MobilePhone("Samsung", "Z3");

// Optional parameters-> ? make the parameter optional and it is not mandatory 
function MobilePhone2(brand: string, model?: string): string {
    return brand + model
}

MobilePhone2("Iphone", "12");
MobilePhone2("Motorola"); // optional brand 

// Fat arrow function
// IMPORTANT-> when funtion body only contains one statement, dont use curly bracket and return type
// function keywork is not required when using arrow function =>
var printMessage = (x: number, y: string) => x + " " + y;
// Another approach but the first part is better
var printMessage2 = (x: number, y: string) => {
    x + " " + y;
}
// parameterless arrow functiomn
var printMessage3 = () => console.log("I am new to typescript")
// calling arrow/anonymous function

console.log(printMessage(19, "Steve"));

// Function overloading-> Multiple function names with the same function name
// but has the same number of parameter 
// different datatype and different return type

function overloadFunction(age: number, size: number): number;
function overloadFunction(name: string, address: string): string;

function overloadFunction(a: any, b: any): any {
    return a + b;
}

overloadFunction(12, 20);
overloadFunction("Welcome", "to coding class");

// Rest parameters-> Used when you don't know how many parameters you will need. 
// use 3 dot before parameter name with array symbol [] and make it array similar to array parameter in c#. 

function restParameterExample(name: string, ...address: string[]) {
    return name + " " + address;
}

restParameterExample("Sola", "Gbenga");
restParameterExample("Sola", "Seyi", "Alao", "Azzez");
restParameterExample("Tom");