//1)Write a JAVASCRIPT Program to print a greeting message using with argument no return type function when call a function without argument at that time print message Good Morning.

document.write("<h3>1.Function without argument and no return type</h3>");
function greeting(message) {
    if (message) {
        console.log(message);
        document.write(message);
    } else {
        console.log("Good Morning");
        document.write("Good Morning");
    }
}
greeting();

//2)Write a JAVASCRIPT Program to find Circle area (area = pi*r*r) using return type with argument function.

document.write("<h3>2.Function with argumnet and return type</h3>");
function areaCircle(redius) {
    let pi = 3.14;
    let area = pi * redius * redius;
    return area;
}
console.log("Area of Circle: " + areaCircle(2));
document.write("Area of Circle: " + areaCircle(2));

//3)Write a JAVASCRIPT Program to find Triangle area ( area = (l*h)/2 ) using return type with argument function.

document.write("<h3>3. Function with argument with return type</h3>");
function areaTriangle(l, h) {
    let area = (l * h) / 2;
    return area;
}
console.log("Area of Triangle: " + areaTriangle(8, 12));
document.write("Area of Triangle: " + areaTriangle(8, 12));

//4)Write a JAVASCRIPT Program to find Rectangle area = l * h using return type with argument function.

document.write("<h3>3. Function with argument with return type</h3>");
function areaRectangle(l, h) {
    let area = l * h;
    return area;
}
console.log("Area of Triangle: " + areaRectangle(4, 6));
document.write("Area of Triangle: " + areaRectangle(4, 6));

//5)Write a JAVASCRIPT Program to find ans of ((b*b)(4*a*c))/(2*a) using return type with argument function.

document.write("<h3>3. Function with argument with return type</h3>");
function value(a, b, c) {
    let result = (b * b)(4 * a * c) / (2 * a);
    return result;
}
console.log("Find the value: " + value(5, 9, 15));
document.write("Find the value: " + value(5, 9, 15));

//6) Write a JAVASCRIPT Program to find ans of (a*a) + (2*a*b) + (b*b) using return type with argument function

document.write("<h3>3. Function with argument with return type</h3>");
function findValue(a, b, c) {
    let result = (a * a) + (2 * a * b) + (b * b);
    return result;
}
console.log("Find the value: " + findValue(3, 12, 16));
document.write("Find the value: " + findValue(3, 12, 16));

//7)Write a JAVASCRIPT Program to convert Fahrenheit to Celsius (c = (f-32)/1.8 ) using return type with argument function

document.write("<h3>3. Function with argument with return type</h3>");
function celsius(f) {
    let c = (f - 32) / 1.8
    return c;
}
console.log("Convert Fahrenheit to Celsius " + celsius(14));
document.write("Convert Fahrenheit to Celsius " + celsius(14));

//8)Write a JAVASCRIPT Program to Convert Celsius to Fahrenheit (f= (c*1.8)+32 ) using return type with argument function

document.write("<h3>3. Function with argument with return type</h3>");
function fahrenheit(c) {
    let f= (c*1.8)+32
    return f;
}
console.log("Convert Celsius to Fahrenheit: " + fahrenheit(37));
document.write("Convert Celsius to Fahrenheit: " + fahrenheit(37));

//9)Write a JAVASCRIPT Program to find if a given number is odd or even using with argument no return type.

document.write("<h3>Function with argument no return type</h3>");

function checkOddEven(num){
    if(num%2 == 0){
        console.log(num + "Num is Even");
        document.write(num + "Num is Even");
    }else{
        console.log(num + "Num is Odd");
        document.write(num + "Num is Odd");
    }
}

checkOddEven(10);

//10)Write a JAVASCRIPT Program to swap a value without third variable using with argument no return type

document.write("<h3>Function with argument no return type</h3>");
function swapValue(a,b){
    console.log("Before Swapping : a = " + a + ", b = " + b + "<br>");
    document.write("Before Swapping : a = " + a + ", b = " + b);
    a = a + b;
    b = a - b;
    a = b - a ;
    console.log("Before Swapping : a = " + a + ", b = " + b);
    document.write("Before Swapping : a = " + a + ", b = " + b);
}

swapValue(4,8);
