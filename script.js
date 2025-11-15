/* PRICE SORT FUNCTION */
function sortProducts() {
    let type = document.getElementById("sort").value;

    let container = document.getElementById("product-list");
    let cards = Array.from(container.getElementsByClassName("card"));

    if (type === "asc") {
        cards.sort((a, b) => a.dataset.price - b.dataset.price);
    } 
    else if (type === "desc") {
        cards.sort((a, b) => b.dataset.price - a.dataset.price);
    } 
    else {
        window.location.reload();
        return;
    }

    cards.forEach(c => container.appendChild(c));
}

/* CART COUNTER (FAKE DISPLAY) */
let cartCount = 0;

document.querySelectorAll(".whatsapp-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        cartCount++;
        document.getElementById("cart-counter").innerText = cartCount;
    });
});

/* PAGINATION */
const productsPerPage = 6;
const products = document.querySelectorAll("#product-list .card");
const pagination = document.getElementById("pagination");

let currentPage = 1;

function showPage(page) {
    currentPage = page;
    let start = (page - 1) * productsPerPage;
    let end = start + productsPerPage;

    products.forEach((p, index) => {
        p.style.display = index >= start && index < end ? "block" : "none";
    });

    updateButtons();
}

function updateButtons() {
    let totalPages = Math.ceil(products.length / productsPerPage);
    pagination.innerHTML = "";

    for (let i = 1; i <= totalPages; i++) {
        let btn = document.createElement("button");
        btn.innerText = i;
        btn.onclick = () => showPage(i);

        if (i === currentPage) btn.style.background = "#ff7700";

        pagination.appendChild(btn);
    }
}

showPage(1);
