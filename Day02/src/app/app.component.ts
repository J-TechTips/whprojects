import { Component, OnInit } from '@angular/core';

class Greeting {
message: string;
constructor(message: string) {
this.message = message;
}
greet() {
return 'Hello, ' + this.message;
}
}
class Animal {
name: string;
constructor(animalName: string) {
this.name = animalName;
}
move(distance: number = 0) {
console.log(`${this.name} moved ${distance}m.`);
}
}
// Wolf starts here
class Wolf extends Animal {
constructor(name: string) {
super(name);
}
howl() {
console.log('Lawrence I want Apples!');
}
move(distanceMovedByWolf: number = 5) {
console.log('Wolf is moving....');
super.move(distanceMovedByWolf);
}
}
// Poodle Moving
class Poodle extends Wolf {
constructor(name: string) {
super(name);
}
move() {
let moving = super.move();
console.log('Poodle is walking....');
}
}
// Horse starts here
class Horse extends Animal {
constructor(name: string) {
super(name);
}
move(distanceMovedByHorse: number = 45) {
console.log('Horse is moving....');
super.move(distanceMovedByHorse);
}
}
// User starts here
class User {
private name: string;
constructor(name: string) {
this.name = name;
}
}
// User Jon
class Jon extends User {
constructor() {
super('Jon');
}
}
// Employee starts here
class Employee {
private name: string;
constructor(name: string) {
this.name = name;
}
}
// Person
class Person {
protected name: string;
constructor(name: string) {
this.name = name;
}
}
// Person with extend
class Worker extends Person {
private department: string;
constructor(name: string, department: string) {
super(name);
this.department = department;
}
getdetails() {
return `My name is ${this.name} and I work in ${this.department}.`;
}
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Apples';

ngOnInit() {
  // this.classTesting();
  // his.animalClassTesting();
  // this.classCompatibilityTesting();
  // this.extendedDerivedClassTesting();
  this.protectedTesting();
}
classTesting() {
  const greeter = new Greeting('World!');
  console.log(greeter.greet());
}
animalClassTesting() {
  const wolf = new Wolf('Holo');
  wolf.howl();
  wolf.move();
  const horse = new Horse('Mustang');
  horse.move();
}
classCompatibilityTesting() {
let user = new User('Doe');
const jon = new Jon();

console.log(user);
console.log(jon);

const employee = new Employee('Smith');
console.log(employee);
}
extendedDerivedClassTesting() {
const poodle = new Poodle('Tom');
poodle.move();
}
protectedTesting() {
const worker = new Worker('Steve', 'Sales');
console.log(worker.getdetails());
}



}
