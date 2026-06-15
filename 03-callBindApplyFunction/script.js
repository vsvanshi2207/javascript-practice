function abc(){
    return this;
}

document.getElementById("demo").innerHTML = abc();

const person = {
    firstName: "Vanshika",
    age: 25
}

// example of call method
document.getElementById("demo").innerHTML = abc.call(person);