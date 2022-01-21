// Fill inside of the optimizeFunction function
function doExpensiveTask(input) {
const result = 2 * input
console.log("Doing expensive task...:", result);
return result;
}

//closures
function optimizeFunction(func) {
    let newObj={}; // create a new empty object to hold old data
    return (arg)=>{
        let argsKey=JSON.stringify(arg); //save arguments key to compare with old one
        if(!newObj[argsKey]){ //if newobj is empty or same with new argument
            newObj={}; //Forget the old one
            func(arg); //call the doExpensiveTask func
            newObj[argsKey]=func; //fill the obj with new arg
        }else{ //if incoming argument is totally new
            return console.log("Same input, no need to calculate: "+ arg*2);
        }
    }
/*
* Only write code in this function.
* This function returns an optimized version of the func
*/
}
// optimizedFunc shouldn't execute the expensive task if new input is same as the previous one
const optimizedFunc = optimizeFunction(doExpensiveTask);
optimizedFunc(2); // Should print: Doing expensive task...: 4
optimizedFunc(2); // Should print: Same input, no need to calculate: 4
optimizedFunc(4); // Should print: Doing expensive task...: 8
optimizedFunc(4); // Should print: Same input, no need to calculate: 8
optimizedFunc(2); // Should print ((Forgets the old one)): Doing expensive task...: 4