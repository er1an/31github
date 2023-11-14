// function Person(name, age) {
//   this.name = name;
//   this.age = age;
//   console.log(this);
// }
// const john = new Person("john", 20);

//======
// function Person(name, birthday) {
//   this.name = name;
//   this.birthday = new Date(birthday);
// }
// Person.prototype.calculateAge = function () {
//   const diff = Date.now() - this.birthday.getTime();
//   const ageDate = new Date(diff);
//   return ageDate.getUTCFullYear() - 1970;
// };
// const john = new Person("john", "10-10-1980");
// const mary = new Person("mary", "10-10-1999");
// console.log(john.calculateAge());
// console.log(mary.calculateAge());

//========
// function Auto(model, year, color, fuelLeft) {
//   this.model = model;
//   this.year = year;
//   this.color = color;
//   this.fuelLeft = fuelLeft;
// }
// Auto.prototype.showInfo = function () {
//   console.log(
//     `Model: ${this.model}, Year: ${this.year}, Color: ${this.color},
//         Fuel left: ${this.fuelLeft}`
//   );
// };
// Auto.prototype.drive = function (distance) {
//   if (this.fuelLeft > 0) {
//     this.fuelLeft -= 10;
//   } else {
//     console.log("No fuel left");
//   }
// };
// const bmw = new Auto("BMW", "2020", "red", 10);
// bmw.showInfo();
// bmw.drive();
// bmw.showInfo();
// bmw.drive();

const erlan = new String("ggdfgdgdgfd");
console.log(erlan);