// Date and Time in Javascript



// Javascript Date objects represent a single moment in time in a platform-independent format. Date objects contain a Number that represents milliseconds since 1 January 1970 UTC.

// Create Date Objects.
// There are 4 ways to create a new Date Objects:
//new Date(); // 1st method

//new Date(year, month, day, hours, minutes, seconds, milliseconds); // it takes 7 arguments. // 2nd method

//new Date(milliseconds); // we cannot avoid  month section

//new Date(date string);














// new Date()
// Date objects are created with the new Date() constructor.

// 1st Method
//let currDate = new Date();
//console.log(currDate);

//console.log(new Date());
//console.log(new Date().toLocaleString()); // gives you the exact time in the country you are currently located.
//console.log(new Date().toLocaleString()); // gives you a local time of your counry.





// Date.now()
// returns the numeric value corresponding to the current time -the number of milliseconds elapsed  since January 1, 1970 00: 00: 00 UTC

//console.log(Date.now());





// new Date(year, month, ...)
// 7 numbers specify year, month, day, hours, minutes, second and milliseconds (in that order). Note:  Javascript counts months from 0 to 11.

// January is 0. December is 11

 //let d = new Date(2021, 1, 10, 33, 30, 0);
//  let d = new Date(2021, 0, 5);
//  console.log(d);
//  console.log(d.toLocaleString());



 // new Date(dateString)
 // new Date(dateString) creates a new date object from date string.

//  let d = new Date("October 13, 2014 11:13:00");
//  console.log(d);
//  console.log(d.toLocaleString());





// new Date(milliseconds)
// new Date(milliseconds) creates a new date objects as zero time plus milliseconds

//let d = new Date (1609574531435);
//let d = new Date(0);
// let d = new Date(86400000*2);
// console.log(d.toLocaleString());




// Dates Method

// how to get the individual date

//const curDate = new Date();
// console.log(curDate.toLocaleString());
// console.log(curDate.getFullYear());
// console.log(curDate.getMonth()); // 0-11 jan to dec
// console.log(curDate.getDate());
// console.log(curDate.getDay()); // 6, Sat is 6.


//   how to set the individual date

//console.log(curDate.setFullYear(2020)); // the setFullYear() method can optional set month and day.
//let setmonth = curDate.setMonth(10); // 0 - 11 is Jan - Dec
// console.log(setmonth);
// console.log(curDate.setDate(5));
// console.log(curDate.toLocaleString());








// Time Methods


//const curTime = new Date();

//  how to get the individual time

// console.log(curTime.getTime()); // The getTime() method returns the number of milliseconds since January 1, 1970
// console.log(curTime.getHours()); // The getHours() method returns the hours of date as a number (0 - 23)
// console.log(curTime.getMinutes());
// console.log(curTime.getSeconds());
// console.log(curTime.getMilliseconds());









// How to set the individual time

// let curTime = new Date();
//   //console.log(curTime.setTime());
// console.log(curTime.setHours(5));
// console.log(curTime.setMinutes(5));
// console.log(curTime.setSeconds(5));
// console.log(curTime.setMilliseconds(5));







// Date.now()
// Returns the numberic value corresponding to the current time-- the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC

//console.log(Date.now());




// new Date(year, month, ...)
// 7 numbers specify year, month, day, hour, minutes, seconds and milliseconds (in that order). Note: Javascript counts month from 0 to 11.

// let d = new Date( 2018, 5, 24, 10, 33, 30, 0);
// let d = new Date(2021, 0, 5);
// console.log(d.toLocaleString());





// new Date(dateString)
// new Date(dateString) creates a new date object from a date string.

// let d = new Date("February 14, 2021, 4:37:15");
// console.log(d.toLocaleString());







// new Date(milliseconds)

//let d = new Date(1609574531435);
//let d = new Date(86400000 * 2);
// let d = new Date(0);
// console.log(d.toLocaleString());




// Dates Method
// const curDate = new Date();
// console.log(curDate.toLocaleString());
// console.log(curDate.getFullYear());
// console.log(curDate.getMonth());
// console.log(curDate.getDate());




// set date

// let d = new Date();
// console.log(d.setFullYear(2022));
// // The setFullYear() method can optionally set month and day
// console.log(d.toLocaleString());
// let setmonth = d.setMonth(10);
// console.log(d.toLocaleString());
// console.log(d.setDate(5));
// console.log(d.toLocaleString());









// Time Methods

// const curTime = new Date();

// console.log(curTime.getTime());     // the getTime() method returns the number of milliseconds since January 1 , 1970
// console.log(curTime.getHours()); // The getHours() method returns the hours of date as a number. number (0-23)
// console.log(curTime.getMinutes());
// console.log(curTime.getSeconds());
// console.log(curTime.getMilliseconds());








// Set Time

//let curTime = new Date();
// console.log(curTime.setMinutes(5));
// console.log(curTime.setHours(5));
// console.log(curTime.setSeconds(50));
// console.log(curTime.toLocaleString());







// Only time
console.log(new Date().toLocaleTimeString());

// Only date
console.log(new Date().toLocaleDateString());

// Date and Time
console.log(new Date().toLocaleString());

