  //PALINNDROME
function checkPalindrom(str){
    let lowerCaseStr = str.toLowerCase();
    let alphaNum = lowerCaseStr.match(/[a-z0-9]/g);
   if(alphaNum.join("") === alphaNum.reverse().join("")){
       return true;
   }
   else{
      return false;
   }
}
console.log(checkPalindrom("Ra_ce_Car>^^#"));

function myName(name){
    let lowerCase = name.toLowerCase();
    let alphaNum = lowerCase.match(/[a-z0-9]/g);
    if(alphaNum.join("") === alphaNum.reverse().join(""))
    {
         return true;
    }
    else{
        return false;
    }
}
console.log(myName(" E_ye#%$^ "));

let index = 0;
function changeColors(){

    let colors = ["blue", "green", "orange", "red", "purple"];
    let myDiv = document.querySelector(".container");
    myDiv.style.background = colors[index++];

if(index > colors.length-1)
       index = 0;
}
changeColors();

function clickedBtn(){
    let paragraph = document.getElementsByClassName("para");
    paragraph.innerText = "submit button is clicked";
}

clickedBtn();

//Math methods(map(),filter(),reduce(),forEach())

let numbers = [1, 2, 3, 4, 5, 0, -1, -2, -3, -4];
let positiveNums = numbers.filter((number =>number >= 0));
let doubledNums = positiveNums.map((number) =>number * 2);
let sum = 0;
for(let i = 0; i <doubledNums.length; i++){
    sum += doubledNums[i];
};

let additionNums = numbers.reduce(function(acc, curr){
      return acc + curr;
}, 0);

let negativeNums = numbers.filter((number)=>{
   return  number < 0;
})
let squaredNums = negativeNums.map((number)=>{
 return number * number;
})
 let divByTwo =squaredNums.map(function(number){
    if(number % 2 === 0){
        return number / 2;
    }
    else{
        return number * 2;
     }
 })
let divisibleNums = [];
numbers.forEach(function(number){
   divisibleNums.push(number * 2);
})

console.log(divisibleNums);
console.log(divByTwo);
console.log(squaredNums);
console.log(negativeNums);
console.log(additionNums);
console.log(sum);
console.log(doubledNums);
console.log(positiveNums);

//More About functions and its methods

//function declaration vs function expression

function greeting(){
    console.log("Hello World") // function declaration;
}

let greetings = function(){
    console.log("Hello world") // function expression;
}
greetings();

//closures: two functions one declared inside another and access
// the variable of the parent function

function myOwnName(){
    let name ="Joanes"
    function displayName(){
        console.log(name);
    }
    displayName();
}
myOwnName();

//Scope chain and lexical environment 
//Lexical environment is where the variable has been defined;
const fullName = "Joanes Claudio";
const myFriend = "Kamali Oreste";

function sayHello(){
    const fullName = "Beni Dama";
    const levelIQ = "is Intelligent";

    function expressHello(){
    const fullName = "Joan Quintus";

    function lastGoodBye(){
        
      return fullName + " " + levelIQ + " " + "than" + " " + myFriend ;
    
    }
     return lastGoodBye();
    }
    return expressHello();
}
console.log(sayHello());

//Answers for challenges
//Q1
function upperCase(str){
    let array1 = str.split(' '); 
    let newArray =[];
    for(let i = 0; i < array1.length; i++){
newArray.push(array1[i].charAt(0).toUpperCase() + array1[i].slice(1));

    }
    return newArray.join(' ');
}

console.log(upperCase("the biggest natural forest"));

//Q2

function reverseNumber(number){
    let stringNum = number.toString();
    let stringNum2 = stringNum.split('').reverse().join('');
    return stringNum2;

}
console.log(Number(reverseNumber(32243)));

//Q3
function checkPalindrome(string){
// convert string to LowerCase;
let lowerCaseStr = string.toLowerCase();
//Remove all non-alphaNumeric characters
let alphaNumeric = lowerCaseStr.match(/[a-z0-9]/g);
//Check palindrome
if(alphaNumeric.join('') === alphaNumeric.reverse().join('')){
   return true;
}
else{
    return false;
}
}

