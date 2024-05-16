const name="nand";
const age=20;
const person={name,age }
console.log(person);

//object destructuring
// we can extract data from arrays and object and assign them to variable.
// extracting specifica elements.
const numbre=[1,23,4,54,56,6,67];
const[first,second,third,fourth]=numbre;
console.log(first,second,third);
console.log(fourth);

// withour third variable swaping;
let a=23,b=344;
[a,b]=[b,a];
console.log(a,b);