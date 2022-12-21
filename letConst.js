/*
Are let and const variables hoisted ?
Yes, they are but are in a temopral dead zone.

TEMPORAL DEAD ZONE :- the time from when the variables of let are hoisted and till the time it is initialised some value.
When the variables are in temporal dead zone, they can not be accessed. they give reference error
*/

console.log(b)      //undefied but the varibale is already allocated memory in the local scope and are attached to the global object
//console.log(a)    REFERENCE ERROR
//cannot access a before initialisation , in this case, a is also allocated memory in the local space but is not attached to a global object and are given separate space.
//the memory space allocated of a cannot be accessed before we have assigned some value to the variable. or atleast initialised.
//console.log(c)       //not defined.

let a =10
var b =100

//let a = 20        SYNTAX ERROR
//var a = 30        SYNTAX ERROR 
//but var b = 50 gives no error

/*
let a;
a=90;

above code gives no error but

const t;
t=80;
SYNTAX ERROR
gives error MISSING INITIALISER IN CONST DECLERATION


const t = 90;
t =9;
gives a TypeError


try to use const everywhere possible. then let and then at last var.
to avoid the temporal dead zone error , we need to initialise the variables at the top of the program
*/
