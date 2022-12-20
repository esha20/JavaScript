var x = 1 
a();
b();
console.log(x);


function a(){
    var x = 10;
    console.log(x)
}

function b(){
    var x = 100;
    console.log(x)
}

//output :-
/*
10
100
1

why ?
because var is block scoped and when the functions a and b are called the value of x is modified before console log
so the value of x for both the functions are the values assigned inside of the function whereas , since the var x was
assigned value 1 globally, when we console log it gives 1(outside of any function when x was reassigned)
*/