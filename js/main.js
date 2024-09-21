let products=[
    {
        id:0,
        image:'assets/shoes/shoe (1).jpeg',
        name:'nike',
        desc: "Lightweight running shoes designed for comfort and speed. Features breathable mesh fabric and cushioned soles for maximum support during long runs.",
        price:'79.99',
        quantity:1,
    },
    {
        id:1,
        image:'assets/shoes/shoe (2).jpeg',
        name:'nike',
        desc: "Timeless leather sneakers with a minimalist design. Ideal for casual wear, these shoes offer both style and durability for everyday use.",
        price:'49.99',
        quantity:1,
    },
    {
        id:2,
        image:'assets/shoes/shoe (3).jpeg',
        name:'nike',
        desc: "Rugged hiking boots with water-resistant material and superior grip. Built for tough terrains, these boots offer ankle support and weather protection.",
        price:'59.99',
        quantity:1,
    },
    {
        id:3,
        image:'assets/shoes/shoe (4).jpeg',
        name:'nike',
        desc: "Comfortable and stylish slip-on loafers, perfect for both work and casual occasions. Made with premium leather and a cushioned insole for all-day comfort.",
        price:'99.99',
        quantity:1,
    },
    {
        id:4,
        image:'assets/shoes/shoe (5).jpeg',
        name:'nike',
        desc: "Lightweight running shoes designed for comfort and speed. Features breathable mesh fabric and cushioned soles for maximum support during long runs.",
        price:'89.99',
        quantity:1,
    },
    {
        id:5,
        image:'assets/shoes/shoe (6).jpeg',
        name:'nike',
        desc: "Timeless leather sneakers with a minimalist design. Ideal for casual wear, these shoes offer both style and durability for everyday use.",
        price:'39.99',
        quantity:1,
    },
    {
        id:6,
        image:'assets/shoes/shoe (7).jpeg',
        name:'nike',
        desc: "Rugged hiking boots with water-resistant material and superior grip. Built for tough terrains, these boots offer ankle support and weather protection.",
        price:'79.99',
        quantity:1,
    },
    {
        id:7,
        image:'assets/shoes/shoe (8).jpeg',
        name:'nike',
        desc: "Rugged hiking boots with water-resistant material and superior grip. Built for tough terrains, these boots offer ankle support and weather protection.",
        price:'79.99',
        quantity:1,
    },
    {
        id:8,
        image:'assets/shoes/shoe (9).jpeg',
        name:'nike',
        desc: "Rugged hiking boots with water-resistant material and superior grip. Built for tough terrains, these boots offer ankle support and weather protection.",
        price:'119.99',
        quantity:1,
    },
    {
        id:9,
        image:'assets/shoes/shoe (10).jpeg',
        name:'nike',
        desc: "Rugged hiking boots with water-resistant material and superior grip. Built for tough terrains, these boots offer ankle support and weather protection.",
        price:'109.99',
        quantity:1,
    },
    {
        id:10,
        image:'assets/shoes/shoe (11).jpeg',
        name:'nike',
        desc: "Rugged hiking boots with water-resistant material and superior grip. Built for tough terrains, these boots offer ankle support and weather protection.",
        price:'99.99',
        quantity:1,
    },
    {
        id:11,
        image:'assets/wear/wear (1).jpeg',
        name:'Jacket',
        desc: "An insulated puffer jacket designed for cold weather. Features a water-resistant outer layer, down filling, and a cozy hood for maximum warmth and protection against the elements.",
        price:'49.99',
        quantity:1,
    },
    {
        id:12,
        image:'assets/wear/wear (2).jpeg',
        name:'Jacket',
        desc: "A trendy bomber jacket with a lightweight build and ribbed cuffs. Ideal for a casual, modern look, it’s perfect for layering over t-shirts or hoodies during transitional seasons.",
        price:'59.99',
        quantity:1,
    },
    {
        id:13,
        image:'assets/wear/wear (3).jpeg',
        name:'Jacket',
        desc: "An insulated puffer jacket designed for cold weather. Features a water-resistant outer layer, down filling, and a cozy hood for maximum warmth and protection against the elements.",
        price:'69.99',
        quantity:1,
    },
    {
        id:14,
        image:'assets/wear/wear (4).jpeg',
        name:'Jacket',
        desc: "A trendy bomber jacket with a lightweight build and ribbed cuffs. Ideal for a casual, modern look, it’s perfect for layering over t-shirts or hoodies during transitional seasons.",
        price:'59.99',
        quantity:1,
    },
    {
        id:15,
        image:'assets/wear/wear (5).jpeg',
        name:'Jacket',
        desc: "An insulated puffer jacket designed for cold weather. Features a water-resistant outer layer, down filling, and a cozy hood for maximum warmth and protection against the elements.",
        price:'79.99',
        quantity:1,
    },
    {
        id:16,
        image:'assets/wear/wear (6).jpeg',
        name:'Jacket',
        desc: "A trendy bomber jacket with a lightweight build and ribbed cuffs. Ideal for a casual, modern look, it’s perfect for layering over t-shirts or hoodies during transitional seasons.",
        price:'49.99',
        quantity:1,
    },
    {
        id:17,
        image:'assets/wear/wear (7).jpeg',
        name:'Jacket',
        desc: "An insulated puffer jacket designed for cold weather. Features a water-resistant outer layer, down filling, and a cozy hood for maximum warmth and protection against the elements.",
        price:'89.99',
        quantity:1,
    },
    {
        id:18,
        image:'assets/wear/wear (8).jpeg',
        name:'Jacket',
        desc: "A trendy bomber jacket with a lightweight build and ribbed cuffs. Ideal for a casual, modern look, it’s perfect for layering over t-shirts or hoodies during transitional seasons.",
        price:'89.99',
        quantity:1,
    },
    {
        id:19,
        image:'assets/wear/wear (9).jpeg',
        name:'Jacket',
        desc: "Majesda® - Solid Color Stand Collar Winter Coat - Black / M",
        price:'89.99',
        quantity:1,
    },
    
]
let cartCount = document.querySelector('.cart-count');
let cartNum = 0;
let cartArr = []
let notification = document.getElementById('notification');
let cartFlag = false;
let closeCart = document.getElementById('closeCart');
let openCart = document.getElementById('openCart');
let prices = 0;
let deleteCartBtn = document.getElementById('deleteCart');
let logOutBtn = document.getElementById('logOutBtn');


