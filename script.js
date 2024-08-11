let products = [];

// Function to add a product
function addProduct() {
    const name = document.getElementById('productName').value;
    const price = parseFloat(document.getElementById('productPrice').value);
    const rating = parseFloat(document.getElementById('productRating').value);

    if (name && !isNaN(price) && !isNaN(rating)) {
        products.push({ name, price, rating });
        document.getElementById('productName').value = '';
        document.getElementById('productPrice').value = '';
        document.getElementById('productRating').value = '';
        displayProducts();
    } else {
        alert('Please fill out all fields correctly.');
    }
}

// Function to display products
function displayProducts() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.innerHTML = `<strong>${product.name}</strong> - $${product.price} - Rating: ${product.rating}`;
        
        const priceBar = document.createElement('div');
        priceBar.className = 'bar';
        priceBar.innerHTML = `<div class="bar-fill" style="width: ${product.price * 10}px"></div>`;
        
        const ratingBar = document.createElement('div');
        ratingBar.className = 'bar';
        ratingBar.innerHTML = `<div class="bar-fill" style="width: ${product.rating * 20}px"></div>`;
        
        productDiv.appendChild(priceBar);
        productDiv.appendChild(ratingBar);
        productList.appendChild(productDiv);
    });
}

// Function to sort products by price
function sortProducts() {
    products.sort((a, b) => a.price - b.price);
    displayProducts();
}