console.log(checkPalindrome("Madam"));

//Q4
function arrangeByOrder(string){
let upperCase = string.toLowerCase();
let newString = upperCase.split('').sort().join('');
return newString;
}

console.log(arrangeByOrder("Nshimiyimana"));

//Q5

//Given that the area of triangle = b*h/2 and the perimeter 
//is the sum of all 3 sides. let b and h equal to 5 and 6.Find Area and perimeter
//given that hypothenuse is square root of the b and h each squared.

//Area
function areaTriangle(b, h){
  return b * h/2;
}

console.log(areaTriangle(5,6));

//perimeter 

function perimeterTriangle(a, b){
    let c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
    let perimeter = a + b + c;

    return Math.ceil(perimeter);
}

console.log(perimeterTriangle(5, 6));

//Q6

function longestWord(string){
let newArr = string.split(' ');
if(newArr[0].length > newArr[1].length && newArr[2].length){
    return newArr[0];
}
else if(newArr[1].length > newArr[0].length && newArr[2].length){
return newArr[1];
}
else{
    return newArr[2];
}
}

console.log(longestWord("Web Development Course"));

//Q7

function vowels(str){
    let lowerCaseStr = str.toLowerCase();
    let str2 = lowerCaseStr.match(/[i,u,o,a,e]/g).join('');
    return str2.length;

}
console.log(vowels("The quick brown fox"));

//Q8

function returnType(argument){
return typeof(argument);
}

//Q9

console.log(returnType(true));

function secondLowGreat(array){
let ascendOrder = array.sort();
let newArr = `The second lowest and highest number is 
${ascendOrder[1]} and ${ascendOrder.length-1}`;
return newArr;
}

console.log(secondLowGreat([3, 2, 4, 1, 5, 7]));

//Q10

function exponentBase(n, b){
 return Math.pow(b, n);
}

console.log(exponentBase(3, 4));

//Q11

function myName(){
    console.log(arguments.callee.name);
}
myName();

function sayHello(){
    console.log("Hello");
}
console.log(sayHello.name);

//Q12

let time = new Date();
let day = time.getDay();
let weeklyDay = ["Sunday" , "Monday" , "Tuesday" , "Wednesday"
 ,"Thursday" ,"Friday" , "Saturday"];

 var hours = time.getHours();
 let minutes = time.getMinutes();
 let seconds = time.getSeconds();
 var hour = function(){
    if(hours >= 12){
       return ("PM");
    }
    else{
        return ("AM");
    }
 }

 let timeFormat = function(){
    if(hours >= 12){
      return hours - 12;
    }
else{
     return hours;
    }
 }
 /*if(hours === 12 && timeDiv === "PM"){
   if(minutes === 0 && seconds === 0){
     hours = 12;
     //timeDiv = "Noon"
   }
 }

 if(hours === 12 && timeDiv === "AM"){
    if(minutes === 0 && seconds === 0){
      hours = 12;
      //timeDiv = "Midnight";
    }
    else{
        hours = 12;
        //timeDiv = "AM"
    }
 }*/
console.log(hours + ":" + minutes + ":" + seconds);
console.log(timeFormat());
console.log("Today is:" + " " + `${weeklyDay[day]}`);

function windowPrint(){

}

//Q13

let currTime = new Date();
let date = currTime.getDate();
let month = currTime.getMonth() + 1;
let year = currTime.getFullYear();
if(date < 10){
    date = '0' + date;
}

if(month < 10){
 month = '0' + month;
}

let todayDate = date + "/" + month + "/" + year;
let todayDate2 = month + "-" + date + "-" + year;
let todayDate3 = year + "." + date + "." + month;

console.log(todayDate);
console.log(todayDate2);
console.log(todayDate3);

//Q14

let side1 = 5;
let side2 = 6;
let side3 = 7;

let perimeter = (side1 + side2 + side3)/2;
let area = Math.ceil(Math.sqrt(perimeter *
     ((perimeter-side1)*(perimeter-side2)*(perimeter-side3))))

console.log(`The area of given triangle is ${area}`);

function checkleapYear(year){
if(year % 4 === 0 && year % 100 != 0 || year % 400 === 0){
    return true;

}
else{
    return false;
}
}

