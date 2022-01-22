4 + 2
let x = 2;
let y = 3;
let z = x + y;
let a = x * y;
x += 1;
x++;
++x;
let s1 = "hi my name ";
let s2 = "TJ";
let s3 = parseInt(365);
// Comparison ===, !=, <=, >=
// And/OR && ||
// Math + - * /
// Comparison and change type to check == (for example, "3" == 3 will change the type to compare)
// Just compare, no changes ===
// Can't compare arrays, have to loop through each value
// == will change 1 to True and 0 to False if comparing with booleans
// Javascript prefers changing things to numbers, unless it is concatination
// If concatination with a string, all others will turn into strings
//
// Javascript is case sensitive, "hello" != "Hello"
// If you set x = [1, 2, 3] and set y = x, y will refer to x, NOT copy the array


// if/else statements need parenthesis as well as brackets if longer
if (2 < 3) return true;

if (5 > 6) {
    print("Not true, try again");
    return false;
}