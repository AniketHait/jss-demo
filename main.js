//let age=30;
//console.log(age);
//const age=30;
//console.log(age);
alert("Hello World")
console.warn("warning")
console.log("Hello World");


//const name="toy";
//const age= 22;
/*console.log("My name is" +name ,"& I am" +age,"yrs old");

const s="Wanna play TT";
console.log(s.length);
 console.log(s.substring(0,5));
 const fruits=["apple","pears","mangoes"];
 console.log(fruits);*/


 


const todos = [

    {
        id:1,
        text:'Wake Up',
        isCompleted: true
    },
    {
        id:2,
        text:'Playing TT',
        isCompleted: true
    },
    {
        id:3,
        text:'Sleep',
        isCompleted: false
    },
];


// for
for(let i=0;i<10;i++) {
     console.log(i);
  }
  
  // while -> research on it
  
  
  /*
  for(let i=0;i<todos.length;i++) {
      console.log(todos[i].text);
  }
  
  
  for(let todo of todos) {
      console.log(todo.text);
  }
  
class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

    getBirthYear() {
        return this.dob.getFullYear();
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

const person1 = new Person('nkdebug', 'kr','4-3-1993');
const person2 = new Person('nkdebug1', 'kr1','4-3-1993');


console.log(person1.dob.getFullYear());

console.log(person1.getFullName());

console.log(person1);