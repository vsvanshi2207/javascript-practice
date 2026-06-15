
document.getElementById("demo").innerHTML = abc();

const person = {
    firstName: "Vanshika",
    age: 25
}

function abc(){
    return this.name;
}

// example of call method
document.getElementById("demo").innerHTML = abc.call(person);