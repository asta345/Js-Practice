Find area of rectangle?
var length = prompt("Enter a whole number for the length of your rectangle.");
var width = prompt ("Enter a whole number for the width of your rectangle.");

function area (length, width) {
return length * width;
}

console.log(The area of your rectangle is " + area);

find the assic value of character?
// take input from the user
const string = prompt('Enter a character: ');

// convert into ASCII value
const result = string.codePointAt(0);

console.log(`The ASCII value is: ${result}`);

// program to convert celsius to fahrenheit
// ask the celsius value to the user 
const celsius = prompt("Enter a celsius value: ");

// calculate fahrenheit
const fahrenheit = (celsius * 1.8) + 32

// display the result
console.log(`${celsius} degree celsius is equal to ${fahrenheit} degree fahrenheit.`);


//take input from the users
let a = prompt('Enter the first variable: ');
let b = prompt('Enter the second variable: ');

//create a temporary variable
let temp;

//swap variables
temp = a;
a = b;
b = temp;

console.log(`The value of a after swapping: ${a}`);
console.log(`The value of b after swapping: ${b}`);

// program to check if the number is even or odd
// take input from the user
const number = prompt("Enter a number: ");

//check if the number is even
if(number % 2 == 0) {
    console.log("The number is even.");
}

// if the number is odd
else {
    console.log("The number is odd.");
}

<title>Quadratic Equation</title>
 
 
<script type="text/javascript">
<!--
var a = prompt("Enter value of a","1");
var b = prompt("Enter value of b","4");
var c = prompt("Enter value of c","4");
 
var root_part = Math.sqrt(b * b - 4 * a * c);
var denom = 2 * a;
 
var root1 = ( -b + root_part ) / denom;
var root2 = ( -b - root_part ) / denom;
 
document.write("1st root: "+root1+"<br />");
document.write("2nd root: "+root2+"<br />");
 
// -->
</script>
console.log('basic programs ended');
// factorial without using function//

const num = prompt("enter a number");
  if (num < 0) {
        return -1;
  else if (num == 0) 
      return 1;
  else {
      return (num * factorialize(num - 1));
  }
  }

// programming with loops//
square of n
let squaredNumber = Math.pow(5,2);
console.log("5*5 = ",squaredNumber);

// tabl//
num => prompt('enter a no'){
    if(num>14||num>1)
        return console.log('error');
    else times =0;
    while num>=2;
        num/=2;
    times*=num
    console.log('times);
/// program to display the sum of natural numbers

// take input from the user
const number = parseInt(prompt('Enter a positive integer: '));

let sum = 0;

// looping from i = 1 to number
// in each iteration, i is increased by 1
for (let i = 1; i <= number; i++) {
    sum += i;
}

console.log('The sum of natural numbers:', sum);
//
// program to generate fibonacci series up to n terms

// take input from the user
const number = parseInt(prompt('Enter the number of terms: '));
let n1 = 0, n2 = 1, nextTerm;

console.log('Fibonacci Series:');

for (let i = 1; i <= number; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}
