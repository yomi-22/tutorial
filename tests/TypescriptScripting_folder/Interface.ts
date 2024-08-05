import { copyFileSync } from "fs";

interface IAndroid {
    brand: string;
    model: string;
    isContract: boolean;
    mobilePhoneContractDetails(): void;
}

interface mobileContract extends IAndroid {
    camera: string;
    apps: string;
    mobileInfo(): string;
}

class mobilePhoneContractDetails implements mobileContract {
    brand: string;
    model: string;
    isContract: boolean;
    camera: string;
    apps: string;

    constructor(_brand: string, _model: string, _isContract: boolean, _camera: string,
        _apps: string) {
        this.apps = _apps;
        this.brand = _brand;
        this.isContract = _isContract;
        this.model = _model;
        this.camera = _camera;
    }

    mobilePhoneContractDetails(): void {
        console.log(`My phone brand is ${this.brand}, model is ${this.model} and it is contract 
            is ${this.isContract}`);
    }

    mobileInfo(): string {
        return this.camera + this.apps;
    }

}
var mobile = new mobilePhoneContractDetails("Samsung","S10",false,"72Mp","Play Store");
// mobile.brand = "Samsung";
// mobile.model = "S10";
// mobile.isContract = false;
// mobile.camera = "76MPs";
// mobile.apps = "Play Store";

mobile.mobilePhoneContractDetails()
{
    console.log(`My phone brand is ${mobile.brand}, model is ${mobile.model} and it is contract 
        is ${mobile.isContract}`);
}

mobile.mobileInfo(){
    console.log(`My phone camera is ${mobile.camera}, has apps install
    ${mobile.apps} from the manufacturer`);
}

