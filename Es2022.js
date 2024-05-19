// finding element from last. 
const arr=[1,2,3,5,6,7];
console.log(arr[arr.length-1]);
console.log(arr.at(-1));
console.log(arr.at(-2));

// has own.
const book = {
    name: 'A Smarter way to learn JavaScript',
    author: 'NAND',
    publisher: {
        name: 'KUMAR'
    }
}
console.log(book.hasOwnProperty("name"));
console.log(book.hasOwnProperty("author"));
console.log(book.hasOwnProperty("publisher"));
console.log(book.publisher.hasOwnProperty("name"));

// OPTIONAL CHAINING
console.log(book.publisher?.name);