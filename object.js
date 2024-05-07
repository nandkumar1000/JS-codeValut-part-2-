// Object literals :- key value pairs
let student1 = {
    id: '22EAICS195',
    age:19,
    name:'nand',
  };
  console.log(student1);

//   key value pairs and method also ;
let person = {
    id: '22EAICS1955',
    p_name: 'nand kumar sahu',
    course: 'B-tech',
    age: 20,
    greet: function(){
      console.log("Hii I am nand kumar sahu");
    },
  };
  
  // Accessing using dot .
  console.log(person);
  console.log(person.age);
  console.log(person.p_name);
  
  // Accessing using square bracket.
  console.log(person["age"]);
  console.log(person["id"]);
  
  // Adding  value using dot ;
  person.age = 19;
  console.log(person.age);
  // Adding  value using square bracket;
  person["age"] = 20; 
  console.log(person.age);

//   dynamic keys
let idtype ="studentID";
let student ={
    [idtype]:"22EAICS195",
    name:"nand",
    age:19,
    isstudent:true,
    greet:function(){
     console.log(`hi, my ${idtype}is${student[idtype]} and my name is ${student.name}.`);
    },
};
console.log(student);
console.log(student.age);
console.log(student.name);
console.log(student.isstudent);
student.greet();


// pass by value and pass by reference:

// eg of pass by value.
let x=10;
const modifyvalue=(x) =>(x=20);
console.log(modifyvalue(x));
console.log(x);

// e.g pass by reference;
let obj={id:5,name:"nand kumar sahu"};
const modifyobj=(obj)=>(obj.id=10,obj.name="nand kumar sahu");
console.log(modifyobj(obj));
console.log(obj);

// comparision reference;
const obj1={name:"nand"};
const obj2={name:"kumar"};
const obj3=obj1;
console.log(obj1==obj2);
console.log(obj1==obj3);


/////////////////// different ways to create object in javascript /////////////////

// 1. object literals;
let obj={
  id:2,
  name:"nand",
};
// object.keys()
let key=Object.keys(obj);
console.log(key);
// object.values()
let value=Object.values(obj);
console.log(value);
// object.entries()
let entries=Object.entries(obj);
console.log(entries);

// array
const arr=[1,2,3,4,5,6,7,8,9,10];
console.log(arr);
console.log(arr[0]);
console.log(arr[1]); 
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);

// adding  new subject with marks;
let st = {
  name: "nand",
  marks: [
    {
      subject: "maths",
      marks: 90,
    }
  ]
};
console.log(st);
const addsubjectgrade = (st, subject, marks) => {
  if (!st.grade) {
    st.grade = {};
  }
  st.grade[subject] = marks;
};
addsubjectgrade(st, "computerscience", 99);
console.log(st);

// compare two object to determine they have the same properties and value.
let obja = { name: "nand", age: 20, city: "samastipur" };
let objb = { name: "kumar", age: 19, city: "patna" };
let objc = { name: "nand", age: 20, city: "samastipur" };

let o1 = Object.keys(obja);
let o2 = Object.keys(objb);
let o3 = Object.keys(objc);

if (o1.length !== o2.length || o1.length !== o3.length) {
  console.log("Objects are not equal in length");
} else {
  let isEqual = true;
  for (let key in obja) {
    if (obja[key] !== objb[key] || obja[key] !== objc[key]) {
      isEqual = false;
      break;
    }
  }
  if (isEqual) {
    console.log("Objects are equal");
  } else {
    console.log("Objects are not equal");
  }
};



// array methods

// 1. push
// 2. pop
// 3. shift
// 4. unshift