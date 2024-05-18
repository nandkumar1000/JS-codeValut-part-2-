// string padding.
// 1. padstart:- it means to pad from the begning.
const name="nand";
const paddedname=name.padStart(10,"*");
console.log(paddedname);

// 2. padend:- it means to pad from the end.
const name1="nand";
const paddedname1=name1.padEnd(10,"&");
console.log(paddedname1);

// 4. trim:- it means to remove the white space from the string.
const name3 = "   nand   ";
const trimmedName3 = name3.trim();
console.log(trimmedName3);

// 5. trimstart:- it means to remove the white space from the string from the begning.
const name4="   nand   ";
const trimmedname4=name4.trimStart();
console.log(trimmedname4);

// 6. trimend:- it means to remove the white space from the string from the end.
const name5="   nand   ";
const trimmedname5=name5.trimEnd();
console.log(trimmedname5);

// trailing commas.
const arr = [1, 2, 3, ];
const obj = { a: 1, b: 2, c: 3, };
console.log(arr);
console.log(obj);

// array .flat.
const arr1 = [1, 2, [3, 4, 5], 6, [7, 8]];
console.log(arr1.flat());

// array.flatmap.
const arr2 = [1, 2, 3, 4, 5];
console.log(arr2.flatMap(x => [x, x * 2]));

// object from entries() method.
const person={name:"nand",age:20};
const entries=Object.entries(person);
console.log(entries);

