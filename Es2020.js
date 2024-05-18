const largenum = BigInt("2342333333333333122222222222224544444444444444444444443");
console.log(largenum);
console.log(typeof largenum);

//String Concatenation

const firstName="nand";
const lastName="kumar";

console.log(firstName+lastName);

//Template String

const fullName=`${firstName}   ${lastName}`;
console.log(fullName);

//Booleans & Comparison Operators

console.log(true,false);

// nullish coalescing operator.
const age=0;
const age2=4;
console.log(age ?? age2);
const age3=null;
const age4=4;
console.log(age3 ?? age4);


