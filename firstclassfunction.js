function sayhello (name){
    // console.log("hello" + name);
    return "hello"+name+"!";
}
var greetfunction=sayhello;
console.log(greetfunction("nand"));

function callfunction(fun){
    fun("nand");
}
// function expression
callfunction(sayhello);
var sayhello=function(name){
    console.log("hello" + name);
}
sayhello("nand");

//function constructor
var sayhello=new Function("name","console.log('hello'+name)");
sayhello("nand");

//self invoking function
(function(name){
    console.log("hello" + name);
})("nand");