console.log(checkleapYear(2000));

/*let randomNum = Math.ceil(Math.random(1, 11) * 10);
function checkRandomNum(randomNum){
    if(randomNum <= 10){
      return prompt("Good Work");
    }
    else{
        prompt("Not matched");
    }
}

console.log(checkRandomNum(11));*/

let a;
let b;
let c;

document.getElementById("ad-btn").onclick = function(){
    a = document.getElementById("text-btn1").value;
    a = Number(a);
    b = document.getElementById("text-btn2").value;
    b = Number(b);
    c = a + b;
document.getElementById("result").innerHTML = "The sum is:"+" " + c;
}

document.getElementById("multi-btn").onclick = function(){
    a = document.getElementById("text-btn1").value;
    a = Number(a);
    b = document.getElementById("text-btn2").value;
    b = Number(b);
    c = a * b;
document.getElementById("result").innerHTML = "The multiplication is:"+" " + c;
}

document.getElementById("div-btn").onclick = function(){
    a = document.getElementById("text-btn1").value;
    a = Number(a);
    b = document.getElementById("text-btn2").value;
    b = Number(b);
    c = a / b;
document.getElementById("result").innerHTML = "The division is:"+ " " + c;
}

document.getElementById("sub-btn").onclick = function(){
    a = document.getElementById("text-btn1").value;
    a = Number(a);
    b = document.getElementById("text-btn2").value;
    b = Number(b);
    c = a - b;
document.getElementById("result").innerHTML = "The substraction is:"+" " + c;
}

function toCelcius(temp){
  return Math.ceil((temp - 32) * 5/9);
}

function toFahrenheit(temp){
 return Math.ceil((temp * 9/5) + 32);
}

document.getElementById("submit-btn").onclick = function(){
    let temp;
    if(document.getElementById("radio-btn1").checked){
        temp = document.getElementById("txt-btn").value;
        temp = toCelcius(temp);
        temp = Number(temp);
        document.getElementById("temp-result").innerHTML =
        "The temperature is:" + " " + temp + " " + "degree Celcius";

    }
    else if(document.getElementById("radio-btn2").checked){
        temp = document.getElementById("txt-btn").value;
        temp = toFahrenheit(temp);
        temp = Number(temp);
        document.getElementById("temp-result").innerHTML =
        "The temperature is:" + temp + " " + "degree Fahrenheit";
    }
    else{
        document.getElementById("temp-result").innerHTML =
         "Please Enter the value in temparature box";
    }
    
}

let x;
let y;
let z;

document.getElementById("submitBtn").onclick = function(){
    x = document.getElementById("side-btn1").value;
    x = Number(x);
    y = document.getElementById("side-btn2").value;
    y = Number(y);
    z = document.getElementById("side-btn3").value;
    z = Number(z);
    let perimeter = (x + y + z)/2;
    let area = Math.ceil(Math.sqrt(perimeter *(perimeter-x)
    *(perimeter-y)*(perimeter-z)));
    document.getElementById("displayC").innerHTML = 
    "The area of triangle is:" + " " + area + " " + "centimer square"

}

let age;

document.getElementById("sub-age").onclick = function(){
    age = document.getElementById("age-btn").value;
    age = Number(Math.ceil(Math.random(1, 101) * 100));
    
   if(age >= 16){
  document.getElementById("ageLabel").innerHTML = 
     "You are allowed to drive";
   }
   else if(age >= 65){
        document.getElementById("ageLabel").innerHTML = 
         "You are too old to drive";
    }
    
   else if(age < 16){
    document.getElementById("ageLabel").innerHTML = 
     "You're too young to drive";
   }
}
let name = "Darling"
 function displayName(name){
   return name
 }

 console.log("Hello" + " " + name);

 function getSum(a, b){
if(a === b){
  return a || b;
}
else{
    return a + b;
}
 }

 let number = 120.334;
 let t;
 let k;
 let s;
 t = number.toFixed(1);
 t = Number(t);
 k = parseInt(t);
 s = parseFloat(t);
 console.log(k);
 console.log(s);

 
 let word = "";
 if(word){
    console.log("true");
    }
 else{
    console.log("false")
 }

 let nam1 = "Joanes";
 function displayName(){
    nam1 = "Quintus";
    function myName(){
       nam1 = "Bjd";
      function sayHello(){
        console.log(nam1);
      }
      //console.log(nam1)
    }
 }
 displayName();
