/*

  Create a function `letterCount` that accepts a string, and finds the number of times each letter
  occurs in the string. For example, given the word "apple", letterCount("apple") should count all
  occurrences of the letters "a", "p", "l" and "e" and then return the following output:

  ```javascript
  {
    "a": 1,
    "p": 2,
    "l": 1,
    "e": 1
  }
  ```

  Bonuses
  - Make sure that lower case letters and upper case letters count for the same character.
  - Ignore spaces, special characters, and punctuation.
  - Instead of just counting letters, calculate their percent-based frequency.
    See: http://www.math.cornell.edu/~mec/2003-2004/cryptography/subs/frequencies.html

    ```javascript
    {
      "a": 0.2, // percent
      "p": 0.4,
      "l": 0.2,
      "e": 0.2
    }
    ```

*/

// YOUR CODE HERE


///////-----Refactor------////////////
var x=prompt("What Would You Like to Count?")
x=x.toLowerCase().split('').sort().join().replace(/[^A-Z0-9]/ig,"");
var Letters = {};
var count= 1;
function uniqueCount(x){  
  for(var i = 0; i < x.length; i++){
    var attrItter = x.charAt(i);
     Letters[attrItter] = count;
    if(x[i]===x[i+1]){
      Letters[attrItter]=count++;
    }else if(x[i]===x[i]){
          count=1;
      }
}
 return Letters;
}
uniqueCount(x);
console.log(Letters)












////-----Alpha-----/////////////

var uniqueLetters=[];
var str = prompt("what letters do you want analyzed?");
var str=str.replace(/[^A-Z0-9]/ig,"").toLowerCase().split('');
var strLength=str.length;

  console.log(str);
for(var i=0;i<strLength;i++){
  if(uniqueLetters.indexOf(str[i])<0){

    uniqueLetters.push(str[i]);
  }};

console.log(uniqueLetters);
for(var i=0;i<uniqueLetters.length;i++){

  for(var x=0;i<strLength;x++){

    if(uniqueLetters[i]=str[x]){
      //Object.uniqueLetters[i]; incriment a counter in object
    }

  
  }
  console.log(uniqueLetters);
};
















