// function declaration

function sayHello(message) {
    console.log(message);
}

// named function expression

const add = function add(num1, num2){
    return num1+num2;
};

// anonymous functione expression
const sub = function(num1, num2){
    if(num1>num2)   
        return num1-num2;
    else
        return num2-num1;
};

// arrow function
const mul = (x,y)=> {
    return x*y;
}