console.log(displayName());

let array = [1, 2, 3, 4];
let arr2 = array.slice(1, 3);
console.log(arr2);

function greet(name) {
    console.log("Hello, " + name);
  }
  
  function welcome() {
    console.log("Welcome to the program!");
  }
  
  function main() {
    let userName = "John";
    greet(userName) + " " + welcome();
    //welcome()
}

main();

const person = {
    name: 'John',
    age: 30,
    greet() {
      console.log('Hello, my name is ' + this.name + ' and I am ' + this.age + ' years old.');
    }
  };

  console.log(person.greet());

  let phrase = "the quick brown fox";
  phrase = phrase.split(" ");
  let capWord = "";
  for(let i = 0; i<phrase.length; i++){
    capWord += phrase[i][0].toUpperCase() + phrase[i].substring(1);
  }
  console.log(capWord);

  function difference(x){
    if(x > 13){
      return (x - 13) * 2;
    }
    else {
       return (13 - x);
    }
    
  }
  console.log(difference(8));

  function findSum(a, b){
   if(a === b){
    return (a + b) * 3;
   }
   else{
    return a + b;
   }
  }

  console.log(findSum(15, 30));

  function abDiff(a){
  if(a <= 19){
    return 19 - a;
  }
  else{
    return (a - 19) * 3;
  }
  }
  console.log(abDiff(19));

  function checkNum(a, b){
   if(a === 50 || b === 50 || a + b === 50){
    return true;
   }
   else{
    return false;
   }
  }

  console.log(checkNum(50, 50));

  function positOrNeg(a, b){
    if(a < 0 || b < 0){
       return true;
    }
    else{
        return false;
    }
  }

  console.log(positOrNeg(10, 2));

  function addStr(sTr){
  if(sTr.substring(0, 2) === "Py"){
    return sTr;

  }
  else{
    return 'Py' + sTr;
  }
  }

  console.log(addStr("Pythagoras"));
  

function checkRange(a, b, c){
if(a >= 50 || a <= 99 || b>=50 || b <= 99 || c>=50 || c<= 99){
    return true;
}
else{
    return false;
}
}
console.log(checkRange(50, 30, 22));

function checkLargeNum(a, b, c){
    if(a > b && a > c)
    {
        return a;
    }
    else if( b > a && b > c ){
        return b;
    } 
    else{
        return c;
    }

    }

    console.log(checkLargeNum(40, 30, 10));

    function checkClosest(a, b){
      if(a > b && a < 100){
         return a;
      }
      else{
        return b;
      }
    }

    console.log(checkClosest(70, 40));

    function checkRangeNum(a, b){
        if(a >= 40 && a <= 60 || a >= 70 && a <= 100){
            return true;

        }
        else if(b >= 40 && b <= 60 || b >= 70 && b <= 100){
            return true;

        }
        else{
            return false;
        }

    }
    console.log(checkRangeNum(20, 30));

    function computeSum(a, b){
        if(a + b >= 50 && a + b <= 80){
            return 65;
        }
        else{
            return 80;
        }

    }

    console.log(computeSum(30, 10));

    function toCheckSum(a, b){
      if(a === 8 || b === 8 || a - b === 8 
        || b -a === 8 || a + b === 8){
        return true;
      }
      else{
        return false;
      }
    }
console.log(toCheckSum(20, 12));

function checkTheNumbers(x, y, z){
  if(x === y && x === z && y === z){
    return 30;
  }
  else if(x === y || x === z || y === z){
    return 40;
  }
  else{
    return 20;
  }
}

console.log(checkTheNumbers(20, 30, 10));

function checkOneNum(a, b, c){
    if(a >= 20 || a < b || a < c 
        ||b >= 20 || b < a || b < c 
        || c >= 20 || c < b || c < b 
        || c >= 20 || c < a || c < a){
      return true;
    }
    else{
        return false;
    }

}

