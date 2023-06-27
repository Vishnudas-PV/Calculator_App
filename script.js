// Displaying Numbers
function displayNumber(num){
    console.log(num);
    result.value += num;
}

// clear text box
function clearbox(){
    result.value=" "
}

// evaluate expression
function evaluateExpression(){
exp=result.value; // exp=1+2
output=eval(exp)  // output=eval(1+2)= 3
result.value=output;

//method 2
// result.value=(eval(result.value))
}

// remove last item from  text box
function removalLast(){
    currentItem=result.value;
    result.value=currentItem.slice(0,-1);
}


// mainly 4 functions

// 1. displayNumber()
// 2. clearbox()
// 3.evaluateExpression()
// 4.removalLast()