// class Person {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
//   greet() {
//     return `Hello ${this.firstName} ${this.lastName}`;
//   }
// }
// const john = new Person("Erlan", "Abdullaev");
// const erlan = new Person("John", "Doe");
// console.log(john.greet === erlan.greet);

//=========

// class Person {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
//   greet() {
//     return `Hello ${this.firstName} ${this.lastName}`;
//   }
// }
// class CLient extends Person {
//   constructor(firstName, lastName, email, city) {
//     super(firstName, lastName);
//     this.email = email;
//     this.city = city;
//   }
//   greet() {
//     return super.greet() + " I'm from " + this.city;
//     //2// return `${this.firstName} Email: ${this.email}`;
//   }
// }
// const john = new Person("John", "Doe");
// const mary = new CLient("mary", "mike", "mary@gmail.com", "NY");
// console.log(john.greet());
// console.log(mary.greet());

class Person {
  constructor(restName, typeRest) {
    this.restName = restName;
    this.typeRest = typeRest;
  }
  showInfo() {
    return ` ${this.restName} is a restauran of ${this.typeRest} meal`;
  }
  isOpen() {
    let openHour = new Date().getHours();
    let openDay = new Date().getDay();
    console.log(openHour);
    if (openDay === 6 || openDay === 0) {
      return `Restauran ${this.restName} is closed`;
    } else {
      if (openHour > 9 && openHour < 22) {
        return `Rstauran ${this.restName} is open`;
      } else {
        return `Rstauran ${this.restName} is closed`;
      }
    }
  }
}
const hurma = new Person("hurma", "kyrgyz");
const vasya = new Person("vasya", "russian");
// console.log(hurma.showInfo());
console.log(hurma.isOpen());
