
// // let playerFirstName='timo'
// // let PlayerLastName='werner'
// // // string method

// let marriage='divorce'
// let state=typeof(marriage)
// console.log(state);

// let num=23
// let nums=typeof(num)
// document.getElementById('lasop').innerHTML=nums

// let m=true
// let n=typeof(m)
// console.log(n)

// let toyin=typeof(a)
// console.log(toyin)
// document.getElementById('lasop').innerHTML='adebayor came late <br> but i know he will catch up'


// // finding the the length of a string 
// school='lagos school of programming'
// let call=school.length
// console.log(call)


// // let user=prompt('what is your name?')
// // alert('my name is' + user)
// // document.getElementById('las').innerHTML='my name is' + user
// // console.log('my name is ' + user)

// // age=prompt('how old are you?')

// let char=prompt('tell us about you')
// let message='you have written ' + char +',you have ' + (150-char.length) + ' characters remaining'
// document.getElementById('las').innerHTML=message 

// // retrieving a character positon 

// let x='programming'
// let y=x[4]
// console.log(y)
// // retrieving a word from a string 
// let word='where are they? where did they go?'
// let str= word.indexOf('they')
// let find=x.indexOf('they')
// console.log(find)
// console.log(str)

// let inner=word.lastIndexOf('they')
// console.log(inner)

// // the search method
// let data=word.search('they')
// console.log('data')

// // slice method
// let fox='the quick brown fox,jumps over the lazy dog'
// let dog=fox.slice(10,19)
// // to count from the back
// let back=fox.slice(-9,-1)
// console.log(dog)

// // substring method
// let app=fox.substring(10,19)
// console.log(app)

// // substr method
// cont=fox.substr(10,12)
// console.log(cont)
// dog=fox.slice(10)
// console.log(dog)

// // the replacement method
// let feelings='i love lasop,lasop is nice'
// let place=feelings.replace('lasop','everyone')
// console.log(place)


// let reg=feelings.replace(/lasop/g,'everyone')

// // convert strings to upper and lower cases
// let ali='Disturbance'
// console.log(ali)
// let tayo=ali.toUpperCase()
// console.log(tayo)
// let hmmm=ali.toLowerCase()
// console.log(hmmm)

// // concat
// let dummy='Lorem'
// let add=dummy.concat(' ','ipsum')
// console.log(add)


// let NAME='David'
// let NAMES=NAME.concat(' ','Shuaib')
// console.log(NAMES)

// // includes method
// let prophet='muhammed'
// let ask=prophet.includes('g')
// let asks=prophet.includes('a')
// console.log(ask)
// console.log(asks)

// // Number datatype
// let c=20;
// let d=2
// console.log(c)
// let e='10'- 2
// console.log(e)
// let f='10' * 2
// console.log(f)
// let g='10' + 2
// console.log(g)

// // // javascript operands
// console.log(40 + 2)
// console.log(40 -2)
// console.log(40 * 2)
// console.log(40 / 2)
// console.log(40 / 3)
// console.log(40**3)
// console.log(10%3)

// // incremental method
// let likes=7
// likes ++
// likes ++
// likes --
// likes +=2
// likes +=100
// likes -=50
// likes *=2
// likes /=10
// likes **=2
// likes %=2
// console.log(likes)

// // comparison operators
// let k='5'
// console.log(k=5) // assignment notation
// console.log('5'==5) //weak equality
// console.log('5'===5) //strong
// console.log(k !='5') //not eqaul to
// console.log(5>3) //greater than
// console.log(5<3) //less than
// console.log(5<=3) //less than or equal to
// console.log(5>=3) //greater than or equal to


// // logical operators

// p=5;
// q=10
// console.log(p>2 && q<11) //logical conjunction ( rep by ampersand &) and
// console.log(p>5 && q<11) 
// console.log(p>7 || q<12) //logical disjunction (rep by double pipe ||) or
// console.log(!(p>7)) //logical negation (rep by !) not
// console.log(!(p>7 || q<12))
// console.log(!(p>7 && q<12))

// // conditional statement
 
// let age =prompt('how old are you?')
// if(age<18){
//     console.log('you are too young to work here')
// }
// else if(age>=18 && age<=50){
//     console.log('you can work for the maximum hours allocated to your eligibility')
// }
// else if(age>50 && age<=65){
//     console.log('you can work here but for part time')
// }

// else{
//     console.log('get out,you are too old to be here')
// }

// let number =prompt('please input your number?')
// if(number=='0'){
//     console.log(`${number} is not inclusive`)
// }
// else if(number % 2===0 && number % 3===0){
//     console.log(`${number} is divisible by 2 and 3`)
// }
//  else if(number % 3===0){
//      console.log(`${number} is divisible by 3`)
//  }
//  else{console.log(`enter a valid number`)
// }
 
// // let number =prompt('please input your number?')
// // if(number % 2==0){
// //     console.log(`${number} is even`)
// // }
// // else{console.log(`${number} is odd`)
// // }

// // Ternary operation
// let scores=prompt('enter your exam score')
// result=(scores>=40)? 'passed': 'failed'
// console.log(`your exam score is ${scores},you ${result}`)

// // code=prompt('enter your verification code')
// // if(code.length===9){
// //     console.log('your code is valid')
// // }

//  // else{
// //     console.log('invalid code')
// // }

// // ---switch operations--
// colors=prompt('enter your favorite color')
//  color=colors.toLowerCase() //to make your input recognized irrespective of case sensitive

