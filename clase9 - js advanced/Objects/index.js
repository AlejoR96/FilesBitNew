let person = {
    name: "Alejandro",
    age: 25,
    height: 1.70,
    class: {
        math: "401",
        science: "200"
    },
    books: [1,2,3]
}

person.name = "Mariana"
delete person.height

//funciones

function tipeFunction() {
    
}



const keys = Object.keys(person);
console.log(keys);

keys.map(
    (key) =>{
        return key + "something"
    }
)
console.log(keys);


// Retos 

