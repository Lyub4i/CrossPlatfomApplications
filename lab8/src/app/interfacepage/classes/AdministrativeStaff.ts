import { Employee } from "./Employee";
import { IManageable } from "./IManageable";


export class AdministrativeStaff extends Employee implements IManageable {
    private role: string;

    constructor(name: string, age: number, department: string, role: string) {
        super(name, age, department);
        this.role = role;
    }

    manage(): void {
        console.log(`Administrative staff ${this.name} is managing administrative tasks.`);
    }

    introduceYourself(): void {
        console.log(`I am an administrative staff named ${this.name} working as ${this.role}.`);
    }
}