// switch(color){
//     case 'green':
//         console.log(`you said your favorite color is ${color}`)
//         break
//     case 'yellow':
//         console.log(`you said your favorite color is ${color}`)
//         break
//     case 'red':
//         console.log(`you said your favorite color is ${color}`)
//         break
//     case 'blue':
//         console.log(`you said your favorite color is ${color}`)
//         break
//     case 'black':
//         console.log(`you said your favorite color is ${color}`)
//         break
    
//     default:
//        console.log(`your ${color} is not present`)
//        break
// }


// ............................................................ 
let day;
let now=new Date()
switch(now.getDay()){
    case 0:
        day='sunday'
        break
  case 1:
      day='monday'
      break
 case 2:
     day='tuesday'
     break
 case 3:
     day='wednesday'
     break
 case 4:
 day='thursday'
 break
 case 5:
     day='friday'
     break
     case 6:
     day='saturday'
     break
     default:
         break
}

let DateAndTime=`today is ${day},and the date and time is ${now}`
document.getElementById('lasop').innerHTML=DateAndTime

now=new Date()
let master='David'
let time=(now.getHours())
if(time>=00 && time<=12){
    document.getElementById('lasop').innerHTML=`Good morning Mr. ${master}`
}
else if(time>=12 && time<16){
    document.getElementById('lasop').innerHTML=`good afternoon Mr.${master}`
}
else{
    document.getElementById('lasop').innerHTML=`good evening mr.${master}`
}

// assignment
let user=prompt(`what year were you born?`)
let currentyear=(now.getFullYear())
console.log(currentyear)
agecalc=(currentyear - user)
if(agecalc>18){
    document.getElementById('lasop').innerHTML=`your age ${agecalc} is good for driving`
}
    else{
document.getElementById('lasop').innerHTML=`your age ${agecalc} is too young for driving`
}


let l=prompt('enter the length of your triangle')
let b=prompt('enter the breadth of your triangle')
area=0.15*l*b
document.getElementById('lasop').innerHTML=area

score=prompt('enter your exam score')
if(score>=0 && score <=100){
    if(score>=80 && score<=100){
        document.getElementById('lasop').innerHTML=`you had an 'A' in your exam`
    }
    else if(score>=70 && score<80){
        document.getElementById('lasop').innerHTML=`you had a 'B' in your exam`
    }
    else if(score>=60 && score<70){
        document.getElementById('lasop').innerHTML=`you had a 'C' in your exam`
    }
    else if(score>=50 && score<60){
        document.getElementById('lasop').innerHTML=`you had a 'D' in your exam`
    }
    else if (score>=40 && score<50){
        document.getElementById('lasop').innerHTML=`you had an 'F' in your exam`
    }
} else{
    document.getElementById('lasop').innerHTML=`${score} is not a valid exam score.Enter the correct score`
}

var dt=new Date()
var month=dt.getMonth() + 1
var year=dt.getFullYear()
var daysInMonth=new Date(year,month,0).getDate()
console.log(daysInMonth)

// Array 
let colors=['red','blue','orange','green']
console.log(colors)

let items=['red',1,true, null, 1.45]
console.log(items)

let color=new Array('man','woman','girl','boy')
console.log(color)

// accessing items in array using index 
let mycolor=colors[3]
console.log(mycolor)

// Add and remove items from an array 

// push method:it adds items to the ending of an array 
let cities=['abuja','berlin','tokyo','copenhaden']
cities.push('accra','madrid','rome','brussels')
console.log(cities)

// unshift method: add items to the beginning of an array 
colors.unshift('indigo','violet','cyan','mangenta')

// pop method ;removes the last word of an array 
cities.pop()
console.log(cities)

// shift removes the first word of an Array
cities.shift()
console.log(cities)

// concat in array 
let dogs=['toyin','adebayo','kevin','ugbodaga']
let cats=['toyin1','adebayo2','kevin3','ugbodaga4']
let arr=cats.concat(dogs)
console.log(arr)

// splice method ;can choose where you want to place word

let sm=['reddit','quora','whatsapp','stackoverflow','codepen']
let sms=sm.splice(1,0,'twitter','facebook','2go','tiktok','instagram')
console.log(sm)

let sim=['reddit','quora','whatsapp','stackoverflow','codepen']
sim.splice(1,2,'twitter','facebook','2go','tiktok','instagram')
console.log(sim)

// Slice:to duplicate and it takes 2 parameters
let sam=['reddit','quora','whatsapp','stackoverflow','codepen']
W=sam.slice(1,3)
console.log(W)
J=sam.slice(-3,-1)
console.log(J)

console.log(J)

console.log(sam.length)

// join method 
const fruits=['Banana','orange','apple','mango']
let text=fruits.join('  ')
document.getElementById('las').innerHTML=text
 
let ban=['Banana','orange']
let bans=ban.join(' and ')

let app=['apple','mango']
let apps=app.join(' with ')

let all=bans.concat(apps)
console.log(all)

// tostring method: to convert 
const fruit=['banana','orange','apple','mango']
console.log(fruit)
let texted=fruit.toString()
console.log(texted)


fruit.sort()   // .sort to arrange in ascending order 
console.log(fruit)
fruit.reverse()    // .reverse to arrange in descending order 
console.log(fruit)

const scores=[1,45,3,90,100,5,67]
scores.sort(function(a,b){return a-b})
console.log(scores)
scores.sort(function(a,b){return b-a})
console.log(scores)