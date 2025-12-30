// -------------------- ARITHMETIC OPERATORS --------------------

// Adds two numbers
console.log(1 + 1); 
// Output: 2

// Subtracts second number from first
console.log(5 - 2); 
// Output: 3

// Multiplies two numbers
console.log(3 * 4); 
// Output: 12

// Divides first number by second
console.log(10 / 2); 
// Output: 5

// Modulus (%) returns the remainder of division
console.log(10 % 3);  
// Output: 1 (10 divided by 3 leaves remainder 1)

// Exponentiation (power operator)
console.log(2 ** 3);  
// Output: 8 (2 × 2 × 2)


// -------------------- COMPARISON OPERATORS --------------------

// Checks if left value is greater than right
console.log(5 > 3);  
// Output: true

// Checks if left value is less than right
console.log(2 < 4);  
// Output: true

// Checks if left value is greater than or equal to right
console.log(5 >= 5);  
// Output: true

// Checks if left value is less than or equal to right
console.log(3 <= 2);  
// Output: false


// -------------------- EQUALITY OPERATORS --------------------

// == checks only VALUE (type conversion allowed)
console.log(4 == '4');  
// Output: true

// === checks VALUE + TYPE (no type conversion)
console.log(4 === 4);  
// Output: true

// != checks value is not equal
console.log(5 != 3);  
// Output: true

// !== checks value and type are not equal
console.log(5 !== '5');  
// Output: true


// -------------------- LOGICAL OPERATORS --------------------

// Logical AND (&&): true only if both conditions are true
console.log(true && false);  
// Output: false

// Logical OR (||): true if any one condition is true
console.log(true || false);  
// Output: true

// Logical NOT (!): reverses the boolean value
console.log(!true);  
// Output: false


// -------------------- ASSIGNMENT OPERATORS --------------------

let x = 10;   // Variable initialization

// += adds value to the existing value of x
x += 5;       
// x = x + 5 → 10 + 5
console.log(x);  
// Output: 15

// -= subtracts value from existing value of x
x -= 3;       
// x = x - 3 → 15 - 3
console.log(x);  
// Output: 12

// *= multiplies existing value of x
x *= 2;       
// x = x * 2 → 12 × 2
console.log(x);  
// Output: 24


// -------------------- STRING COMPARISON --------------------

let str  = 'hello';
let str1 = 'hii';

// Compares string values
console.log(str == str1);  
// Output: false (because values are different)


// -------------------- SHORT REVISION NOTES --------------------

// ==  → compares only value
// === → compares value + data type
