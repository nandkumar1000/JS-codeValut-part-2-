// CallbackHell= it is also known as pyramid of doom, refers to a situation in asynchronous js programming where multiple call back are used to handle asynchronous operation.
const getstudent=()=>{
    setTimeout(()=>{
        console.log('HI I am nand');
        setTimeout(()=>{
          console.log("nand kumar");
          setTimeout(()=>{
          console.log("nand kumar");
          setTimeout(()=>{
          console.log("nand kumar");
          setTimeout(()=>{
          console.log("nand kumar");
          setTimeout(()=>{
          console.log("nand kumar");
          setTimeout(()=>{
          console.log("nand kumar");
          setTimeout(()=>{
          console.log("nand kumar");
          setTimeout(()=>{
          console.log("nand kumar");
        },1000);
        },1000);
        },1000);
        },1000);
        },1000);
        },1000);
        },1000);
        },1000);
        
    },1000);
};
console.log(getstudent());