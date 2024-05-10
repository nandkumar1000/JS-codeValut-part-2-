// set time out
function mycallback() {
    console.log("It schedules the callback function after a delay of 99000 milliseconds (2 seconds)");
}
setTimeout(mycallback, 99000);


// 2. setInterval.
function mycallback(){
    console.log("it schedule the call back function after a delay of 2000 millisecond(2sec)");
};
setInterval(mycallback(4400));


// 5. set interval()
function mycallback(){
    console.log("it schedule the call back function after a delay of 2000 millisecond(2sec)");
};
setInterval(mycallback, 2000);

// function delayed.   
function delayedfunction(x){
 console.log("this function was delayed by 2000 millisecond( 2 seconds).",x);
}
setTimeout(delayedfunction,2000);
setTimeout(()=> delayedfunction(5),2000);

// repeate function:-
function repeatFunction() {
    console.log("This function was delayed by 1000 milliseconds (1 second).");
}

const intervalID = setInterval(repeatFunction, 1000);
// messase for delete
// setTimeout(() => {
//     clearInterval(intervalID);
// }, 5000);


// clock.
const currentTime = () => {
    let currentDate = new Date().toLocaleDateString();
    let currentTime = new Date().toLocaleTimeString();
    console.log(currentDate);
    console.log(currentTime);  
};

currentTime();

setInterval(() => {
    currentTime();
}, 1000);


