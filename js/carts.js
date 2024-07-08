let ProductsInCart = localStorage.getItem("ProductsInCart")
let allProducts = document.querySelector(".products")

if(ProductsInCart){
    let item = JSON.parse(ProductsInCart) ;
    drawCartProducts(item);
}

function drawCartProducts(products){
    let y = products.map((item) => {
        return `
        <div class="product-item">
        <img class="product-item-img" src="${item.imageUrl}" alt="">
        <div class="product_item_desc">
            <h2>${item.title}</h2>
            <p>choose what you want</p>
            <span>${item.price}</span>
        </div>
        <div class="product_item_action">
         <button class="add_to_button" onClick="RemoveFromCart(${item.id})">Remove From Cart</button>
         <i class="far fa-heart fav"></i>
        </div>
    </div>
        `
    })
    allProducts.innerHTML = y;
}
//////////////////////////////////
function RemoveFromCart(id) {
    let catsInProducts=localStorage.getItem("ProductsInCart");
    console.log(catsInProducts);
        if (catsInProducts != -1) {
            let allproducts=JSON.parse(catsInProducts);
   
            let index=allproducts.findIndex(item=> item.id ===id);

            if(index!== -1){
                allproducts.splice(index,1);
               
                 localStorage.setItem("ProductsInCart", JSON.stringify(allproducts));
                 drawCartProducts(allproducts);
            }
       
        }
     
      }