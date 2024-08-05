//Array
//array variable declaration
var names: string[] = ["Tewa", "Savage", "D Banj"]
// or

var arNames: string[];
arNames = ["Don", "Jazzy", "Olumide"];

//Multi array -> allow you store values of different data type

var muArray: (number | string | boolean)[] = ["Olu", 10, true]
var muArray1: Array<string | number> = [9, "Te", 2]

//print value in array using indexer
console.log(names[0]);

//print value in array using normal loop

for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}

//print value in array using in loop

for (var eachName in names) {
    console.log(names[eachName]);
}

// 2 dimensional array  // 3 columns 2 rows. row is separate by array []
var twoDA: (number | string)[][] = [["name", "age", 10], ["address", "house no", 20]] //
var twoDA2: number[][] = [[1, 3, 5], [3, 4, 8], [9, 4, 5], [9, 1, 0]] // 3 columns 4 rows

// print array values in this form [["name","age", 10],["address","house no", 20]]
console.log(twoDA);
console.log(twoDA2);  // [[1,3,5],[3,4,8],[9,4,5], [9,1,0]] 

for (var row =0;row<twoDA.length;row++)
    {
        for(var column =0;column<twoDA.length;column++)
            {
                console.log(twoDA[row][column]);
            }
    }
for (var j in twoDA) {
    //print each value in the array
    console.log(twoDA[j]);
    for (var k in twoDA2) {
        console.log(twoDA2[k][j]);
    }
    
}