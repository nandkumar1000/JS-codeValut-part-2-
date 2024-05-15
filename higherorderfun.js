// higher order function:-it takes one or more function as argument or return a function as a result;
function processuserinput(name,greetuser){
    console.log("recived"+name);
    greetuser(name);
};
function greetuser(name){
    console.log(`hello!${name}`);
}
processuserinput("nand",greetuser);
