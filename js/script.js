
let userInfo = document.querySelector ("#user_info")
let userD = document.querySelector ("#user")
let links = document.querySelector ("#links")

if (localStorage.getItem("username")){
    links.remove()
    userInfo.style.display ="flex"
    userD.innerHTML = localStorage.getItem("username")
}
let logOutBtn = document.querySelector("#logout")
logOutBtn.addEventListener("click", function (){
    localStorage.clear();
    setTimeout(() => {
        window.location = "login.html";
    } , 1500)
})
////////////////////////////////////////////////////////////////////////////////
let allProducts = document.querySelector(".products")
let products=[
    {
      id:1,
      title:"Espresso  ",
      price: "90$" ,
      imageUrl: "./images/drink-4667507_1280.jpg" ,

    },
    {
      id:2,
      title:"Latte Coffee  ",
      price: "30$" ,
      imageUrl: "./images/pexels-beyzanur-k-18844425.jpg" ,

    },
    {
      id:3,
      title:"Cappuccino  ",
      price: "40$" ,
      imageUrl: "./images/pexels-chevanon-photography-302891.jpg" 

    },
    {
      id:4,
      title:"Americano  ",
      price: "70$" ,
      imageUrl:"./images/83fc924b-bc0b-4735-a823-ee7cb38809d3.jpg"  

    }
]
function drawItems (){
    let y = products.map((item) => {
        return `
        <div class="product-item">
        <img class="product-item-img" src="${item.imageUrl}" alt="">
        <div class="product_item_desc">
            <h2>${item.title}</h2>
            <p>the new mobile from oppo company 6-2022</p>
            <span>${item.price}</span>
        </div>
        <div class="product_item_action">
         <button class="add_to_button" onClick="addToCart(${item.id})">Add To Cart</button>
         <i class="far fa-heart fav"></i>
        </div>
    </div>
        `
    })
    allProducts.innerHTML = y;
}
drawItems ()


let cartProductDiv = document.querySelector(".carts_products div")
let badge = document.querySelector(".badge")


// let addedItem = [];
let addedItem = localStorage.getItem("ProductsInCart") ? JSON.parse(localStorage.getItem("ProductsInCart")) : [];

if(addedItem) {
    addedItem.map(item => {
        cartProductDiv.innerHTML += `<p>${item.title}</p>`;
    })
    badge.style.display = "block";
    badge.innerHTML = addedItem.length;
}



  if(localStorage.getItem=("username")){
        function addToCart(id){
            let choosenItem = products.find((item) => item.id === id );
            cartProductDiv.innerHTML += `<p>${choosenItem.title}</p>`;
            

            addedItem = [...addedItem , choosenItem]
            localStorage.setItem("ProductsInCart" , JSON.stringify(addedItem) )
            let cartProductsLength = document.querySelectorAll(".carts_products div p")
            // console.log(cartProductsLength.length)
            badge.style.display ="block";
            badge.innerHTML = cartProductsLength.length;
        }
    }else {
        window.location ="login.html"
    }




//////////////////////////////////////////////////////////////////////////
let shoppingCartIcon = document.querySelector(".shopping_cart")
let cartsProducts = document.querySelector(".carts_products")
shoppingCartIcon.addEventListener("click", opencart)

function opencart(){
     if(cartProductDiv.innerHTML !=""){
         if(cartsProducts.style.display=="block"){
            cartsProducts.style.display="none"
         }else {
            cartsProducts.style.display="block";
         }
     } 
}
///////////////////////////////////////////////////////////////////////






