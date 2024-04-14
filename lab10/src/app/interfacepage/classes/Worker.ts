import { Employee } from './Employee';
import { IWorkable } from './IWorkable';

export class WorkerPerson extends Employee implements IWorkable {
  private position: string;

  constructor(name: string, age: number, department: string, position: string) {
    super(name, age, department);
    this.position = position;
  }

  doWork(): void {
    console.log(`Worker ${this.name} is performing tasks.`);
  }

  introduceYourself(): void {
    console.log(
      `I am a worker named ${this.name} in the ${this.department} department.`
    );
  }
}
