// var age = 18;   //function scope variable "var" , "let" block scope variable
// console.log('the age is : ' + age); //print the val on console


// {
//     age = 34;
//     console.log('age in scope: ' + age);
// }

// console.log('age out of scope: '+ age)
// age will change to 34 once and will be updated in n out of scope

//--------------------------------------------------------------------------------------------------------
// let age = 18;   //function scope variable "var" , "let" block scope variable
// console.log('the age is : ' + age); //print the val on console

// // with let "value" will be updated inside scope only
// {
//     let age = 34;
//     console.log('age in scope: ' + age);
// }

// console.log('age out of scope: '+ age)


//--------------------------------------------------------------------------------------------------------
// const age = 18;   //function scope variable "var" , "let" block scope variable
// console.log('the age is : ' + age); //print the val on console

// // with let value will be updated inside scope only
// {
//     age = 34;
//     console.log('age in scope: ' + age);
// }

// console.log('age out of scope: '+ age)

//use delete to clear const memory

//---------------------------------------------------------------------------------------------

// function add(a,b,c)
// {
//     let d = a+b+c;
//     return d;
// }
// let result = add(2,3,4)
// console.log('the sum is : '+ result);

//-----------------------------------------------------------------------------------------------
// Function to calculate simple interest
// function cal_simpleInterest(P, T, R) {
//     let SI = (P * T * R) / 100;
//     return SI;
// }

// // Function to add two interests
// function addInterests(si1, si2) {
//     let total_si = si1 + si2;
//     return total_si;
// }

// let si1 = cal_simpleInterest(10000, 5, 5);  // Calculate first interest
// let si2 = cal_simpleInterest(3000, 7, 1);   // Calculate second interest
// let total_si = addInterests(si1, si2); // Add the two interests

// console.log("Total Interest = " + total_si);
//-------------------------------------------------------------------------------------------------------------
// function Student(name, age, gender) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//   }
  
//   // Create objects using the constructor function
//   var obj1 = new Student("Pankaj", 23, "male");
//   var obj2 = new Student("Reena", 25, "female");
//   var obj3 = new Student("Rajeev", 26, "male");
  
//   // Access and print the member variables
//   console.log(obj1.name); // Pankaj
//   console.log(obj1.age); // 23
//   console.log(obj1.gender); // male
  
//   console.log(obj2.name); // Reena
//   console.log(obj2.age); // 25
//   console.log(obj2.gender); // female
  
//   console.log(obj3.name); // Rajeev
//   console.log(obj3.age); // 26
//   console.log(obj3.gender); // male

  
//   function Student(name, age, gender) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//     this.branch = "CSE"; // Default value for branch
//     this.college = "abc"; // Default value for college
//   }
  
//   // Create objects using the updated constructor function
//   var obj1 = new Student("Pankaj", 23, "male");
//   var obj2 = new Student("Reena", 25, "female");
//   var obj3 = new Student("Rajeev", 26, "male");
  
//   // Access and print the new properties
//   console.log(obj1.branch); // CSE
//   console.log(obj1.college); // abc
  
//   console.log(obj2.branch); // CSE
//   console.log(obj2.college); // abc
  
//   console.log(obj3.branch); // CSE
//   console.log(obj3.college); // abc
  


//-----------------------------------------------------------------------------------------------------------------------------------
// class Vehicle {
//     #capacity=4000;
//     constructor(name, capacity) {
//       this.name = name;
//       this.#capacity = capacity;
//     }
    
//     startEngine() {
//       console.log(`${this.name} can start and has a capacity of ${this.#capacity}.`);
//     }
  
//     stopEngine() {
//       console.log(`${this.name} can stop and has a capacity of ${this.#capacity}.`);
//     }
  
//     run() {
//       console.log(`${this.name} is running.`);
//     }
  
//     static brake() {
//       console.log(`We are calling a static method`);
//     }
  
//     callCapacity() {
//       console.log(`The capacity of ${this.name} is ${this.#capacity}.`);
//     }
//   }
  
//   class TwoW extends Vehicle {
//     constructor(name, capacity, engine, tyre) {
//       super(name, capacity);
//       this.engine = engine;
//       this.tyre = tyre;
//     }
  
  
//   }
  
//   class ThreeW extends Vehicle {
//     constructor(name, capacity, engine, tyre) {
//       super(name, capacity);
//       this.engine = engine;
//       this.tyre = tyre;
//     }
  
//   }
  
//   let bike = new TwoW('TVS', 1000, '300cc', 'Tubeless');
  

//   console.log(`Name: ${bike.name}`);
//   console.log(`tyre: ${bike.tyre}`);
//   console.log(`Engine: ${bike.engine}`);
//   bike.startEngine();
//   bike.stopEngine();
//   bike.run();
//   TwoW.brake();
//   bike.callCapacity();
  
//   let auto = new ThreeW('Auto', 3000, '200cc', 'Solid');
//   console.log(`Name: ${auto.name}`);
//   console.log(`Tyre: ${auto.tyre}`);
//   console.log(`Engine: ${auto.engine}`);
//   auto.startEngine();
//   auto.stopEngine();
//   auto.run();
//   ThreeW.brake();
//   auto.callCapacity();

//-----------------------------------------------------------------------------------------------------------------

let string = "Java is open source language and Javascript is scripting language. java Is very user-friendly and easy to use";


let replacedString = string.replace("Java", "Python");
console.log(replacedString);

replacedString = replacedString.replaceAll("java", "python");
console.log(replacedString);

replacedString = replacedString.replace("Java", "Hello");
console.log(replacedString);

replacedString = replacedString.replace(/is/gi, "are");

console.log(replacedString);


  