/*

  Create a function `daysUntilDate` that accepts a string (with the format `"mm/dd/yyyy"`) and
  returns the number of days (integer) between today and that date. Please use the built in
  Javascript `Date` type in your solution.

  See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

  Next, create a function `birthdayReminder` that accepts an array of objects, containing a person's
  date of birth (dob), and returns an array of reminder messages (strings).

  ```javascript
  birthdayReminder([
    {
      name: "Jack",
      dob: "10/31/2013"
    },
    {
      name: "Jill",
      dob: "4/01/1975"
    }
  ]);

  //=> [
  //      "Jack's birthday is in 75 days",
  //      "Jill's birthday is in 305 days"
  //    ]
  ```

  Bonuses
  - Will your function still work tomorrow when the date is different? Is it future proofed?
  - To make your output more relevant, can you sort by days remaining (ascending)?

*/

// YOUR CODE HERE
var birthdayReminder=([
    {
      name: "Jack",
      dob: "10/31/2013"
    },
    {
      name: "Jill",
      dob: "4/01/1975"
    }
  ]);



for(i=0;i<birthdayReminder.length;i++){
var dob = birthdayReminder[i].dob;
var dateToConv = dob.split('/');
var dateorder=dateToConv[2] +', ' + dateToConv[0] + ', '+dateToConv[1];
//console.log(dateorder);
var birthTime = new Date(dateorder).getTime();
//console.log(birthTime);
var timeNow =Date.now();
//console.log(timeNow);
//console.log(Math.floor(timeNow - birthTime)/31557600000);
var age=Math.floor(timeNow - birthTime)/31557600000;
var countDown=(365-(age % 1)*365.25);
//console.log(countDown);
console.log(birthdayReminder[i].name+"'s Birthday is in "+countDown+" days!"+"....yes we didn't round this value on purpose, precision is valued amongst my friends.")
}


