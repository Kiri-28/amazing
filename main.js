const product = {
    id: "001",
    name: "Leche",
    description: "Leche de vaca gallega",
    price: 0.99,
    eco: true,
    imageUrl: null,
}

window.onload = function() {
    const productTitle = document.getElementsByClassName('product-title')[0].innerHTML = product.name;
    const productPrice = document.getElementsByClassName('product-price')[0].innerHTML = product.price;
    const productDesc = document.getElementsByClassName('product-desc')[0].innerHTML = product.description;
}