console.log(checkOneNum(10, 10, 12));

function upperCase(string){
   if(string.length < 3){
    return string.toUpperCase();
   }
   else{
    return string.substring(0,3).toLowerCase() + string.slice(3);
   }
}

console.log(upperCase("JOANES"));

function multipleOf(a, b){
  if(a % 7 === 0 || b % 11 === 0){
     return true;
  }
  else{ 
    return false;
  }
}
console.log(multipleOf(10, 17));

function sortStr(string){
  let newStr = string.toLowerCase().split("").reverse().sort().join("");
  return newStr;
}
console.log(sortStr("Nshimiyimana"));

function capitalizeWord(string){

  string = string.split(" ");
  for(let i = 0; i < string.length; i++){
  string[i] = string[i][0].toUpperCase() + string[i].substr(1);
  }
  return string.join(" ");

}

console.log(capitalizeWord("the earth revolves around the sun"));

function countVowels(str){
let vowels = str.match(/[i,u,o,a,e]/g);
vowels = vowels.length;
return vowels;
}
console.log(countVowels("nshimiyimana"));

function removeLastChar(str){
let newStr = str.slice(1, str.length-1);
return newStr;
}
console.log(removeLastChar("Joanes"));

function halfString(str){
if(str.length % 2 === 0){
  return str.slice(0, str.length/2);
}
else{
  return str;
}
}

console.log(halfString("Nshimiyimana"));

function concatinateTwoStrings(str1, str2){
  let stra = str1.slice(1);
  let strb = str2.slice(1);
  let newStr = stra + strb;
  return newStr;
}

console.log(concatinateTwoStrings("NSHIMIYIMANA", "Joanes"));

function lastCharacters(str){
  if(str.length >= 3){
     return str.slice(-3) + str;
  }
  else{
    "This is unrequired string";
  }
}

console.log(lastCharacters("Nshimiyimana"));

console.log(("Nshim".length + 1)/2);

function oddString(str){
  let middle = (str.length + 1)/2
if(str.length >=3 && str.length % 2 !== 0){
  return str.slice(middle-2, middle+1)
}
else{
  return str;
}
}
console.log(oddString("Python"));

function startWith(str){
  if(str.length >= 3 && (str.startsWith("Los") || str.startsWith("New"))){
      return str;
  }
  else{
    return "string not satisfying the condition";
  }
}

console.log(startWith("Los Angeles"));

function firstOrLast(str){
if(str[0] === "P" || str.length-1 === "P"){
  return str.slice(1, str.length -1);

} else{
  return str;
}
}
console.log(firstOrLast("Programme"));

function nCharStr(str){
  let firstChar = str.slice(0,2);
  let lastChar = str.slice(-2);
  let strConcat = firstChar + lastChar;
  return strConcat;
}

console.log(nCharStr("Nshimiyimana"));

function checkPosition(array){
  if(array.length >= 1 && (array[0] === 1 || array.length-1 === 1)){
       return true;
  }
  else{
    return false;
  }
}
console.log(checkPosition([1, 2, 3, 4]));


function arreleme(){
 let arr = [2,4,t];
 if(arr[0] === arr.length-1){
  return true;
 } else{
  return false;
 }
}

console.log(arreleme());

function threeChar(array){
if(array.length >= 3 && (array.slice(0, 3) === array.slice(-3))){
       return true;
}
else{
  return false;
}
}

console.log(threeChar([1,2,3,4,5,6]));
function newArr(arr1, arr2){
  let arr3 = [arr1[1], arr2[1]];
  return arr3;
}
console.log(newArr([1,2,3],[5,6,7]));

function containNum(arr){
if(arr.length ==2 &&(arr[0]===1 || arr[1]===3)){
  return true;
}
else{
  return false;
}
}
console.log(containNum([1,3,5]));

function largeArray(array){
  let arr1 = [];
  let arr2 = [];
  for(let i = 0; i < array.length; i++){
  if(array[i] % 2 === 0){
    arr1 += array[i];
  }
  else{
    arr2 += array[i];
  }}
  return [arr1 || arr2];
}
console.log(largeArray([1,2,3,4,5,6,7,8,9,10]))


