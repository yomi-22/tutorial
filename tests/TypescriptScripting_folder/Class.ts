class Person {
    //variable
    personId:number;
    name:string;
    isAdult:boolean;
    age:number;

// constructor-> Initilise class field and doesn't have return type
constructor(_personId:number, _name:string,_isAdult:boolean, _age:number)
{
this.personId =_personId;
this.name =_name;
this.isAdult=_isAdult;
this.age = _age;
}

//method

 PersonDetails():void {
 console.log(`Your name is ${this.name} and your person id is
 ${this.personId} and your age is ${this.age} you are adult is ${this.isAdult}`)
}
}

var person = new Person(101, "Steve", true, 26 );
person.PersonDetails(); 
// return Your name is Steve and your person id is 101 and my age is 26 you are adult is true

