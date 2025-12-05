// PRODUCT DATA
const products = [
    { name: "Samsung Mobile", price: "₹14,999", img: "https://m.media-amazon.com/images/I/61-FxePR8IL._SX679_.jpg" },
    { name: "HP Laptop", price: "₹42,990", img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQfj43Rpnm7K1eDhDWnp3W9i98UMoj5mWK7BVOz4XOF2mZFRwnb59onGk5BGoDpeLhjuoq4-08vMAJjio5upCXLSBThaiAF-I87XLznlvy4EGd7FarPFXaNXXfHHLVj33JXXYS5I4w&usqp=CAc" },
    { name: "Nike Shoes", price: "₹3,499", img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS7b0eO6aG6zPXfqNldtzpNo627ffFA8G_ZERvKphWIaDN8C26nnTttDM4KBEaaRT6qdzSqbt8JmpjIIYQB9JWwkOHCTmwuLv0gogbF8ih-avGWJwVklu7GxI4zb--rXkWPWtFb-yd7jg&usqp=CAc" },
    { name: "Fossil Watch", price: "₹7,999", img: "https://m.media-amazon.com/images/I/511gjZkDbPL._SX522_.jpg" },
    { name: "Men T-Shirt", price: "₹799", img: "https://m.media-amazon.com/images/I/61tlMuthl7L._SY741_.jpg" },
    { name: "Backpack", price: "₹1,299", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8rp99pKL3Whz6RCjXs1My2SeigE6JMOGXtA&s" },
    { name: "Wireless Headphones", price: "₹1,599", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYfi82kJce-ESMFdPsbnJFXzmodXNQ4Xw6wQ&s" },
    { name: "Formal Shirt", price: "₹899", img: "https://m.media-amazon.com/images/I/71h97etR+QL._SX679_.jpg" },
    { name: "Adidas Sneakers", price: "₹3,299", img: "https://m.media-amazon.com/images/I/61-Fwxg6QiL._SY625_.jpg" },
    { name: "Leather Wallet", price: "₹699", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqBLcNwleADCbLSUqm_tGIpgUnHQxNoyBdKQ&s" },
    { name: "Wireless Earbuds", price: "₹1,299", img: "https://m.media-amazon.com/images/I/31MmsTHz2LL._SY300_SX300_QL70_FMwebp_.jpg" },
    { name: "Gold Bracelet", price: "₹2,999", img: "https://m.media-amazon.com/images/I/61ZA8HxShqL._AC_UL480_FMwebp_QL65_.jpg" },
    { name: "Harry Potter Book", price: "₹499", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/book/z/b/r/harry-potter-y-la-camara-secreta-harry-potter-and-the-chamber-of-original-imah7tw8nkbfjmfr.jpeg?q=70" },
    { name: "Coffee Mug", price: "₹299", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/mug/p/0/e/coffermug1-350-1-costly-textiles-original-imahfdk3etnrruhg.jpeg?q=70" },
    { name: "Mechanical Keyboard", price: "₹2,199", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/keyboard/gaming-keyboard/m/v/g/katana-x2-mechanical-evofox-original-imahexbuh2yy8zzh.jpeg?q=70" },
    { name: "Women T-shirt", price: "₹999", img: "https://m.media-amazon.com/images/I/61kU3ZBEIPL._SX679_.jpg" },
    { name: "Stylish Mouse", price: "₹699", img: "https://m.media-amazon.com/images/I/611JqBEuHaL._SX522_.jpg" },
    { name: "Bluetooth Speaker", price: "₹1,899", img: "https://m.media-amazon.com/images/I/718mnMXpj5L._AC_UY327_FMwebp_QL65_.jpg" },
    { name: "Smart Watch", price: "₹2,499", img: "https://m.media-amazon.com/images/I/71fB0uPgnIL._SX679_.jpg" },
    { name: "Powerbank", price: "₹1,299", img: "https://m.media-amazon.com/images/I/51wVOEHrpmL._SX679_.jpg" }
  ];
  
  
  // LOAD PRODUCTS
  const container = document.getElementById("productContainer");
  
  products.forEach(p => {
    container.innerHTML += `
      <div class="card">
        <img src="${p.img}">
        <h3>${p.name}</h3>
        <p><b>${p.price}</b></p>
        <button onclick="showPopup('${p.name}','${p.price}','${p.img}')">Add to Cart</button>
      </div>
    `;
  });
  
  
  // SEARCH FUNCTION
  function searchProduct() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let cards = document.querySelectorAll(".card");
  
    cards.forEach(card => {
      let text = card.innerText.toLowerCase();
      card.style.display = text.includes(input) ? "block" : "none";
    });
  }
  
  
  // POPUP
  function showPopup(title, price, img) {
    document.getElementById("popupTitle").innerText = title;
    document.getElementById("popupPrice").innerText = price;
    document.getElementById("popupImg").src = img;
    document.getElementById("popup").style.display = "flex";
  }
  
  function closePopup() {
    document.getElementById("popup").style.display = "none";
  }
