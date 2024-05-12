// firs method of date onject is  new date()
const currentdate= new Date();
console.log(currentdate);

const date= currentdate.getDate();
console.log(date);
const month= currentdate.getMonth();
console.log(month);
const year= currentdate.getFullYear();  
console.log(year);

const hours= currentdate.getHours();
console.log(hours);
const minutes= currentdate.getMinutes();
console.log(minutes);
const seconds= currentdate.getSeconds();
console.log(seconds);

// second method of date object is new date(year,month,date,hours,minutes,seconds,milliseconds)
const currentdate1= new Date(2022,11,25,10,33,30,0);
console.log(currentdate1);

// third method of date object is new date(datestring)  
const currentdate2= new Date("October 13,2014 11:13:00");
console.log(currentdate2);

// fourth method of date object is new date(milliseconds)
const currentdate3= new Date(0);
console.log(currentdate3);

// fifth method of date object is new date(datestring)
const currentdate4= new Date(1671985600000);
console.log(currentdate4);

// sixth method of date object is new date(year,month,date,hours,minutes,seconds,milliseconds)
const currentdate5= new Date(2022,11,25,10,33,30,0);
console.log(currentdate5);

// seventh method of date object is new date(year,month,date,hours,minutes,seconds,milliseconds)
const currentdate6= new Date(2022,11,25,10,33,30,0);
console.log(currentdate6);



// difference of two date using function; 
const getDaysDifference =(d1 , d2)=>{
    let oneday= 24*60*60*1000;
    let difference= Math.abs(d2-d1);
    console.log(Math.round(difference/oneday));
  };
  const date1= new Date("2024-02-19");
  const date2= new Date("2024-03-01");
  console.log(getDaysDifference(date1,date2));
  

//   by the help funtion write a no of days adding in date.program.
const addDaystodate=(date3,days)=>{
    console.log(date3);
    date1.setDate(date2.getDate()+days);
    return date3.toISOString().slice(0,10);
};
const date3= new Date("2024-02-19");
console.log(addDaystodate(date3,10));



// by the help of function write a no of days subtracting in date.program.
const differenceDaystodate = (date4,days)=>{
    date4.setDate(date4.getDate()-days);
    return date4.toISOString().slice(0,10);
};
const date4= new Date("2024-02-19");
console.log(differenceDaystodate(date4,10));

