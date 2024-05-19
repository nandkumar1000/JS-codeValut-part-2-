// replace all occurence of words.
const originalstring="hellow i  AM  nand kumar sahu hellow how are your hellow";
const newstring=originalstring.replace(/hellow/g,"hi");
console.log(newstring);

// Replaceing multiple spaces with a single space.
const originalstring1="hellow    i          AM               nand kumar sahu hellow how are your hellow";
const newstring1=originalstring1.replace(/\s+/g," ");
console.log(newstring1);

// Converting string to array.
const originalstring2="hellow i  AM  nand kumar sahu hellow how are your hellow";
const newstring2=originalstring2.split(" ");
console.log(newstring2);

// Converting array to string.
const originalstring3="hellow i  AM  nand kumar sahu hellow how are your hellow";
const newstring3=originalstring3.split(" ");
const newstring4=newstring3.join(" ");
console.log(newstring4);