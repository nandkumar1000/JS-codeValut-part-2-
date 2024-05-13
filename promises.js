// promises:-it is built in method like then catch to handle the result of asynchronous operation when complete or enocounter the errors;
const promises=new Promise((resolve, reject) => {
    
})
const pr=new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("hello")
    },2000);
});
pr.then((data)=>{
    console.log(data);
});
pr.catch((error)=>{
    console.log(error);
});
pr.finally(()=>{
    console.log("finally");
});
// by default promise has the pending state;
// enrollement  of students .
const studentname = "nand";

const enrollstudent = (studentname) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const issuccessful = Math.random() > 0.8;
            if (issuccessful) {
                resolve(`enrollment successful for ${studentname}`);
            } else {
                reject(`enrollment failed for ${studentname}. Please try again.`);
            }
        }, 2000);
    });
};

enrollstudent(studentname)
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("finally");
    });
// promisses method.
const promise1 = Promise.resolve("hello world");
const promise2 = 10;

const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, "goodbye");
});
// promise.all method
Promise.all([promise1, promise2, promise3]).then((values) => {
    console.log(values);
});
