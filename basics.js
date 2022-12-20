/*

Everything in javascript happens inside an execution context.

Execution context is divided in two parts :-
1.Memory or variable environment :- all the variables are stored in key value pairs
2.Code component or thread of execution :- thread in which the entire code is executed, (one ine at a time)

JAVASCRIPT IS A SYNCHRONOUS SINGLE THREADED language.
-single threaded :- one command at a time 
-synchronous single threaded :- one command at a time in a specific order. (can only move to the second liine once the first line has completed)

In memory allocation phase ,
for any piece of code, the js skims through the entire program and assigns the value to all the variables one by one as undefined (at first)
also the functions in the memory are provided with the entire code of the function.

In code execution phase, 
The variables get their value in place of undefined.
*/