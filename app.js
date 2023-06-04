//Qn-1 create a function to add two number

function addition(num1, num2) {
  return num1 + num2;
}

console.log(addition(-3, -10));

console.log(addition(3, 8));

//Qn-2 converting hours into seconds

function hoursIntoSeconds(hours) {
  return hours * 60 * 60;
}

console.log(hoursIntoSeconds(2));
console.log(hoursIntoSeconds(10));
console.log(hoursIntoSeconds(24));

//Qn-3 calculate the perimeter of a rectangle

function calcPerimeter(length, breath) {
  return length * 2 + breath * 2;
}

console.log(calcPerimeter(6, 7));
console.log(calcPerimeter(20, 10));
console.log(calcPerimeter(2, 9));

//Qn-4 calculate the area of a triangle

function calcTriangleArea(base, height) {
  return 0.5 * base * height;
}

console.log(calcTriangleArea(3, 2));
console.log(calcTriangleArea(10, 10));
console.log(calcTriangleArea(20, 20));

//Qn -5 extend a string

function appendFrontend(name) {
  return name + "Frontend";
}
console.log(appendFrontend("Apple"));
console.log(appendFrontend("Bannana"));
console.log(appendFrontend("Orange"));

//Qn-6 greater than 100 ?

function sumGreaterThan100(val1, val2) {
  if (val1 + val2 > 100) {
    return true;
  } else {
    return false;
  }
}

console.log(sumGreaterThan100(20, 10));
console.log(sumGreaterThan100(50, 60));
console.log(sumGreaterThan100(100, -50));

//Qn-7 less than or equal to zero?

function lessThanOrEqualToZero(val) {
  return val <= 0;
}

console.log(lessThanOrEqualToZero(3));
console.log(lessThanOrEqualToZero(0));
console.log(lessThanOrEqualToZero(-2));

//asQn-8 Return opposite boolean

function oppositeBoolean(bool) {
  return !bool;
}

console.log(oppositeBoolean(true));
console.log(oppositeBoolean(false));

//Qn-9 is not the number zero

function isNotZero(nums) {
  return nums !== 0;
}

console.log(isNotZero(5));
console.log(isNotZero(0));
console.log(isNotZero(null));

//Qn-10 calculate the remainder

function calcRemainder(nums1, nums2) {
  return nums1 % nums2;
}

console.log(calcRemainder(4, 2));
console.log(calcRemainder(7, 8));
console.log(calcRemainder(9, 8));

// Qn-11 is the number odd ?

function isOdd(numss) {
  return numss % 2 !== 0;
}

console.log(isOdd(1));
console.log(isOdd(2));
console.log(isOdd(3));
