"use strict "



// const getBirhday=()=>{
//     let date=new Date();

//     return date.getFullYear() 
// }

// console.log(getBirhday(5))


// let address="Ehmedli"

// for (let i = 0; i < address.length; i++) {
//     console.log(address[i])
    
// }

// console.log(address.length) // stringin elementlerinin sayini verir 

// console.log(address[0]) - // elementi goturur 

// console.log(address.charAt(0)) - // elementi goturur . 

// console.log(address.charCodeAt(0)) // arxa fondaki kodunu gosderir [0 elementin ]

// console.log(address.toLowerCase()) // hamisini kicik edir 

// console.log(address.toUpperCase()) // hamisini boyuk edir 

// console.log(address.split(" ")) // stringi arry cevirir 

// console.log(address.trimStart()) //qabagdan boshuqu silir 

// console.log(address.trimEnd()) // sondan boshluqu silir 

// console.log(address.slice(0,3))  // arryin icindeki elementi goturur (0,3 qoyanda 3 indexe kimi goturur tek yazanda ondan bashqa hamisini goturur )


// console.log(address.substring(1,3)) // stringi 1 den 3 kimi elementlerini goturur  - deyerler qebul elemir slice ise menfi deyerler qebul edir


// let text = "sdakdaskldjaslkdsakdak"

// if(text.length>10){
//     console.log(text.substring(1,10)+ "...")
// }


// console.log(address.substr(1,5)) // 1den sonra 3 denesini gotursun o biriyle ferqi ise o biri indexe gore bu ise ozunden sonra

// let text ="Salam Anar bey anar "

// // console.log(text.replace("Anar","Mubariz"))  // stringin icinden neysie deyismek ucundur ( cumle soz ve s)


// console.log(text.replaceAll("Anar","Mubariz")) 

// let text1 = "Hello";

// let text2=" World"

// let res=text1.concat(text2)

// console.log(res)

// const strToUpper = str =>{
//     return str.charAt(0).toUpperCase() + str.slice(1)
// }

// console.log(strToUpper("saiq"))

// let text = "salam";

// let result =text[0].toUpperCase();

// console.log(result + text.slice(1))

// let text = "salam"

// let res = text[0].toUpperCase();

// let result = text.replace(text.charAt(0),res)

// console.log(result)

// console.log(students.length)

// console.log(students[students.length-1])

// // let result = students.join();   // arry-i stringe cevirir
// console.log(result)


// console.log(students )


// students.shift() // evvelden birincini silir 

// students.pop()  // axirdan silir 

// students.push("Elekber")  // arryin icine elave edir 

// students.unshift("Xakker") // evvele elave edir 

// console.log(students)

// function filter(arr){
//    let result = [];

//    let text ="R"

//     for (const item of arr) {

//         if(item.toLowerCase().startsWith(text.toLowerCase())){

//             result.push(item)
//         }      
//     }

//     return result
// }
// console.log(filter(students))

let students=["Cavid", "Jale", "Roya", "Konul", "Cinare", "Anar", "Cinare"]

// console.log(students.indexOf("Cinare")) // index of elementin indexii gosderir olmuanda ise  -1 verir 


// console.log(students.lastIndexOf("Cinare"))

// let result = students.find(m=>m=="Jale");

// console.log(result)


// students.sort();   // siralayir 
// console.log(students)

// students.reverse()  // tersine yazdirir 

// console.log(students)

// console.log([3,8,-10,23,19,-4,-14,27].sort((a,b)=>b-a))

// students.fill("Eli", 0,2)

// console.log(students) // butun itemleri eli edecek 


// console.log(students.every(m=>m=="Cinare")) // icindekiler hamisi cinareye beraberdi true false qaytarir // false

// let arr=[1,2,3,4,5,6,7]

// console.log(arr.every(m=>m>4))



// const fruits=["Banana", "Orange", "Apple","Mango"]
 
// const f=fruits.entries();  //arry seklinde element ve indexi gosderir 

// for (const iterator of f) {
//     console.log(iterator)
// }

// let arr=[1,23,3,4,25,6,7]

// console.log(arr.findIndex(m=>m>23))

// console.log(arr.includes(10))


// let text = "ABCDEFG"

// const myArr=Array.from(text)

// for (const item of myArr) {

//     console.log(item)
    
// }\

// console.log(arr.slice(2,5))


// const fruits=["Banana", "Orange", "Apple","Mango"]

// fruits.splice(2,0, "Lemon", "Kiwi")

// console.log(fruits)

// console.log(arr.toString())

// let age="55";

// let age2="33"

// // console.log(Number(age)+ Number(age2))


// // console.log(typeof age.toString())

// console.log(typeof parseInt(age))

// function getNums(num1,...arr){
//     console.log(arr)
// }

// getNums(1,2,3,4,5,6)

// let test = (...arr)=>{
//     console.log(arr)
// }

// test(1,2,3)

// let arr1=[1,2,3,4,5]


// let copyArr=[...arr1]

// console.log(copyArr)

// arr1[0]=10;


// console.log(arr1)


// let user1={
//     name:"Shaiq",
//     address:"Ehmedli"
// }

// console.log(user1)

// let copyUser1={...user1}

// console.log(copyUser1)




// // Task-1
//  Parametr olaraq gelen stringi tersine ceviren method yazin. Meselen: Cavid gelirse divaC qaytarsin.


// function reverseStr(str){

//  return str.split("").reverse().join("");

    
//  }
   
//  console.log(reverseStr("Cavid"))





