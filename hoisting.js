fun1();             //output - Hey Esha!
console.log(x);     //undefined
//these two lines work like this beccause of hoisting.

console.log(fun1);      //output is the entire function as we discussed below (line 17-18)

var x= 9;           //if we remove this line , console.log(x) gives error "not defined"

//through this we can see that undefined and not defined are not same.

function fun1 (){
    console.log("Hey Esha!");
}
/* when a function is executed like above , it gives the output that we desired (i.e. output or the entire function code, according to our console.log statement).
but when the above function is made arrow function 
var fun1 = () =>{}

or with other syntax such as 
var fun1 = function () {}

it starts behaving like a variable only.
*/
// fun1();          output - Hey Esha!
// console.log(x);  output - 9
//console.log(fun1);      output - function fun1 (){
//                                   console.log("Hey Esha!"); } i.e. the ouput is the entire code of the function
