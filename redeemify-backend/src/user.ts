export class User {
  name: string = "";
  age: number = 0;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  } 

  displayData() {
    console.log(this.name + " "+ this.age);
  }
}