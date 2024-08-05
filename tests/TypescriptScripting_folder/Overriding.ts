class Bank {
    customer: string;
    customerId: string;

    constructor(_customer: string, _customerId: string) {
        this.customer = _customer;
        this.customerId = _customerId;

    }
    customerDetails(): string {
        return this.customer + " " + this.customerId;
    }
}

class GtbBank extends Bank {

    // method overriding. This method overrides the customerDetails method in the base class
    customerDetails(): string {
        return `Customer name ${this.customer} and 
        customer reference number ${this.customerId}`;
    }
}

var bank = new GtbBank("Steven","101");
bank.customerDetails();
// print the new customerDetails method implementation in the GtbBank
// Customer name Steven and customer reference number 101
