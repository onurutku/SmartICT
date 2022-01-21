/*
* Fill inside of the makeFunctionWithFixedThis function
* You can use console.log for debugging purposes
* But, before submitting your answer you should remove any debug statements,
* only console.log statement should be in the printName method
*/
class Person {
constructor(firstName) {
this.firstName = firstName
}
printName() {
// This should be the only console.log statement in the submitted work
console.log(this.firstName)
}
}

const personA = new Person('AAA')
const personB = new Person('BBB')

// See that these statements doesn't print correct firstNames
setTimeout(personA.printName, 0)
setTimeout(personB.printName, 0)

function makeFunctionWithFixedThis(func, objToBeThis) {
/*
* only write code in this function
* This function returns a function with fixed 'this'
*/

//Explanation
//1. first of all i've checked Settimeout function that you want me to see they are not working, after that,
//2. i tought that its all about scopes.because Settimeout is a seperate function and it has its own scope.
//3. i've checked the arguments as you can see below.
// console.log(func); // the func will call
// console.log(objToBeThis); //objects we bind
//4. After that i decided to bind new "this" from objToBeThis with bind method.

//Solution
return func.bind(objToBeThis);

}
const fixedPersonAPrint = makeFunctionWithFixedThis(personA.printName, personA)
const fixedPersonBPrint = makeFunctionWithFixedThis(personB.printName, personB)
// After implementing body of makeFunctionWithFixedThis,
// these setTimeout calls should print the firstNames correctly

setTimeout(fixedPersonAPrint, 0)
setTimeout(fixedPersonBPrint, 0)
