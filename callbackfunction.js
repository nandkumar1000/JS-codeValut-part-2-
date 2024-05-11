// Callback function:-it is a function which is passed as an argument to another function;
const mathoperation=(a,b,operation)=>{
    return operation(a,b);
};
const add=(a,b)=>{
    return a+b;
};
const sub=(a,b)=>{
    return a-b;
};
const mul=(a,b)=>{
    return a*b;
};
const div=(a,b)=>{
    return a/b;
};
console.log(mathoperation(10,20,add));
console.log(mathoperation(10,20,sub));
console.log(mathoperation(10,20,mul));
console.log(mathoperation(10,20,div));