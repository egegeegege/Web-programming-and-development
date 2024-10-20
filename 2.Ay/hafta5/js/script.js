const products = [
    {
        name : "Iphone 16",
        category: "Electronic",
        price : 100000
    },
    {
        name : "Monitor",
        category: "Electronic",
        price : 20000
    },
    {
        name : "Tshirt",
        category: "Textile",
        price : 1000
    },
    {
        name : "Mont",
        category: "Textile",
        price : 2000
    },
    {
        name : "Hamburger",
        category: "Food",
        price : 100
    }
] 
var list = ""

products.forEach(product => {
   list+=`<li>${product.name}</li>`
})
document.getElementById("productBox").innerHTML = list

function clear(){
    document.getElementById("productBox").innerHTML = ""
}

function searchKeyword(e){
    clear()
    list = ""
    var filterProducts = products.filter(product => 
        !product.name.toLowerCase().search(e.target.value.toLowerCase())
    )
    filterProducts.forEach(product => {
        list+=`<li>${product.name}</li>`
    })
    document.getElementById("productBox").innerHTML = list
}

function selectCategory(e){
    clear()
    list = ""
    var filterProducts = products.filter(product => product.category == e.target.value)
    filterProducts.forEach(product => {
        list+=`<li>${product.name}</li>`
    })
    document.getElementById("productBox").innerHTML = list
}