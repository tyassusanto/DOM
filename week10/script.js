// product
const tampilProduct = () => {
    data.forEach((e) => {
        document.getElementById("product").innerHTML +=
    `<div class='product 'id="${e.id}">
        <div onclick="addCart(${e.id})" ><img src="${e.picture}"></div>
        <div id='name-product'>${e.product_name}</div>
        <div id='price'>${e.price}</div>
     </div>`
    })
}

tampilProduct()


// cart
const cartIsEmpety = () => {
    if(cart.length === 0){
        document.getElementById("cart").innerHTML = ''
}
}


// menampilkan cart
const appear = () => {  
    if(cart.length === 0){
        cartIsEmpety()
        document.getElementById("priceTotal").innerHTML = ''  
    } else {
        document.getElementById("cart").innerHTML = ''
        cart.forEach((e) => {
        document.getElementById("cart").innerHTML +=
        `<div class="cart" id="${e.id}">
            <div><img src="${e.picture}"></div>
            <div id='name-product'>${e.product_name}</div>
            <div id='price'>Rp.${e.price * e.qty}</div>
            <div class="tombol">
                <div class="minus" onclick="minQtyBtn(${e.id})"><p>-</p></div>
                <div class="qty"><input value="${e.qty}"></div>
                <div id="plus" onclick="plusQtyBtn(${e.id})"><p>+</p></div>
            </div>  
        </div>` 
        total() //menampilkan total
        }) 
    }
}

//cek data cart
const cekCart = (id) => {
    const find = cart.find((e) => {
        if(e.id === id){
            return e
        }
    })
    return find
}

//delete cart 
const del = (id) => {
    const newCart = cart.filter((e) => {
        if(e.id !== id)
        return e
    })
    cart = newCart
    document.getElementById("qty-cart").innerHTML = ''  
}


//tambah qty
const plusQty = (id) => {
    const newCart = cart.map((e) => {
        if(e.id === id){
            return{
                id: e.id,
                picture: e.picture,
                product_name: e.product_name,
                price: e.price,
                qty: e.qty + 1
        }
        } else{
            return e
        }
    })
    cart = newCart
}


//memanggil fungsi tambah qty dan menampilkan hasil
const plusQtyBtn = (id) => {
    // console.log(id)
    plusQty(id)
    appear()
}

//mengurangi qty
const minQtyBtn = (id) =>{
    const newCart = cart.map((e) => {
        if(e.id === id){
           return{
            id: e.id,
            picture: e.picture,
            product_name: e.product_name,
            price: e.price,
            qty: e.qty - 1
           }
        } else{
            return e
        }
    }) 
    
    if(cekCart(id).qty > 1){
        cart = newCart
    } else if (cekCart(id).qty <= 1){
       del(id)
    }     
    appear() 
}


//menambahkan data ke var cart
const addCart = (id) => {
    const findData = data.find((e) => {
        if(e.id === id){
            return e
        }
    }) 

    const addQty = {
        ...findData, qty: 1 
    }

    if(cekCart(id) === undefined){
        cart.push(addQty)
    } else {
        plusQty(id)
    }
    appear()  
}



//total
const total= () => {
    let total = 0
    let ntf = 0
    cart.forEach((e) => {
        if(cart < 0){
            document.getElementById("priceTotal").innerHTML = ''  
        } else {
            total += e.price*e.qty 
            ntf += e.qty 
            document.getElementById("priceTotal").innerHTML = `Rp.${total}`
            if(ntf === 0){
                document.getElementById("qty-cart").innerHTML = ' '  
            } else {
                document.getElementById("qty-cart").innerHTML = `${ntf}`
                console.log(ntf)
            }
            
        }
    })
}

//reset semua data di dalam var cart
const cancel = () => {
    cart = [] 
    appear()  
    document.getElementById("priceTotal").innerHTML = ''
    cartIsEmpety()
}

// modal
let modalBtn = document.querySelector('.checkout');
let modal = document.querySelector('.modal');
let modalClose = document.querySelector('.close-modal');

modalBtn.addEventListener('click', function(){
    modal.classList.add('modal-active')
})

modalClose.addEventListener('click', function(){
    modal.classList.remove('modal-active')
})