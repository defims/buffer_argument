var buffer_argument = require("./index")
var args = null;
var f; buffer_argument(function() {
    args = [].slice.call(arguments);
}, function(v) { f = v })

f()
console.log(
    JSON.stringify(args) === "[]" 
    ? "[pass]" : "[fail]",
    'f() == f()'
)
f(undefined, 1)
console.log(
    JSON.stringify(args) === "[null,1]" 
    ? "[pass]" : "[fail]",
    'f(undefined, 1) == f(undefined, 1)'
)
f(1)
console.log(
    JSON.stringify(args) === "[1,1]" 
    ? "[pass]" : "[fail]",
    'f(1) == f(1, 1)'
)
f(3)
console.log(
    JSON.stringify(args) === "[3,1]" 
    ? "[pass]" : "[fail]",
    'f(3) == f(3, 1)'
)
