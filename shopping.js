const displayLoclStorageCart = () => {
    const cart = getCart();
    for (const name in cart) {
        displayProduct(name);
    }
}


const addItem = () => {
    const nameField = document.getElementById('product-name');
    const name = nameField.value;
    if (!name) {
        return;
    }

    // display in UI
    displayProduct(name);
    // add to local storage
    addProductToCart(name);
    //


    nameField.value = '';
}
const displayProduct = name => {
    const ul = document.getElementById('products');
    const li = document.createElement('li');
    li.innerText = name;
    ul.appendChild(li);
}

// get cart and check item is exist or not
const getCart = () => {
    const cart = localStorage.getItem('cart');
    let cartObj;
    if (cart) {
        cartObj = JSON.parse(cart);
    }
    else {
        cartObj = {};
    }
    return cartObj;
}
const addProductToCart = name => {
    const cart = getCart();
    // increase quantity same type product
    if (cart[name]) {
        cart[name] = cart[name] + 1;
    }
    else {
        cart[name] = 1;
    }
    // console.log(cart);
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);
}

// order place
const placeOrder = () => {
    document.getElementById('products').textContent = '';
    localStorage.removeItem('cart');
}

displayLoclStorageCart();