function filterOutOdds() {
	var nums = Array.prototype.slice.call(arguments);
	return nums.filter(function(num) {
		return num % 2 === 0;
	});
}

// Refactor it to use the rest operator & an arrow function:
/* Write an ES2015 Version */

const filterOutOdds2 = (...nums) => nums.filter((num) => num % 2 === 0);

// findMin
// Write a function called findMin that accepts a variable number of arguments and returns the smallest argument.
// Make sure to do this using the rest and spread operators.

const findMin = (...nums) => Math.min(...nums);
findMin(1, 4, 12, -3); // -3
findMin(1, -1); // -1
findMin(3, 1); // 1

// mergeObjects
// Write a function called mergeObjects that accepts two objects and returns a new object
// which contains all the keys and values of the first object and second object.

const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });
mergeObjects({ a: 1, b: 2 }, { c: 3, d: 4 }); // {a:1, b:2, c:3, d:4}

// doubleAndReturnArgs
// Write a function called doubleAndReturnArgs which accepts an array and
// a variable number of arguments. The function should return a new array
// with the original array values and all of additional arguments doubled.

const doubleAndReturnArgs = (arr, ...args) => [ ...arr, ...args.map((val) => val * 2) ];
doubleAndReturnArgs([ 1, 2, 3 ], 4, 4); // [1,2,3,8,8]
doubleAndReturnArgs([ 2 ], 10, 4); // [2, 20, 8]

// Slice and Dice!
// For this section, write the following functions using rest, spread and refactor these functions to be arrow functions!
// Make sure that you are always returning a new array or object and not modifying the existing inputs.

/** remove a random element in the items array
and return a new array without that item. */

const removeRandom = (items) => {
	// generate a random index number
	const idx = Math.floor(Math.random() * items.length);
	return [ ...items.slice(0, idx), ...items.slice(idx + 1) ];
};
// console.log(removeRandom([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));

/** Return a new array with every item in array1 and array2. */

const extend = (array1, array2) => [ ...array1, ...array2 ];
// console.log(extend(["a", "b", "c"], [1, 3, 5]));

/** Return a new object with all the keys and values
from obj and a new key/value pair */

const addKeyVal = (obj, key, val) => {
	const newObj = { ...obj };
	newObj[key] = val;
	return newObj;
};
// const tea = { type: "oolong", name: "winter sprout", origin: "taiwan" };
//console.log("new obj: ", addKeyVal(tea, "price", 22.99));

// OPTION 2 (uses an object enhancement you'll see in the next unit)
// return { ...obj, [key]: val };

/** Return a new object with a key removed. */

const removeKey = (obj, key) => {
	const newObj = { ...obj };
	delete newObj[key];
	return newObj;
};
// const tea = { type: "oolong", name: "winter sprout", origin: "taiwan" };
// console.log(removeKey(tea, "type"));

// OPTION 2 (uses an object enhancement you'll see in the next unit)
// ({ [key]: undefined, ...obj } = obj);
// return obj;

/** Combine two objects and return a new object. */

const combine = (obj1, obj2) => ({ ...obj1, ...obj2 });
// const tea = { type: "oolong", name: "winter sprout", origin: "taiwan" };
// const teaData = { steepTime: "30s", brewTemp: 175 };
// console.log(combine(tea, teaData));

/** Return a new object with a modified key and value. */

const update = (obj, key, val) => {
	const newObj = { ...obj };
	newObj[key] = val;
	return newObj;
};
// const tea = { type: "oolong", name: "winter sprout", origin: "taiwan" };
// console.log(update(tea, "name", "fancy name"));

// OPTION 2 this uses an object enhancement you'll see in the next unit)
// return { ...obj, [key]: val };
