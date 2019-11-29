
var someVarOutOfTheFunc = 99;
var someLetOutOfTheFunc = 89;

function someFunction() {
    for (var i = 0; i < 5; i++){
        var someVarFromFor = 59;
        let someLetFromFor = 49;
    }
    var someVarFromFunc = 69;
    console.log('Var variable from for: ', someVarFromFor);
    // console.log('Let variable from for: ', someLetFromFor); <-- ReferenceError: someLetVariable is not defined
    console.log('Var variable from outside of the function: ', someVarOutOfTheFunc);
    
}

someFunction();
// console.log('Var created inside the function: ', someVarFromFunc); <-- ReferenceError: someVarFromFunc is not defined