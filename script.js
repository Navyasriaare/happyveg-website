
"use strict";


const products = [
    {
        id: 1, name: "Fresh Apples", category: "Fruits",
        description: "Crisp and naturally sweet",
        price: 120, oldPrice: 150, unit: "1 kg", tag: "20% OFF",
        image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 2, name: "Sweet Bananas", category: "Fruits",
        description: "Perfect for everyday snacking",
        price: 50, oldPrice: 60, unit: "1 dozen", tag: "Fresh",
        image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 3, name: "Fresh Oranges", category: "Fruits",
        description: "Juicy citrus goodness",
        price: 90, oldPrice: 110, unit: "1 kg", tag: "18% OFF",
        image: "https://images.unsplash.com/photo-1547514701-42782101795e?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 4, name: "Sweet Mangoes", category: "Fruits",
        description: "Tropical seasonal favourite",
        price: 140, oldPrice: 170, unit: "1 kg", tag: "Seasonal",
        image: "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 5, name: "Fresh Grapes", category: "Fruits",
        description: "Sweet, juicy little bites",
        price: 100, oldPrice: 120, unit: "500 g", tag: "Fresh",
        image: "https://images.unsplash.com/photo-1537640538966-79f369143f8f?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 6, name: "Fresh Strawberries", category: "Fruits",
        description: "Bright and delicious",
        price: 160, oldPrice: 190, unit: "250 g", tag: "Special",
        image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 7, name: "Ripe Papaya", category: "Fruits",
        description: "Naturally sweet tropical fruit",
        price: 60, oldPrice: 75, unit: "1 kg", tag: "Value pick",
        image: "https://images.unsplash.com/photo-1517282009859-f000ec3b26fe?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 8, name: "Fresh Pineapple", category: "Fruits",
        description: "Sweet tropical goodness",
        price: 70, oldPrice: 85, unit: "1 piece", tag: "Fresh",
        image: "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&w=600&q=80"
    },
    

{
  id: 34,
  name: "Sweet Pomegranate",
  category: "Fruits",
  description: "Juicy ruby-red pomegranate",
  price: 100,
  oldPrice: 120,
  unit: "500 g",
  tag: "Fresh",
  image: "https://images.unsplash.com/photo-1541344999736-83eca272f6fc?auto=format&fit=crop&w=600&q=80"
},
{
  id: 35,
  name: "Fresh Pears",
  category: "Fruits",
  description: "Sweet and tender pears",
  price: 130,
  oldPrice: 150,
  unit: "1 kg",
  tag: "Fresh",
  image: "https://images.unsplash.com/photo-1514756331096-242fdeb70d4a?auto=format&fit=crop&w=600&q=80"
},
{
  id: 45,
  name: "Fresh Guava",
  category: "Fruits",
  description: "Fragrant guava with a sweet flavour",
  price: 60,
  oldPrice: 75,
  unit: "500 g",
  tag: "Fresh",
  image: "https://images.unsplash.com/photo-1536511132770-e5058c7e8c46?auto=format&fit=crop&w=600&q=80"
},
{
  id: 46,
  name: "Sweet Sapota",
  category: "Fruits",
  description: "Soft and naturally sweet chikoo",
  price: 70,
  oldPrice: 85,
  unit: "500 g",
  tag: "Popular",
  image: "https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?auto=format&fit=crop&w=600&q=80"
},
{
  id: 47,
  name: "Fresh Kiwi",
  category: "Fruits",
  description: "Tangy green kiwi fruit",
  price: 100,
  oldPrice: 120,
  unit: "3 pieces",
  tag: "Fresh",
  image: "https://images.unsplash.com/photo-1618897996318-5a901fa6ca71?auto=format&fit=crop&w=600&q=80"
},
{
  id: 48,
  name: "Sweet Muskmelon",
  category: "Fruits",
  description: "Aromatic and refreshing muskmelon",
  price: 55,
  oldPrice: 70,
  unit: "1 piece",
  tag: "Seasonal",
  image: "https://images.unsplash.com/photo-1571575173700-afb9492e6a50?auto=format&fit=crop&w=600&q=80"
},
{
  id: 49,
  name: "Fresh Custard Apple",
  category: "Fruits",
  description: "Creamy and naturally sweet sitaphal",
  price: 90,
  oldPrice: 110,
  unit: "500 g",
  tag: "Seasonal",
  image: "https://images.unsplash.com/photo-1604495772376-9657f0035eb5?auto=format&fit=crop&w=600&q=80"
},
{
  id: 32,
  name: "Green Grapes",
  category: "Fruits",
  description: "Sweet seedless green grapes",
  price: 90,
  oldPrice: 110,
  unit: "500 g",
  tag: "Fresh",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCnc7XFuggrc50sBFAoafVzdhXQEutKsfT53gEb77W5A&s=10"
},
{
  id: 36,
  name: "Sweet Watermelon",
  category: "Fruits",
  description: "Refreshing summer watermelon",
  price: 40,
  oldPrice: 50,
  unit: "1 kg",
  tag: "Popular",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVfpqVtLe57MHBSnFDUqsuVlugvPjF7ugVDIK4676_BQ&s=10"
},

    // VEGETABLES
    {
        id: 9, name: "Red Tomatoes", category: "Vegetables",
        description: "Ripe and flavourful",
        price: 35, oldPrice: 45, unit: "1 kg", tag: "Value pick",
        image: "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 10, name: "Fresh Carrots", category: "Vegetables",
        description: "Crunchy kitchen essentials",
        price: 45, oldPrice: 55, unit: "500 g", tag: "Fresh",
        image: "https://images.unsplash.com/photo-1445282768818-728615cc910a?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 11, name: "Garden Potatoes", category: "Vegetables",
        description: "Everyday cooking favourite",
        price: 40, oldPrice: 50, unit: "1 kg", tag: "20% OFF",
        image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 12, name: "Fresh Broccoli", category: "Vegetables",
        description: "Green and versatile",
        price: 80, oldPrice: 95, unit: "500 g", tag: "Fresh",
        image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 13, name: "Red Bell Peppers", category: "Vegetables",
        description: "Colourful and crunchy",
        price: 75, oldPrice: 90, unit: "500 g", tag: "Fresh",
        image: "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 14, name: "Fresh Cucumbers", category: "Vegetables",
        description: "Cool and refreshing",
        price: 30, oldPrice: 40, unit: "500 g", tag: "Value pick",
        image: "https://images.unsplash.com/photo-1604977042946-1eecc30f269e?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 16, name: "Fresh Cauliflower", category: "Vegetables",
        description: "A versatile family favourite",
        price: 45, oldPrice: 60, unit: "1 piece", tag: "Fresh",
        image: "https://images.unsplash.com/photo-1568584711075-3d021a7c3ca3?auto=format&fit=crop&w=600&q=80"
    },
    

{
  id: 19,
  name: "Green Beans",
  category: "Vegetables",
  description: "Tender green beans",
  price: 45,
  oldPrice: 55,
  unit: "500 g",
  tag: "Fresh",
  image: "https://images.unsplash.com/photo-1567375698348-5d9d5ae99de0?auto=format&fit=crop&w=600&q=80"
},


{
  id: 23,
  name: "Sweet Corn",
  category: "Vegetables",
  description: "Sweet and tender corn",
  price: 30,
  oldPrice: 40,
  unit: "2 pieces",
  tag: "Popular",
  image: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=600&q=80"
},
{
  id: 50,
  name: "Drumsticks",
  category: "Vegetables",
  description: "Fresh moringa pods for curries and sambar",
  price: 40,
  oldPrice: 50,
  unit: "250 g",          
  tag: "Farm fresh",
  image: "https://organicbazar.net/cdn/shop/products/Untitled-design-2022-06-05T111342.081.jpg?v=1771571732&width=1445"
},
{
  id: 51,
  name: "Fresh Bottle Gourd",
  category: "Vegetables",
  description: "Tender lauki for everyday cooking",
  price: 35,
  oldPrice: 45,
  unit: "1 piece",
  tag: "Fresh",
  image: "https://casadeamor.in/cdn/shop/products/BottleGourdLong-2.jpg?v=1665817527&width=1445"
},
{
  id: 52,
  name: "Bitter Gourd",
  category: "Vegetables",
  description: "Fresh karela for traditional recipes",
  price: 40,
  oldPrice: 50,
  unit: "500 g",
  tag: "Fresh",
  image: "https://organicbazar.net/cdn/shop/files/White_Bitter_Gourd.jpg?v=1758200957&width=1445"
},
{
  id: 53,
  name: "Snake Gourd",
  category: "Vegetables",
  description: "Tender snake gourd for Indian curries",
  price: 35,
  oldPrice: 45,
  unit: "500 g",
  tag: "Farm fresh",
  image: "https://satvafarm.com/cdn/shop/files/snakegourd_65a7734d-87eb-4a02-a8fd-a6946e1f0535.jpg?v=1737359125"
},
{
  id: 54,
  name: "Raw Banana",
  category: "Vegetables",
  description: "Green plantain for fries and curries",
  price: 30,
  oldPrice: 40,
  unit: "500 g",
  tag: "Fresh",
  image: "https://choosemyfresh.com/image/cache/catalog/vegetables/raw_banana-900x614.png"
},
{
  id: 55,
  name: "Fresh Tindora",
  category: "Vegetables",
  description: "Crisp ivy gourd for stir-fries",
  price: 40,
  oldPrice: 50,
  unit: "250 g",
  tag: "Popular",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT23b70sKFDjAid9She5snjSyYPwuHMfSAkDQOgjxgvg&s=10"
},
{
  id: 56,
  name: "Cluster Beans",
  category: "Vegetables",
  description: "Fresh gawar beans for home cooking",
  price: 35,
  oldPrice: 45,
  unit: "500 g",
  tag: "Fresh",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWpX9u-_mTSFCoYJrpwn6B1_jN2RoGA_IIpUHffnzuOQ&s=10"
},
{
  id: 57,
  name: "Fresh Ash Gourd",
  category: "Vegetables",
  description: "Mild-flavoured winter melon",
  price: 30,
  oldPrice: 40,
  unit: "1 kg",
  tag: "Farm fresh",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0gpNmlB6eMdxSYhe52rS8OE9e6U6QuHXnz920HxsVVg&s=10"
},
{
  id: 41,
  name: "Fresh Beetroot",
  category: "Vegetables",
  description: "Earthy and colourful beetroot",
  price: 35,
  oldPrice: 45,
  unit: "500 g",
  tag: "Fresh",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4ewv1dBUqwOPcIH5vfB5k4FLpCULOzHNJTK1In9IcCA&s=10"
},
{
  id: 43,
  name: "Fresh Radish",
  category: "Vegetables",
  description: "Crunchy fresh radish",
  price: 25,
  oldPrice: 35,
  unit: "500 g",
  tag: "Value pick",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRylKxLCJK9PeGpDHfQCYge_RcZqZnMA21s7ydm5LyMdg&s=10"
},


    // LEAFY GREENS
    {
        id: 24, name: "Fresh Spinach", category: "Leafy Greens",
        description: "Tender, nutritious green leaves",
        price: 25, oldPrice: 30, unit: "1 bunch", tag: "Farm fresh",
        image: "https://images.unsplash.com/photo-1574316071802-0d684efa7bf5?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 25, name: "Fresh Lettuce", category: "Leafy Greens",
        description: "Crisp leaves for salads",
        price: 35, oldPrice: 45, unit: "1 bunch", tag: "Fresh",
        image: "https://images.unsplash.com/photo-1556801712-76c8eb07bbc9?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 26, name: "Green Mint", category: "Leafy Greens",
        description: "Aromatic leaves for chutneys",
        price: 15, oldPrice: 20, unit: "1 bunch", tag: "Fresh",
        image: "https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 27, name: "Fresh Kale", category: "Leafy Greens",
        description: "Hearty green leafy vegetable",
        price: 50, oldPrice: 65, unit: "1 bunch", tag: "Green pick",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-OEIljXehhHUhVu73LvvXKCzlVTaaCq7zzjM7AhvydA&s=10"
    },
    {
        id: 28, name: "Green Fenugreek", category: "Leafy Greens",
        description: "Fresh methi leaves",
        price: 20, oldPrice: 25, unit: "1 bunch", tag: "Fresh",
        image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&w=600&q=80"
    },
    {
  id: 58,
  name: "Amaranth Leaves",
  category: "Leafy Greens",
  description: "Fresh thotakura leaves",
  price: 20,
  oldPrice: 25,
  unit: "1 bunch",
  tag: "Farm fresh",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-aZ-ePkXnKbs-wJ6g0nmMnInb1vP96SlpODCIWY-Jiq0kgvisSuQS9sET&s=10"
},
{
  id: 59,
  name: "Fenugreek Leaves",
  category: "Leafy Greens",
  description: "Fresh methi leaves for curries and parathas",
  price: 20,
  oldPrice: 30,
  unit: "1 bunch",
  tag: "Fresh",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPxlrrezoKl199DqPUmlstXIOiFk-e0_UrtMHctHRJDA&s=10"
},
{
  id: 60,
  name: "Drumstick Leaves",
  category: "Leafy Greens",
  description: "Fresh moringa leaves",
  price: 25,
  oldPrice: 35,
  unit: "1 bunch",
  tag: "Farm fresh",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9yAfQY-RiJBHZYR1mMKctmbxh3ImRCQfP2y10WbI66Q&s"
},
{
  id: 61,
  name: "Gongura Leaves",
  category: "Leafy Greens",
  description: "Tangy sorrel leaves for Andhra-style dishes",
  price: 20,
  oldPrice: 30,
  unit: "1 bunch",
  tag: "Regional favourite",
  image: "https://bhoomifresh.com/image/cache/catalog/Leaves%20and%20Leafy%20Vegetable/gongura-1000x606.jpg"
},
{
  id: 62,
  name: "Curry Leaves",
  category: "Leafy Greens",
  description: "Aromatic leaves for seasoning",
  price: 15,
  oldPrice: 20,
  unit: "1 bunch",
  tag: "Fresh",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFpY9a5LBz8COXreswq7pACQfF2JuPAHTypJDe3iHyiw&s=10"
},
{
  id: 63,
  name: "Malabar Spinach",
  category: "Leafy Greens",
  description: "Fresh bachali kura leaves",
  price: 25,
  oldPrice: 35,
  unit: "1 bunch",
  tag: "Farm fresh",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCJCUCQgl14UwLU7VPG2V193N1PxBoGDZwsIiAgPjbqA&s=10"
},
{
  id: 64,
  name: "Dill Leaves",
  category: "Leafy Greens",
  description: "Fresh aromatic dill greens",
  price: 20,
  oldPrice: 30,
  unit: "1 bunch",
  tag: "Fresh",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiaHC_414EJ8__Z-Zifi2Jjdr7m_-b3UVfnpFy6akS8A&s=10"
},
{
  id: 65,
  name: "Basella Leaves",
  category: "Leafy Greens",
  description: "Tender Indian vine spinach",
  price: 25,
  oldPrice: 35,
  unit: "1 bunch",
  tag: "Fresh",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTXvGuo5jO-FnaMkDexx_L0m-DUEMeut3D0W12snyD0A&s=10"
},

    // DAIRY
    {
        id: 29, name: "Fresh Milk", category: "Dairy",
        description: "Everyday dairy essential",
        price: 32, oldPrice: 36, unit: "500 ml", tag: "Popular",
        image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 30, name: "Creamy Butter", category: "Dairy",
        description: "Rich and creamy flavour",
        price: 58, oldPrice: 65, unit: "100 g", tag: "Fresh",
        image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 31, name: "Natural Yogurt", category: "Dairy",
        description: "Smooth and creamy",
        price: 40, oldPrice: 48, unit: "400 g", tag: "Special",
        image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 32, name: "Cheddar Cheese", category: "Dairy",
        description: "A tasty everyday favourite",
        price: 110, oldPrice: 130, unit: "200 g", tag: "15% OFF",
        image: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 33, name: "Fresh Paneer", category: "Dairy",
        description: "Soft cubes for Indian meals",
        price: 90, oldPrice: 105, unit: "200 g", tag: "Popular",
        image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 34, name: "Fresh Cream", category: "Dairy",
        description: "Smooth cream for cooking",
        price: 65, oldPrice: 75, unit: "200 ml", tag: "Fresh",
        image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=600&q=80"
    }
    
];

