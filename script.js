
const products = [
    { name: "Sandal", price: 100, image: "1.jpg" },
    { name: "High Heels", price: 50, image: "2.jpg" },
    { name: "Beige Sandal", price: 20, image: "3.jpg" },
    
];

const cart = [];

function displayProducts() {
    const productList = document.getElementById("product-list");
    productList.innerHTML = "";
    products.forEach((product, index) => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${index})">🛒</button>
        `;
        productList.appendChild(productDiv);
    });
}

function addToCart(index) {
    cart.push(products[index]);
    updateCart();
}

function updateCart() {
    const cartList = document.getElementById("cart-list");
    cartList.innerHTML = "";
    let total = 0;
    cart.forEach((item) => {
        total += item.price;
        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");
        cartItem.innerHTML = `
            <span>${item.name}</span>
            <span>$${item.price.toFixed(2)}</span>
        `;
        cartList.appendChild(cartItem);
    });
    document.getElementById("total-price").textContent = total.toFixed(2);
}

displayProducts();