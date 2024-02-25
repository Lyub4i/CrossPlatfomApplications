export abstract class Employee {
  name: string;
  age: number;
  department: string;

  constructor(name: string, age: number, department: string) {
    this.name = name;
    this.age = age;
    this.department = department;
  }

  // Getters and setters

  abstract introduceYourself(): void;
}
