
function greet(){
    return this;
}

document.getElementById("demo").innerHTML = greet();

const person = {
    firstName: "Vanshika",
    age: 25,
    // this keyword in a regular function inside an object - this will refer the object that owns the method
    getInfo: function (){
        return this;
    }
}

document.getElementById("demo").innerHTML = person.getInfo();

// this keyword in a arrow function
const student = {
    firstName:"Ishu",
    lastName:"gupta",
    getInfo: ()=>{
        return this;
    }
}

document.getElementById("demo").innerHTML = student.getInfo();