let currentCategory = "All";
let currentSearch = "";
let showWishlistOnly = false;

const cart = new Map();
const wishlist = new Set();

const productGrid = document.getElementById("productGrid");
const productHeading = document.getElementById("productHeading");
const productSubheading = document.getElementById("productSubheading");
const emptyMessage = document.getElementById("emptyMessage");
const searchInput = document.getElementById("searchInput");
const toastElement = document.getElementById("toast");

let toastTimer;

function money(amount) {
    return "₹" + amount.toLocaleString("en-IN");
}

function notify(message) {
    toastElement.textContent = message;
    toastElement.classList.add("show");

    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
        toastElement.classList.remove("show");
    }, 2400);
}

function updateCounters() {
    const totalCart = [...cart.values()].reduce(
        (sum, quantity) => sum + quantity, 0
    );

    document.getElementById("cartCount").textContent = totalCart;
    document.getElementById("wishlistCount").textContent = wishlist.size;
}

function renderProducts() {
    let filtered = products.filter(product => {
        const categoryMatch =
            currentCategory === "All" ||
            product.category === currentCategory;

        const searchText =
            `${product.name} ${product.category} ${product.description}`.toLowerCase();

        const searchMatch = searchText.includes(currentSearch.toLowerCase());

        const wishlistMatch =
            !showWishlistOnly || wishlist.has(product.id);

        return categoryMatch && searchMatch && wishlistMatch;
    });

    const titles = {
        "All": "Fresh picks for you",
        "Fruits": "Fresh and juicy fruits",
        "Vegetables": "Garden-fresh vegetables",
        "Leafy Greens": "Fresh leafy greens",
        "Dairy": "Everyday dairy essentials"
    };

    productHeading.textContent = showWishlistOnly
        ? "Your wishlist"
        : (titles[currentCategory] || "Fresh picks for you");

    productSubheading.textContent = showWishlistOnly
        ? "Your saved favourites, all in one place."
        : "Bring natural goodness to your everyday meals.";

    productGrid.innerHTML = "";

    emptyMessage.hidden = filtered.length > 0;

    filtered.forEach(product => {
        const isLiked = wishlist.has(product.id);

        const card = document.createElement("article");
        card.className = "product-card";

        card.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}"
                     loading="lazy">
                <span class="product-tag">${product.tag}</span>
                <button class="wishlist-toggle ${isLiked ? "liked" : ""}"
                        data-wishlist="${product.id}"
                        aria-label="${isLiked ? "Remove from" : "Add to"} wishlist"
                        title="Toggle wishlist">
                    ${isLiked ? "♥" : "♡"}
                </button>
            </div>
            <div class="product-info">
                <span class="product-category">${product.category}</span>
                <h3>${product.name}</h3>
                <p class="product-description">
                    ${product.description} · ${product.unit}
                </p>
                <div class="product-bottom">
                    <div class="product-price">
                        ${money(product.price)}
                        <del>${money(product.oldPrice)}</del>
                    </div>
                    <button class="add-button" data-add="${product.id}">
                        ${cart.has(product.id) ? "Add more +" : "+ Add"}
                    </button>
                </div>
            </div>
        `;

        productGrid.appendChild(card);
    });
}

function setCategory(category) {
    currentCategory = category;
    currentSearch = "";
    searchInput.value = "";
    showWishlistOnly = false;

    document.querySelectorAll(".filter-chip").forEach(button => {
        button.classList.toggle(
            "selected",
            button.dataset.filter === category
        );
    });

    document.querySelectorAll(".nav-link").forEach(link => {
        link.classList.toggle(
            "active",
            link.dataset.navCategory === category ||
            (!link.dataset.navCategory && category === "All" &&
             link.getAttribute("href") === "#home")
        );
    });

    renderProducts();
}

function addToCart(id) {
    const product = products.find(item => item.id === id);
    if (!product) return;

    cart.set(id, (cart.get(id) || 0) + 1);

    updateCounters();
    renderProducts();
    notify(`${product.name} added to your cart.`);
}

function toggleWishlist(id) {
    const product = products.find(item => item.id === id);
    if (!product) return;

    if (wishlist.has(id)) {
        wishlist.delete(id);
        notify(`${product.name} removed from wishlist.`);
    } else {
        wishlist.add(id);
        notify(`${product.name} saved to wishlist.`);
    }

    updateCounters();
    renderProducts();
}

function runSearch() {
    currentSearch = searchInput.value.trim();
    currentCategory = "All";
    showWishlistOnly = false;

    document.querySelectorAll(".filter-chip").forEach(button => {
        button.classList.toggle(
            "selected",
            button.dataset.filter === "All"
        );
    });

    renderProducts();
    document.getElementById("products").scrollIntoView({
        behavior: "smooth"
    });
}

document.getElementById("searchButton").addEventListener("click", runSearch);

searchInput.addEventListener("keydown", event => {
    if (event.key === "Enter") runSearch();
});

searchInput.addEventListener("input", () => {
    currentSearch = searchInput.value.trim();
    currentCategory = "All";
    showWishlistOnly = false;

    document.querySelectorAll(".filter-chip").forEach(button => {
        button.classList.toggle("selected", button.dataset.filter === "All");
    });

    renderProducts();
});

document.getElementById("filterBar").addEventListener("click", event => {
    const button = event.target.closest("[data-filter]");
    if (button) setCategory(button.dataset.filter);
});

document.querySelectorAll("[data-category]").forEach(button => {
    button.addEventListener("click", () => {
        setCategory(button.dataset.category);
        document.getElementById("products").scrollIntoView({
            behavior: "smooth"
        });
    });
});

document.querySelectorAll("[data-nav-category]").forEach(link => {
    link.addEventListener("click", () => {
        setCategory(link.dataset.navCategory);
    });
});

document.querySelectorAll("[data-footer-category]").forEach(link => {
    link.addEventListener("click", () => {
        setCategory(link.dataset.footerCategory);
    });
});

productGrid.addEventListener("click", event => {
    const addButton = event.target.closest("[data-add]");
    const wishlistButton = event.target.closest("[data-wishlist]");

    if (addButton) addToCart(Number(addButton.dataset.add));

    if (wishlistButton) {
        toggleWishlist(Number(wishlistButton.dataset.wishlist));
    }
});

document.getElementById("showAllButton").addEventListener("click", () => {
    setCategory("All");
    document.getElementById("products").scrollIntoView({
        behavior: "smooth"
    });
});

document.getElementById("wishlistButton").addEventListener("click", () => {
    showWishlistOnly = true;
    currentCategory = "All";
    currentSearch = "";
    searchInput.value = "";

    document.querySelectorAll(".filter-chip").forEach(button => {
        button.classList.toggle("selected", button.dataset.filter === "All");
    });

    renderProducts();
    document.getElementById("products").scrollIntoView({
     behavior: "smooth"
    });

    if (wishlist.size === 0) {
        notify("Your wishlist is empty. Tap ♡ on a product to save it.");
    }
});

/* HAPPYVEG CART PAGE — replaces the old alert cart */

function openHappyVegCart() {
    let cartPage = document.getElementById("happyVegCartPage");

    if (!cartPage) {
        cartPage = document.createElement("section");
        cartPage.id = "happyVegCartPage";

        Object.assign(cartPage.style, {
            position: "fixed",
            inset: "0",
            zIndex: "99999",
            overflowY: "auto",
            background: "#f7faf5",
            padding: "24px",
            boxSizing: "border-box",
            fontFamily: "inherit",
            color: "#253b2b"
        });

        document.body.appendChild(cartPage);
    }

    function renderCartPage() {
        const items = [...cart.entries()]
            .map(([id, quantity]) => ({
                product: products.find(item => item.id === id),
                quantity
            }))
            .filter(item => item.product);

        const subtotal = items.reduce(
            (sum, item) => sum + item.product.price * item.quantity,
            0
        );

        const delivery = items.length ? 30 : 0;
        const total = subtotal + delivery;

        cartPage.innerHTML = `
            <div style="max-width:1000px;margin:auto;">
                <button id="closeHappyVegCart"
                    style="border:0;background:#e5efdf;padding:12px 18px;
                    border-radius:10px;cursor:pointer;font-size:15px;">
                    ← Continue Shopping
                </button>

                <h1 style="color:#287a38;margin:28px 0 8px;">
                    Your Shopping Cart
                </h1>

                <p style="color:#647467;margin-bottom:28px;">
                    Fresh picks, ready for your home.
                </p>

                ${
                    items.length === 0
                    ? `<div style="background:white;padding:35px;border-radius:16px;
                        text-align:center;">
                        <h2>Your cart is empty 🛒</h2>
                        <p>Add fresh products to get started.</p>
                    </div>`
                    : `
                    <div style="display:grid;grid-template-columns:
                        repeat(auto-fit,minmax(min(100%,320px),1fr));
                        gap:24px;align-items:start;">

                        <div style="display:grid;gap:15px;">
                            ${items.map(({ product, quantity }) => `
                                <article style="background:white;padding:16px;
                                    border-radius:16px;display:flex;gap:15px;
                                    align-items:center;flex-wrap:wrap;
                                    box-shadow:0 3px 14px #183b1810;">

                                    <img src="${product.image}"
                                        alt="${product.name}"
                                        style="width:95px;height:95px;
                                        object-fit:cover;border-radius:12px;">

                                    <div style="flex:1;min-width:130px;">
                                        <h3 style="margin:0 0 6px;">
                                            ${product.name}
                                        </h3>

                                        <p style="margin:0 0 10px;color:#657568;">
                                            ${product.unit}
                                        </p>

                                        <strong style="color:#287a38;">
                                            ${money(product.price * quantity)}
                                        </strong>

                                        <div style="display:flex;align-items:center;
                                            gap:10px;margin-top:12px;">

                                            <button data-cart-action="decrease"
                                                data-id="${product.id}"
                                                aria-label="Decrease quantity"
                                                style="width:32px;height:32px;
                                                border:1px solid #dce5d8;
                                                background:white;border-radius:8px;
                                                cursor:pointer;">−</button>

                                            <span>${quantity}</span>

                                            <button data-cart-action="increase"
                                                data-id="${product.id}"
                                                aria-label="Increase quantity"
                                                style="width:32px;height:32px;
                                                border:1px solid #dce5d8;
                                                background:white;border-radius:8px;
                                                cursor:pointer;">+</button>

                                            <button data-cart-action="remove"
                                                data-id="${product.id}"
                                                style="border:0;background:none;
                                                color:#c0392b;cursor:pointer;
                                                margin-left:5px;">
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                </article>
                            `).join("")}
                        </div>

                        <aside style="background:white;padding:24px;
                            border-radius:16px;box-shadow:0 3px 14px #183b1810;">
                            <h2 style="margin-top:0;">Order Summary</h2>

                            <div style="display:flex;justify-content:space-between;
                                margin:18px 0;">
                                <span>Subtotal</span>
                                <strong>${money(subtotal)}</strong>
                            </div>

                            <div style="display:flex;justify-content:space-between;
                                margin:18px 0;">
                                <span>Delivery fee</span>
                                <strong>${money(delivery)}</strong>
                            </div>

                            <hr style="border:0;border-top:1px solid #e5eae2;">

                            <div style="display:flex;justify-content:space-between;
                                margin:20px 0;font-size:19px;">
                                <strong>Total</strong>
                                <strong style="color:#287a38;">
                                    ${money(total)}
                                </strong>
                            </div>

                            <button id="happyVegCheckout"
                                style="width:100%;padding:15px;background:#287a38;
                                color:white;border:0;border-radius:10px;
                                font-size:16px;font-weight:bold;cursor:pointer;">
                                Proceed to Checkout
                            </button>

                            <p style="font-size:12px;color:#718071;
                                line-height:1.5;margin-bottom:0;">
                                Demo checkout only. Online payment and order
                                placement are not connected yet.
                            </p>
                        </aside>
                    </div>
                    `
                }
            </div>
        `;

        document.getElementById("closeHappyVegCart")
            .addEventListener("click", () => {
                cartPage.remove();
                renderProducts();
            });

        cartPage.querySelectorAll("[data-cart-action]").forEach(button => {
            button.addEventListener("click", () => {
                const id = Number(button.dataset.id);
                const action = button.dataset.cartAction;
                const quantity = cart.get(id) || 0;

                if (action === "increase") {
                    cart.set(id, quantity + 1);
                } else if (action === "decrease") {
                    if (quantity <= 1) {
                        cart.delete(id);
                    } else {
                        cart.set(id, quantity - 1);
                    }
                } else if (action === "remove") {
                    cart.delete(id);
                }

                updateCounters();
                renderProducts();
                renderCartPage();
            });
        });

        const checkoutButton =
            document.getElementById("happyVegCheckout");

        if (checkoutButton) {
            checkoutButton.addEventListener("click", renderCheckoutPage);
        }
    }

    function renderCheckoutPage() {
        if (cart.size === 0) {
            renderCartPage();
            notify("Your cart is empty. Add some fresh products first.");
            return;
        }

        const items = [...cart.entries()]
            .map(([id, quantity]) => ({
                product: products.find(item => item.id === id),
                quantity
            }))
            .filter(item => item.product);

        const subtotal = items.reduce(
            (sum, item) => sum + item.product.price * item.quantity,
            0
        );
        const delivery = items.length ? 30 : 0;
        const total = subtotal + delivery;

        cartPage.innerHTML = `
            <div style="max-width:700px;margin:auto;">
                <button id="backToHappyVegCart"
                    style="border:0;background:#e5efdf;padding:12px 18px;
                    border-radius:10px;cursor:pointer;font-size:15px;">
                    ← Back to Cart
                </button>

                <h1 style="color:#287a38;margin:28px 0 8px;">
                    Checkout
                </h1>
                <p style="color:#647467;margin-bottom:24px;">
                    Enter your delivery details to place your demo order.
                </p>

                <form id="happyVegCheckoutForm"
                    style="background:white;padding:24px;border-radius:16px;
                    box-shadow:0 3px 14px #183b1810;display:grid;gap:16px;">
                    <label style="display:grid;gap:6px;">
                        Full name
                        <input name="name" type="text" autocomplete="name"
                            required maxlength="100"
                            style="padding:12px;border:1px solid #dce5d8;
                            border-radius:8px;">
                    </label>

                    <label style="display:grid;gap:6px;">
                        Phone number
                        <input name="phone" type="tel" autocomplete="tel"
                            required maxlength="30"
                            style="padding:12px;border:1px solid #dce5d8;
                            border-radius:8px;">
                    </label>

                    <label style="display:grid;gap:6px;">
                        Delivery address
                        <textarea name="address" autocomplete="street-address"
                            required maxlength="300" rows="3"
                            style="padding:12px;border:1px solid #dce5d8;
                            border-radius:8px;resize:vertical;"></textarea>
                    </label>

                    <div style="padding:16px;background:#f7faf5;border-radius:10px;">
                        <strong>Order total: ${money(total)}</strong>
                        <p style="margin-top:6px;color:#647467;">
                            Payment: Cash on delivery (demo only)
                        </p>
                    </div>

                    <button type="submit"
                        style="width:100%;padding:15px;background:#287a38;
                        color:white;border:0;border-radius:10px;
                        font-size:16px;font-weight:bold;cursor:pointer;">
                        Place Demo Order
                    </button>
                    <p style="font-size:12px;color:#718071;line-height:1.5;">
                        This demo records the order only in this browser session.
                        No payment will be taken and no delivery will be scheduled.
                    </p>
                </form>
            </div>
        `;

        cartPage.querySelector("#backToHappyVegCart")
            .addEventListener("click", renderCartPage);

        cartPage.querySelector("#happyVegCheckoutForm")
            .addEventListener("submit", event => {
                event.preventDefault();

                const formData = new FormData(event.currentTarget);
                const customerName = formData.get("name").trim();
                const phone = formData.get("phone").trim();
                const address = formData.get("address").trim();

                if (!customerName || !phone || !address || items.length === 0) {
                    notify("Please complete all delivery details.");
                    return;
                }

                const orderId = `HVG-${Date.now().toString().slice(-8)}`;
                cart.clear();
                updateCounters();
                renderProducts();

                cartPage.innerHTML = `
                    <div style="max-width:700px;margin:40px auto;background:white;
                        padding:32px;border-radius:16px;text-align:center;
                        box-shadow:0 3px 14px #183b1810;">
                        <h1 style="color:#287a38;">Order placed!</h1>
                        <p style="margin:12px 0 20px;">
                            Thank you, <strong id="happyVegCustomerName"></strong>.
                        </p>
                        <p>Demo order number:
                            <strong id="happyVegOrderId"></strong>
                        </p>
                        <p style="margin-top:8px;">
                            Delivery address:
                            <span id="happyVegOrderAddress"></span>
                        </p>
                        <p style="margin-top:8px;">
                            Contact number:
                            <span id="happyVegOrderPhone"></span>
                        </p>
                        <div style="margin:24px 0;text-align:left;">
                            <h2 style="margin-bottom:10px;">Order summary</h2>
                            <ul id="happyVegOrderItems"
                                style="padding-left:22px;"></ul>
                            <p style="margin-top:12px;">
                                <strong>Total (including delivery):
                                    ${money(total)}</strong>
                            </p>
                        </div>
                        <p style="font-size:13px;color:#718071;margin-bottom:20px;">
                            This is a demo confirmation only. The order was not
                            sent to a store and no payment or delivery is arranged.
                        </p>
                        <button id="finishHappyVegOrder"
                            style="padding:13px 20px;background:#287a38;
                            color:white;border:0;border-radius:10px;
                            font-size:16px;font-weight:bold;cursor:pointer;">
                            Continue Shopping
                        </button>
                    </div>
                `;

                cartPage.querySelector("#happyVegCustomerName").textContent =
                    customerName;
                cartPage.querySelector("#happyVegOrderId").textContent = orderId;
                cartPage.querySelector("#happyVegOrderAddress").textContent =
                    address;
                cartPage.querySelector("#happyVegOrderPhone").textContent = phone;

                const orderItems = cartPage.querySelector("#happyVegOrderItems");
                items.forEach(({ product, quantity }) => {
                    const listItem = document.createElement("li");
                    listItem.textContent =
                        `${product.name} × ${quantity} — ${money(product.price * quantity)}`;
                    orderItems.appendChild(listItem);
                });

                cartPage.querySelector("#finishHappyVegOrder")
                    .addEventListener("click", () => {
                        cartPage.remove();
                        renderProducts();
                    });
            });
    }

    renderCartPage();
}

document.getElementById("cartButton").addEventListener("click", () => {
    if (cart.size === 0) {
        notify("Your cart is empty. Add some fresh products first.");
        return;
    }

    openHappyVegCart();
});

document.getElementById("newsletterForm").addEventListener("submit", event => {
    event.preventDefault();

    const email = document.getElementById("newsletterEmail").value.trim();

    if (email) {
        notify("Thank you! This demo has recorded your signup locally for this session.");
        event.target.reset();
    }
});

// Countdown: ends at midnight at the end of the next seven-day period.
// This is a demo deadline, not a server-verified offer.
function getOfferDeadline() {
    const deadline = new Date();
    deadline.setDate(deadline.getDate() + 7);
    deadline.setHours(23, 59, 59, 999);
    return deadline;
}

const offerDeadline = getOfferDeadline();

function updateCountdown() {
    const remaining = Math.max(0, offerDeadline.getTime() - Date.now());

    const days = Math.floor(remaining / 86400000);
    const hours = Math.floor((remaining % 86400000) / 3600000);
    const minutes = Math.floor((remaining % 3600000) / 60000);
    const seconds = Math.floor((remaining % 60000) / 1000);

    document.getElementById("days").textContent = String(days).padStart(2, "0");
    document.getElementById("hours").textContent = String(hours).padStart(2, "0");
    document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
    document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
}

document.getElementById("year").textContent = new Date().getFullYear();

renderProducts();
updateCounters();
updateCountdown();
setInterval(updateCountdown, 1000);
