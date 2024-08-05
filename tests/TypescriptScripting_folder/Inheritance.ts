class Family {
    name: string;
    size: number;
    religion: string;

    constructor(_name: string, _size: number, _religion: string) {
        this.name = _name;
        this.size = _size;
        this.religion = _religion;
    }

    familyDetails(): void {
        console.log(`My family name is ${this.name}, we are ${this.size} in number and our religion is 
${this.religion}`)
    }

}

class NuclearFamily extends Family {
    dependant: number;
    income: number;

    constructor(_dependant: number, _income: number, name: string, size: number, religion: string) {
        super(name, size, religion);
        this.dependant = _dependant;
        this.income = _income;
    }
}

class kids extends NuclearFamily {
    hobby: string;
    sibling: string;

    constructor(_hobby: string, _sibling: string, dependant: number, income: number, name: string,
        size: number, religion: string) {
        super(dependant, income, name, size, religion);
        this.hobby = _hobby;
        this.sibling = _sibling;
    }

    KidInfo(): void {
        console.log(`My family name is ${this.name}, I have ${this.sibling} sibling and our religion is 
${this.religion}`)
    }
}