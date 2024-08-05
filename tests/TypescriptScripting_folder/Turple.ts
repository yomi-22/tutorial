// declare turple variable with value
var myTuple:[number,string, boolean] =[101,"George", true];
//print tuple
console.log(myTuple);
// print single value out of tuple
console.log(myTuple[0]); // print 101
console.log(myTuple[0]); // print George
console.log(myTuple[0]); // print true

//Add item to existing tuple
myTuple.push(102," ",false);
myTuple.pop();
//myTuple.concat(103).concat("").concat()

// update existing element in the tuple
myTuple[1]="Scot";

// Add multiple items to one tuple using array
var myTupleArray:[string, number, Date] [] = [["Akin", 100, new Date(1999,5,22)],["Akinola", 200, new Date(1998,5,22)],
["Ola", 300, new Date(1979,5,22)],["Dan", 400, new Date(1996,5,22)]]

console.log(myTupleArray); // print everything like this ["Akin", 100, new Date(1999,5,22)],["Akinola", 200, new Date(1998,5,22)],
//["Ola", 300, new Date(1979,5,22)],["Dan", 400, new Date(1996,5,22)]
console.log(myTupleArray[0]); // ["Akin", 100, new Date(1999,5,22)]
