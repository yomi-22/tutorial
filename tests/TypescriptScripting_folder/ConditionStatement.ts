import { copyFileSync } from "fs";

let myNo: number = 10;
let mySt: string = "car"

//ternary
myNo % 5 == 0 && mySt == "CAR".toLowerCase() ? console.log('Even number and you have a car') : console.log('Odd number');

// if else statement
if (myNo % 5 == 0 && mySt == "CAR".toLowerCase()) {
    console.log('Even number and you have a car')
}
else if (myNo % 2 == 0 && mySt == "Lorry".toLocaleLowerCase()) {
    console.log('Even number and you have a lorry')
}
else {
    console.log('Odd number')
}
// switch
switch (mySt) {
    case 'car':
        console.log('You drive a car');
        break;
    case 'lorry':
        console.log('You drive a lorry');
        break;
    case 'bus':
        console.log('You drive a bus');
        break;
    default:
        console.log("You don't drive");
}

// while statement -> initialization -> where to start, increament, termination-> where to stop

let firstpage: string = 'firstPage';

let lastpage: string = 'lastPage';

let index: number = 2;
var page: string = 'secondPage';

// while loop
while (index <= myNo) {
    console.log("No is :", index);
    index = +2;
}

while (page != lastpage) {
    console.log("Click next page");
}

// do while loop

do {
    // statement without any condition
    console.log("My number is ", myNo)
    //increment
    myNo = +5;

} while (myNo >= 10); // condition to break the loop

do {
    console.log("Click next page");
} while (page != lastpage);

// for loop
for (var i: number = 0; i < myNo; i + 2) {
    console.log(i);
}

//break
for (var i: number = 2; i < myNo; i += 2) {
    if (i == 6) {
        break;
    }
    console.log('Index value is ' + i);
}

//break
for (var i: number = 2; i < myNo; i ++) {
    if (i == 4) {
        continue;
    }
    console.log('Index value is ' + i);
}