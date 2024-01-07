//nivel dificultad facil
let myName = "Cristian"
console.log(myName);

let myLastName = "Benavides"
let myAge = 25
let myPet = "Donato"
let myPetAge = 3

let nombreCompleto = (myName + ' ' + myLastName)
console.log(nombreCompleto);

let presentationText = (`me llamo ${myName} mi apellido es ${myLastName} tengo ${25} años mi gato se llama ${myPet} y tiene ${myPetAge} años`)
console.log(presentationText);

//nivel dificultad medio
let sumAges = (myAge + myPetAge)
let restAges = (myAge - myPetAge)
let produdAges = (myAge * myPetAge)
let divisionAges = (myAge / myPetAge)

console.log(sumAges);

let estudiante = {
    cabello: "rubio",
    estatura: "alto",
    ojos: "marrones",
    nacionalidad: "argentina",
    genero: "hombre"
}

console.table(estudiante);

console.log(estudiante.cabello);
console.log(estudiante.estatura);
console.log(estudiante.ojos);
console.log(estudiante.nacionalidad);
console.log(estudiante.genero);


let pet = {
    genero: "macho",
    pelaje: "blanco",
    cuerpo: "gordito",
    cola: "ondulada",
    edad: 4
}
console.log("----------");

let frutas = ["banana", "manzana", "naranja", "pomelo", "melon"]

console.log(frutas);

console.log("----------");

console.log(frutas[0]);
console.log(frutas[1]);
console.log(frutas[2]);
console.log(frutas[3]);
console.log(frutas[4]);

//nivel alto
// let iamAdult = Number(prompt("ingrese su edad"))
// if (iamAdult >= 18) {
//     console.log("si podes pasar");
// }else {console.log("no podes pasar crack");}

const numeros = [1, 2, 3, 4, 5]
console.log(numeros);

let familia = [
    {
        nombre: "nicol",
        edad: 23,
        genero: "femenino",
        cabello: "oscuro",
        ojos: "marrones"

    },
    {
        nombre: "juan",
        edad: 22,
        genero: "masculino",
        cabello: "oscuro",
        ojos: "marrones"

    },
    {
        nombre: "celeste",
        edad: 30,
        genero: "femenino",
        cabello: "oscuro",
        ojos: "azules",

    },
    {
        nombre: "fernando",
        edad: 45,
        genero: "masculino",
        cabello: "oscuro",
        ojos: "verdes",

    },
    {
        nombre: "ivan",
        edad: 25,
        genero: "masculino",
        cabello: "rubio",
        ojos: "marrones",

    }


]
console.log(familia);

console.log(familia[0]);
console.log(familia[1]);
console.log(familia[2]);
console.log(familia[3]);
console.log(familia[4]);


let ramdomText = (`en la verdu me compre una ${frutas[1]} y me lleve ${numeros[3]} y se la regale a ${familia[4].nombre}`)

console.log(ramdomText);

//condicionales

let numero1 = 8
let numero2 = 7

if (numero1>numero2) {
    console.log(numero1);
}else {console.log(numero2);}