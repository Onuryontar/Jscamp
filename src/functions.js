function addToCart(quantity,productName="Elma") {
    console.log("Sepete Ekelendi : ürün :" + productName + " adet: "+quantity)
}

//addToCart()
addToCart(10)
//addToCart(15)

let sayHello = ()=>{
    console.log("Hello Wolrd!")
}

sayHello()



let sayHello2 = function () {
    console.log("Hello World 2")
}

sayHello2()

function addToCart2(productName, quantitiy, unitPrice) {
    
}

addToCart2("Elam",5,10)
addToCart2("Armut",2,20)
addToCart2("Limon",3,15)



let product1 = {productName:"Elma", unitPrice:10, quantitiy:5}

function addToCart3(product){
    console.log("Ürün : "+product.productName)
    console.log("Adet : "+product.quantitiy)
    console.log("Fiyat : "+product.unitPrice)
}

addToCart3(product1)

let product2 = {productName:"Elma", unitPrice:10, quantitiy:5}
let product3 = {productName:"Elma", unitPrice:10, quantitiy:5}

product2 = product3  // referans tip atama 
product2.productName = "KARPUZ"
console.log(product3.productName)


function addToCart4(products) {
    console.log(products)
}

let products = [
    {productName:"Elma", unitPrice:10, quantitiy:5},
    {productName:"Armut", unitPrice:10, quantitiy:5},
    {productName:"Karpuz", unitPrice:10, quantitiy:5}
]

addToCart4(products)

function add(...numbers) { //rest operatörü
    let total = 0;
    for(let i = 0; i < numbers.length; i++) {
        total = total + numbers[i]
    }
    console.log(total)
}

add(20,30)
add(20,30,40)
add(20,30,40,50)

let numbers = [30,10,500,600,120]

console.log(Math.max(...numbers))




let [icAnadolu,marmara,karadeniz,[icAnadoluSehirleri]] = [
    {name:"İç Anadolu", population:"20m"},
    {name:"Marmara", population:"30m"},
    {name:"Karadeniz", population:"10m"},
    [
        ["Ankara","Konya"],
        ["İstanbul","Bursa"],
        ["Sinop","Trabzon"],
    ]
]





console.log(icAnadolu.name)
console.log(icAnadolu.population)
console.log(icAnadoluSehirleri)

let newProductName, newUnitPrice, newQuantity
({productName:newProductName, unitPrice:newUnitPrice, quantity:newQuantity}
={productName:"Elma", unitPrice:10,quantity:5})

console.log(newProductName)
console.log(newUnitPrice)
console.log(newQuantity)