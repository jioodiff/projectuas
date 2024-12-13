let cart = [];
let totalPrice = 0;
let customers = [];

function addToCart(productName, productPrice) {
    cart.push({ name: productName, price: productPrice });
    totalPrice += productPrice;

    renderCart();
}

function renderCart() {
    const cartItems = document.getElementById("cart-items");
    const totalElement = document.getElementById("total-price");

    cartItems.innerHTML = "";
    cart.forEach((item, index) => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - Rp ${item.price.toLocaleString()}`;
        const removeButton = document.createElement("button");
        removeButton.textContent = "Hapus";
        removeButton.style.marginLeft = "10px";
        removeButton.onclick = () => removeFromCart(index);
        li.appendChild(removeButton);
        cartItems.appendChild(li);
    });

    totalElement.textContent = totalPrice.toLocaleString();
}

function removeFromCart(index) {
    totalPrice -= cart[index].price;
    cart.splice(index, 1);
    renderCart();
}

function checkout() {
    if (cart.length === 0) {
        alert("Keranjang belanja kosong!");
        return;
    }

    const customerName = prompt("Masukkan nama Anda untuk melanjutkan checkout:");
    if (!customerName) {
        alert("Checkout dibatalkan. Nama pelanggan diperlukan.");
        return;
    }

    // Simpan pelanggan ke daftar
    customers.push({
        name: customerName,
        items: [...cart], // Salin item keranjang
        total: totalPrice
    });

    alert(`Terima kasih telah berbelanja, ${customerName}. Total: Rp ${totalPrice.toLocaleString()}`);

    // Reset keranjang setelah checkout
    cart = [];
    totalPrice = 0;
    renderCart();

    // Perbarui daftar pelanggan
    renderCustomers();
}

// Dummy data untuk validasi login
const validUsername = "admin";
const validPassword = "123";

function handleLogin(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const loginError = document.getElementById("login-error");

    if (username === validUsername && password === validPassword) {
        // Tambahkan kelas fade-out ke login-container
        const loginContainer = document.getElementById("login-container");
        loginContainer.classList.remove("fade-in");
        loginContainer.classList.add("fade-out");

        // Tampilkan app-container dengan animasi
        const appContainer = document.getElementById("app-container");
        appContainer.style.display = "block";
        setTimeout(() => {
            appContainer.classList.remove("fade-out");
            appContainer.classList.add("fade-in");
        }, 500); // Sesuaikan dengan durasi transisi CSS (0.5s)
    } else {
        loginError.style.display = "block";
    }
}
const products = [
    { name: "RGX Carambit", price: 500000, image: "https://i.pinimg.com/736x/3b/06/c2/3b06c27b8fe8640cc72b4256c388481c.jpg" },
    { name: "Reaver Carambit", price: 550000, image: "https://i.pinimg.com/736x/a5/9d/25/a59d25c0178af54a3cdcf1735eea8a8f.jpg" },
    { name: "Kuronami No Yaiba", price: 700000, image: "https://i.pinimg.com/736x/78/c3/35/78c335a6cfb9b0fac562ee07ae012d38.jpg" },
    { name: "Ruination Sword", price: 750000, image: "https://i.pinimg.com/736x/4c/be/23/4cbe2399e9be9dc24c94a0461d7e6d9e.jpg" },
    { name: "Jett Knife", price: 650000, image: "https://i.pinimg.com/736x/2d/71/c8/2d71c8243791d8e43228272ce656aa36.jpg" },
    { name: "SEN Classic", price: 250000, image: "https://i.pinimg.com/736x/38/18/52/3818521313b0d2553a3cb99be4553440.jpg" },
    { name: "Arcane Sherrif", price: 350000, image: "https://i.pinimg.com/736x/17/16/58/1716586008994bd66a53edb1143184ca.jpg" },
];
function showProducts() {
    const productList = document.getElementById("product-list");
    const modal = document.getElementById("product-modal");

    // Kosongkan daftar produk sebelumnya
    productList.innerHTML = "";

    // Tampilkan produk dalam daftar
    products.forEach(product => {
        const li = document.createElement("li");
        li.innerHTML = `
            <img src="${product.image}" alt="${product.name}" style="width: 50px; height: 50px; margin-right: 10px;">
            <strong>${product.name}</strong> - Rp ${product.price.toLocaleString()}
        `;
        productList.appendChild(li);
    });

    // Tampilkan modal
    modal.style.display = "block";
}
function closeProducts() {
    const modal = document.getElementById("product-modal");
    modal.style.display = "none";
}
window.onclick = function (event) {
    const modal = document.getElementById("product-modal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
};

function openCart() {
    const modal = document.getElementById("cart-modal");
    const cartItemsModal = document.getElementById("cart-items-modal");
    const cartTotalPrice = document.getElementById("cart-total-price");

    // Kosongkan isi keranjang sebelumnya
    cartItemsModal.innerHTML = "";

    // Tampilkan item dalam keranjang
    if (cart.length === 0) {
        const emptyMessage = document.createElement("li");
        emptyMessage.textContent = "Empty Cart.";
        cartItemsModal.appendChild(emptyMessage);
    } else {
        cart.forEach(item => {
            const li = document.createElement("li");
            li.textContent = `${item.name} - Rp ${item.price.toLocaleString()}`;
            cartItemsModal.appendChild(li);
        });
    }

    // Tampilkan total harga
    cartTotalPrice.textContent = totalPrice.toLocaleString();

    // Tampilkan modal
    modal.style.display = "block";
}
function closeCart() {
    const modal = document.getElementById("cart-modal");
    modal.style.display = "none";
};
function checkout() {
    if (cart.length === 0) {
        alert("Keranjang belanja kosong!");
        return;
    }

    const customerName = prompt("Masukkan nama Anda untuk melanjutkan checkout:");
    if (!customerName) {
        alert("Checkout dibatalkan. Nama pelanggan diperlukan.");
        return;
    }

    // Simpan pelanggan ke daftar
    customers.push({
        name: customerName,
        items: [...cart], // Salin item keranjang
        total: totalPrice
    });

    alert(`Terima kasih telah berbelanja, ${customerName}. Total: Rp ${totalPrice.toLocaleString()}`);

    // Reset keranjang setelah checkout
    cart = [];
    totalPrice = 0;
    renderCart();

    // Perbarui daftar pelanggan
    renderCustomers();
}
function renderCustomers() {
    const customerList = document.getElementById("customer-list");

    // Kosongkan daftar sebelumnya
    customerList.innerHTML = "";

    // Tambahkan pelanggan ke daftar
    customers.forEach((customer, index) => {
        const li = document.createElement("li");
        li.textContent = `${index + 1}. ${customer.name} - Total: Rp ${customer.total.toLocaleString()} (${customer.items.length} item)`;
        customerList.appendChild(li);
    });
}

window.onclick = function (event) {
    const modal = document.getElementById("cart-modal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
};

function openCustomerList() {
    const modal = document.getElementById("customer-modal");
    const customerList = document.getElementById("customer-list");

    // Kosongkan isi daftar pelanggan sebelumnya
    customerList.innerHTML = "";

    // Tambahkan pelanggan ke daftar
    if (customers.length === 0) {
        customerList.innerHTML = "<li>There are no registered customers yet.</li>";
    } else {
        customers.forEach((customer, index) => {
            const li = document.createElement("li");
            li.textContent = `${index + 1}. ${customer.name} - Total: Rp ${customer.total.toLocaleString()} (${customer.items.length} item)`;
            customerList.appendChild(li);
        });
    }

    // Tampilkan modal
    modal.style.display = "block";
}

function closeCustomerList() {
    const modal = document.getElementById("customer-modal");
    modal.style.display = "none";
}

window.onclick = function (event) {
    const modal = document.getElementById("customer-modal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
};
function logout() {
    // Tambahkan animasi keluar untuk app-container
    const appContainer = document.getElementById("app-container");
    appContainer.classList.remove("fade-in");
    appContainer.classList.add("fade-out");

    // Tampilkan kembali login-container setelah transisi selesai
    setTimeout(() => {
        appContainer.style.display = "none";

        const loginContainer = document.getElementById("login-container");
        loginContainer.style.display = "block";
        loginContainer.classList.remove("fade-out");
        loginContainer.classList.add("fade-in");
    }, 500); // Durasi animasi disesuaikan dengan CSS (0.5s)
}
