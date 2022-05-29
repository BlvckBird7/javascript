// alert("Get away")
/*to output JS
alert
console.log()
document.write
document.getElementById()
etc*/

// how not to name a variable

// 1. do not start a variable with number or special xter e.g 2boys="david" or @boy="david"
// 2 hyphen between a variable e.g my-boy="david"

// how to name a variable

// myboy="david"
// BOY='david'
// my_boy="david"
// myboy2="david"
// my2boy="david"
// myBoy="david" -camelcase, the most accepted way

// how to identify variable

// let
// variable
// const

let boy="david"
console.log(boy)
document.write(boy)
document.getElementById("las").innerHTML=boy
let girl="Toyin"
document.getElementById("lasop").innerHTML=girl

let club="chelsea"
document.getElementById("con").innerHTML=club

var league="epl"
document.getElementById("con").innerHTML=league
var league="epl"
document.getElementById("para").innerHTML=league

const sub="maths"
console.log(sub)

// const sub="maths"
// document.write(sub)

// Data type

// String
// Number
// Boolean
// integer
// Float
// BigInt
// undefined
// null
// Array

// let animal='what\'s going on' 

// or 

let animal="what's going on"
document.getElementById("lasop").innerHTML="i can print something else in a string"
document.getElementById("las").innerHTML=animal

// string concatenation

// let footballclub="chelsea"
// let playerfirstname="Timo"
// let playerlastname="werner"
// let play=playerfirstname+" " +playerlastname+" "+"wears jersey number 11 for"+" "+footballclub
// document.getElementById("con").innerHTML=play

// let firstname="Louis"
// let lastname="Hamilton"
// let car="Marcedes Benz Car"
// let comp="formula 1 race"
// let story=firstname+" "+lastname+" "+ "drives"+" "+car+" "+"in"+" "+comp
// document.getElementById("para").innerHTML=story

// template literals (another method for concatenation)

let footballclub="chelsea"
let playerfirstname="Timo"
let playerlastname="werner"
let play=`${playerfirstname} ${playerlastname} wears jersey number 11 for ${footballclub}`
document.getElementById("con").innerHTML=play

let firstname="Louis"
let lastname="Hamilton"
let car="Marcedes Benz Car"
let comp="formula 1 race"
let story=`${firstname} ${lastname} drives ${car} in ${comp}`
document.getElementById("para").innerHTML=story

let playername="Rooney"
let con="retired"
let whatsup=`${playername} is ${con}`
console.log(whatsup)
console.log(playername)

let fruits=["oranges","mangoes","pears"];
console.log(fruits)
console.log(fruits[2])
fruits[3] = "grapes";
console.log(fruits)

const person = {
    age: 22,
    gender: "male",
    status: "single",
    state: "Oyo",
    Hobbies: ["cooking","dancing","running"],
    school: {
        primary:"nonsense",
        secondary:"Rubbish",
        Tertiary: "ASUU",
    }
}

const tell=`my guy who is ${person.age} hails from ${person.state} and his hobbies are ${person.Hobbies} but his ssce is ${person.school.secondary}`
console.log(tell);

console.log(person.school.Tertiary)
console.log(person.status)

