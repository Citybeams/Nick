// alert("hello")
//alert in browser window

var amount = 500;

if ( amount > 1000){
  console.log("it's less");
} else {
  console.log("it's more");
}

// the curley braces are the beginning and end of the loop the a++ keeps it from being an infinite loop
var a = 1;
while (a < 10){
  console.log("something");
  a++;
}

// example of a for loop with a break in it will break out of the loop at 3 and stop running completely
for(var i = 0; i < 10; i++){
  console.log("looping");
  if (i == 3){
  break;
  }
};


function name (){
  console.log("function");
}
// function above will NOT run until its called below
name();

//example of a function with parameters
function numbers(x,y){
  var myVar = x*y
  console.log(myVar);
  return myVar;
}

numbers(7,8);


var multipleValues = [10,20,30,40,50];
var reversedValues = multipleValues.reverse();
console.log( reversedValues.join());

var phrase = "simple phrase here";
var word = phrase.split(" ");
console.log(word)
// will print ["simple", "phrase", "here"]

var phrase = "something else";
var index = phrase.indexOf("e");
console.log(index)
// will return 3 because that is the first index it finds the letter e
// will return -1 if it's not found at all


var segment = "another phrase here"
var slice = segment.slice(4,8)
console.log(slice)
// this prints "her" slicing at positions 4 and 8

// this prints out the current date and time
var today = new Date();
console.log(today);

