import {Employee} from "./Employee";
import {IWorkable} from "./IWorkable";
import {IManageable} from "./IManageable";

export class Engineer extends Employee implements IWorkable, IManageable {
    private specialization: string;

    constructor(name: string, age: number, department: string, specialization: string) {
        super(name, age, department);
        this.specialization = specialization;
    }

    doWork(): void {
        console.log(`Engineer ${this.name} is designing and building.`);
    }

    manage(): void {
        console.log(`Engineer ${this.name} is managing projects.`);
    }

    introduceYourself(): void {
        console.log(`I am an engineer named ${this.name} specialized in ${this.specialization}.`);
    }
}