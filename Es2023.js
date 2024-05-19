// array.findLastIndex()
const array=[1,2,3,4,5,6,7,8,9,10];
const result=array.findLastIndex((value,index,array)=>{
    return value>5
})
console.log(result);

// reversed;
const array1=[1,2,3,4,5,6,7,8,9,10];
const result1=array1.reverse();
  console.log(result1);


// sort.
const numbers = [5, 2, 9, 1, 5, 6];
numbers.sort((a, b) => a - b);
// splice.
numbers.splice(0, 1);
console.log(numbers); 