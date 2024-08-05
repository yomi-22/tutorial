function fullName(firstName:string, lastName:string)
{
    let name = firstName + lastName;
    return console.log("My full name is " , name);
}

fullName("Yomi","ladokun");

//var variable can be redefined and update whereas let, const cannot be redefined or update
var jsVariable = 10;
console.log(jsVariable);
var jsVariable = 10;

console.log(jsVariable);

// both result will be printed
