class AccessModifier {
    /**
     * if you are using access modifier, you don't need to write out all the variables in the class. You 
     * can just declare in the constructor and it will still works
     * There 3 types of access modifier in Typescript
     * private-> read/write and access within the containing class
     * public -> read/write and access within/outside the containing class. npo restriction
     * readonly ->Can be access and read anywhere. However, the value cannot be changed
     *  
     */
    constructor(
        readonly race: string,
        private gender: string,
        public family: string ) 
    {
console.log(`My family name is ${this.family}, I am ${this.gender} and I come from ${this.race} origin`);
    }
}

var ac = new AccessModifier("Black African", "Male","Ladokun")
// gender can't be access, readonly value can't be reassigned
//ac.gender="";