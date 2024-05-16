// spread operator;
let fruits=["apple","banana","guava"];
let newfruits=[...fruits];
console.log(newfruits);

// concatenating arrays;
const num1=[1,2,3];
const num2=[4,5,6];
const num3=[...num1,...[num2]];
console.log(num3);
const num4=[...num1,...num2];
console.log(num4);
const num5=[...[num1],...[num2]];
console.log(num5);

// adding element to existing array.
const sample=[23,344,556,6,78,55];
sample.push(...[100,200,300]);
console.log(sample);

// split.
const country='india';
console.log([...country]);