/*
This program is explaining the lexical environment of the scope chain of a function and variable
The lexical environment is the local memory along with the lexical memory of its parent.

Lexical means in sequence.
In this example, the c(), is lexically inside of the function a, and the lexical parent of a is global execution space or the global scope.
scope chain is finding a variable inside the local memory with the help of lexical memory. (the chain of lexical memory)
*/

function a(){
    // var b = 10; this makes the console.log (b) inside the function c give off the output 10.
    c();
    //but if we initialise var b= 10 here, the console log in line 16, gives undefined value since it is initiated before the
    //function is already called.
    function c(){
        console.log(b);
    }
}
//console.log(b) here gives b as undefined unkile the console log above.
var b = 10;         //this initialisation after the function c() is called, gives the value of b =10.
a();

/*
Ouput of this function is
10

Even when we remove the function c , the ouput remains 10.
This is because the inner function has access to its outer functions.

*/