function init(){
    if(localStorage.getItem('token') == null){
        window.location.href = '../index.html'
    }
}

logOutBtn.addEventListener('click',()=>{
    localStorage.removeItem('token');
    localStorage.removeItem('userName');
    window.location.reload()
})

document.querySelectorAll('.fa-star').forEach(star=>{
    star.addEventListener('click',()=>{
        star.classList.toggle('text-warning');
        console.log('dd');
        
    })
})
deleteCartBtn.addEventListener('click',()=>{
    deleteAllCart();
})

closeCart.addEventListener('click',()=>{
    document.querySelector('.cart').style.left = '100%';
})
openCart.addEventListener('click',()=>{
    if (window.matchMedia("(max-width: 768px)").matches) {
        document.querySelector('.cart').style.left = '0%';
    } 
    else if(window.matchMedia("((min-width:768px) and (max-width:992px))").matches){
        document.querySelector('.cart').style.left = '45%';
    }
    else {
        document.querySelector('.cart').style.left = '70%';
    }
})


notification.addEventListener('click',()=>{
    notification.style.opacity = 0;
})
if(localStorage.getItem('cart') != null && localStorage.getItem('cartCount')){
    cartArr = JSON.parse(localStorage.getItem('cart'));
    cartNum = JSON.parse(localStorage.getItem('cartCount'));
    prices =  JSON.parse(localStorage.getItem('totalPrice'));
    cartCount.innerHTML = cartNum
    document.querySelector('.total-price').innerHTML = `Total Price : ${prices}$`;
    console.log(cartArr,cartNum);
    displayCartProducts()
}
if(localStorage.getItem('userName') != null){
    document.getElementById('UserName').innerHTML = `${localStorage.getItem('userName')} <i class="fa-solid fa-circle-user fa-xl"></i>`
}
function addToCart(index,id){
        for(let i = 0 ; i < cartArr.length ; i++){
            if(cartArr[i].id == id){
                cartFlag = true;
            }
        }
        if(cartFlag){
            console.log('exist');
            notification.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> product already in the cart'
            notification.classList.add('bg-danger');
            notification.classList.remove('bg-success');
            notification.style.opacity = 1;
            setTimeout(() => {
                notification.style.opacity = 0
            }, 3000);
            cartFlag = false
        }
        else{
            cartNum++;
            cartCount.innerHTML = cartNum
            cartArr.push(products[index])
            displayCartProducts();
            calcPrice();
            localStorage.setItem('cart',JSON.stringify(cartArr))
            localStorage.setItem('cartCount',JSON.stringify(cartNum))
            notification.classList.add('bg-success');
            notification.classList.remove('bg-danger');
            notification.innerHTML = '<i class="fa-regular fa-circle-check"></i> Added to the cart successfully';
            notification.style.opacity = 1;
            setTimeout(() => {
                notification.style.opacity = 0
            }, 3000);
            cartFlag = false;
        }
}
function displayProducts(){
    let box = ``;
    for(let i = 0 ; i < products.length ; i++){
        box+=`
            <div class="col-xl-3 col-lg-4 col-md-6">
                        <div class="my-card rounded-3 overflow-hidden shadow">
                            <div class="head">
                                <img height="280" class="w-100 card-image" src="${products[i].image}" alt="">
                            </div>
                            <div class="body">
                                <div class="d-flex align-items-center justify-content-between">
                                    <h2 class="text-start text-capitalize">${products[i].name}</h2>
                                    <span>${products[i].price}$</span>
                                </div>
                                <p>${products[i].desc.split(' ').slice(0,13).join(' ')}</p>
                            </div>
                            <div class="footer  d-flex align-items-center justify-content-between">
                                <div class="text-muted rating">
                                    <i class="fa-solid fa-star text-warning"></i>
                                    <i class="fa-solid fa-star text-warning"></i>
                                    <i class="fa-solid fa-star text-warning"></i>
                                    <i class="fa-solid fa-star text-warning"></i>
                                    <i class="fa-solid fa-star "></i>
                                </div>
                                <button type="button" onclick="addToCart(${i},${products[i].id})" id="addBtn">Add to cart</button>
                            </div>
                        </div>
                    </div>
        `
    }
    document.querySelector('.products-row').innerHTML = box;
    addRatings()
}
function addRatings(){
    const stars = document.querySelectorAll('.rating i')
    stars.forEach(star=>{
        star.addEventListener('click',(e)=>{
            star.classList.toggle('text-warning')
        })
    })
}
function displayCartProducts(){
    let box = ``;
    for(let i = 0 ; i < cartArr.length;i++){
        box+=`
            <div class="row bg-white overflow-hidden rounded-3 align-items-center  shadow mt-3">
                            <div class="col-md-8 order-lg-0 order-md-0 order-2">
                                <div class="d-flex justify-content-between cart-card">
                                    <div class="left d-flex justify-content-between flex-column">
                                        <h3 class="text-capitalize">${cartArr[i].name}</h3>
                                        <p class="me-2">${cartArr[i].desc.split(' ').slice(0 , 4).join(' ')} </p>
                                        <span>${cartArr[i].price}$</span>
                                    </div>
                                    <div class="d-flex flex-column justify-content-between align-items-center right ">
                                        <div>
                                            <i onclick="deleteCartItem(${i})"  class="fa-solid fa-trash-can fa-xl cursor-pointer text-danger"></i>
                                        </div>
                                        <div class="d-flex justify-content-between align-items-center gap-3 cart-icons">
                                            <i onclick="increasQuantity(${i})" class="fa-solid cursor-pointer fa-plus"></i>
                                            <span id="quantity${i}" class="text-success fw-medium">${cartArr[i].quantity}</span>
                                            <i onclick="decreasQuantity(${i})" class="fa-solid cursor-pointer fa-minus"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 p-0 order-0">
                                <div class="cart-image">
                                    <img class="w-100" height="150" src="${cartArr[i].image}" alt="">
                                </div>
                            </div>
                        </div>
        `
    }
    document.querySelector('.cart-content').innerHTML = box;
}
function deleteCartItem(index){
    cartArr.splice(index ,1);

    cartNum--
    cartCount.innerHTML = cartNum;

    localStorage.setItem('cart',JSON.stringify(cartArr));
    localStorage.setItem('cartCount',JSON.stringify(cartNum));

    calcPrice();
    displayCartProducts();
}
function deleteAllCart(){
    localStorage.removeItem('cart');
    localStorage.removeItem('cartCount');
    localStorage.removeItem('totalPrice');
    cartArr = [];
    cartNum = 0;
    document.querySelector('.total-price').innerHTML = `Total Price : 0.00$`
    document.querySelector('.cart-count').innerHTML = cartNum;
    displayCartProducts();
}
function calcPrice(){
    prices = 0;
    for(let i = 0 ; i < cartArr.length ; i++){
        if(cartArr[i].quantity != 0){
            prices+= parseFloat(cartArr[i].price * cartArr[i].quantity)
        }
    }
    localStorage.setItem('totalPrice',JSON.stringify(prices))
    document.querySelector('.total-price').innerHTML = `Total Price : ${prices.toFixed(2)}$`

    return prices;
}
function increasQuantity(index){
    cartArr[index].quantity++
    localStorage.setItem('cart',JSON.stringify(cartArr))
    document.getElementById(`quantity${index}`).innerHTML = cartArr[index].quantity;
    calcPrice()
}
function decreasQuantity(index){
    if(cartArr[index].quantity > 1){
        cartArr[index].quantity--
        localStorage.setItem('cart',JSON.stringify(cartArr))
        document.getElementById(`quantity${index}`).innerHTML = cartArr[index].quantity;
        calcPrice()
    }
    else{
        deleteCartItem(index)
    }
}


window.onscroll = ()=>{
    scroll()
}
function scroll(){
    if(document.body.scrollTop > 100 || document.documentElement.scrollTop >100){
        document.querySelector('.navbar').classList.add('bg-white')
    }
    else{
        document.querySelector('.navbar').classList.remove('bg-white')
    }
}
window.onload = ()=>{
    displayProducts()
    init()
}