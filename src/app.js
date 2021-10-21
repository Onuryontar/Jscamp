/* 1. DERS
console.log("Merhaba Kodlama.io")

let konutKredileri = ["Evlak Kredisi","Tüketici Kredisi" , "Araba Kredisi","İhtiyaç Kredisi"]

console.log("<ul>")
for(let i =0;i<konutKredileri.length;i++){
    console.log("<li>"+konutKredileri[i]+"</li>")
}
console.log("</ul>")

console.log(konutKredileri)

let secenekler = ["Ana Menü","Seçenekler","İletişim","Hakkında",2021]

console.log("<ul>")
for(let i=0;i<secenekler.length;i++){
    console.log("<li>"+secenekler[i]+"</li>")
}
console.log("<ul>")
*/


let sayi1 = 10
sayi1 = "Onur YONTAR"
let student =  {id:1, name:"Onur"}
//console.log(student)

function save(ogrenci,puan=10) {
    console.log(ogrenci.name + " : " + puan)
}
//save(student)

let students = ["Onur YONTAR", "Fadime YONTAR", "Alaz YONTAR"]

//console.log(students)

let students2 = [student, {id:2, name:"Fadime"},"Ankara",{city:"Milas"}]

//console.log(students2)

//rest --- istediğimiz kadar parametre gönderiyoruz. array ile tutuluyor.
//param C#
//varArgs JAVA

let showProducts = function (id,...products) {
    console.log(id)
    console.log(products)
}

// console.log(typeof showProducts)
// showProducts(10, "Elma","Armut","Karpuz")


// spread --- Elimizdeki array ayrıştırmak için kullanıyor.

let points = [1,2,3,4,50,4,60,14]
console.log(...points)
console.log(Math.max(...points))
console.log(..."ABC","D",..."EFG","H")


//Destructuring
//array Destructuring
let populations = [10000,20000,30000,[40000,10000]]
let [small,medium,high,[veryhigh,maximum]] = populations
console.log(small)
console.log(medium)
console.log(high)
console.log(veryhigh)
console.log(maximum)

function sameFunction([small1,medium2],number) {
    console.log(small1)
    console.log(medium2)
}

sameFunction(populations)

// obje Destructuring

let category = {id:1, name:"İçecek"}
console.log(category.id)
console.log(category["name"])

let {id,name} = category
console.log(id)
console.log(name)


