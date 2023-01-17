// myEach(collection, callback)
// Takes 2 arguments: either an object or array and a callback function
// Returns the original collection 
// Iterates over the collection of elements, passes data to the callback function. Calls alert with each element passed. Calls alert on object values. Returns the unmodified collection possibly as an alert.

function myEach(collection, callback) {
    for (let accessor in collection) {
        callback(collection[accessor])
    }

    return collection;
}

// myMap(collection, callback)
// Takes 2 arguments: either an object or array and a callback function
// Returns a new array
// Map each value of the first argument through the callback function to return a new array without modifying the original, but modifying the object into an array. This sounds like creating a copy.
// Object.entries() static method returns an array of a given object's own enumerable string-keyed property key-value pairs
function myMap(collection, callback) {
    let newArray = [];

    for (let accessor in collection) {
        newArray.push(callback(collection[accessor]));
    }
    return newArray;
}

// myReduce(collection, callback, acc)
// Takes 2 (optionally 3) argumentsL object or array, callback function, starting value for accumulator like the actual reduce() method so that JS execute adds/subtracts from the value 0, not an object that would return undefined because it’s not an integer
// Return a single value if found
// Iterates through the first argument, adding each element of the object value or array to the next and sum all elements into a single value. We do this by starting with an accumulator with the assigned value of 0, and using the callback function to add each element to the next, and reassign that sum to the accumulator.
// The callback is passed three arguments: the current value of acc, the current element/value in our iteration per iteration, and a reference to the entire collection.

function myReduce(collection, callback, acc) {
    let newArray = Object.values(collection);
    let copy = [...newArray];
    acc = acc || copy.shift();

    for (let accessor in copy) {
        acc = callback(acc, copy[accessor], copy);
    }
    return acc;
}

// myFind(collection, predicate)
// Takes 2 arguments: object or array, callback function that returns true or false (aka predicate)
// Returns a single value
// Iterates through the first argument until an element of the object or array passes a truth test. Once the callback function finds a truthy element it returns that element, else returns undefined.

function myFind(collection, predicate) {
    for (let accessor in collection) {
        let element = collection[accessor];
        if(predicate(element)) {
            return element;
        }
    }
}

// myFilter(collection, predicate)
// Takes 2 arguments: object or array, callback function that returns true or false (aka predicate)
// Returns an array
// Iterates through each value in the object or array. If it’s an object, transform into an array, returning an array of all values that pass a truth test. If no matching values are found, return an empty array.

function myFilter(collection, predicate){
    let newArray = Object.values(collection);
    let truthyArray = [];

    for (let accessor in newArray) {
        let element = newArray[accessor];

        if (predicate(element)) {
            truthyArray.push(element)
        }
    }

    return truthyArray;
}

// mySize(collection)
// Takes 1 argument: an object or array
// Returns an integer
// Counts the number of indices in an array or number of keys in an object and returns the count.
function mySize(collection){
    let newArray = Object.values(collection);
    return newArray.length;
}

// myFirst(array, [n])
// Takes 1 arguments: array, Optional: integer
// Returns an single element OR an array
// Returns the first element of an array. Optional: Passing n will return the first n elements of the array.
function myFirst(collection, n = 1) {
    let count = 1;
    let array = [];
    for (let accessor in collection) {
        if (count <=n) {
            array.push(collection[accessor]);
            count++
        }
    }

    return array.length > 1 ? array : array[0]
}

// myLast(array, [n])
// Takes 1 arguments: array, Optional: integer
// Returns an single element OR an array
// Returns the last element of an array. Passing n will return the last n elements of the array.
function myLast(collection, n = 1) {
    let startingIndex = collection.length - n;
    console.log(collection);
    console.log(n);
    console.log(collection[startingIndex]);

    return n > 1 ? collection.slice(startingIndex, collection.length) : collection[startingIndex];
}
// myKeys
// myKeys(object)
// Parameter(s):
// an object
// Return value:
// An array
// Behavior:
// Retrieve all the names of the object's enumerable properties.
function myKeys (object) {
    return Object.keys(object);
}

// myValues
// myValues(object)
// Parameter(s):
// an object
// Return value:
// an array
// Behavior:
// Return all of the values of the object's properties
function myValues (object) {
    return Object.values(object);
}