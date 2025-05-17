  // Demo Products (Replace with localStorage logic if needed)
  const demoProducts = [
       { id: 1, name: "HP Elite Pro", price: 1800, image: "images/IMG-20250504-WA0044.jpg", category: "laptops", description: "High-performance HP laptop built for professionalsand has acamera." },
    { id: 2, name: "Galaxy Buds Pro", price: 120, image: "images/WhatsApp Image 2025-05-05 at 09.05.43_e9bfb04f.jpg", category: "audio", description: "Wireless earbuds with noise cancellation and rich sound." },
    { id: 3, name: "Samsung Galaxy S21", price: 899, image: "images/file-UeAzi4X2Z6x5Y5YsLEqaZ1.webp", category: "phones", description: "Flagship phone with top-tier display and camera." },
    { id: 4, name: "PlayStation 5", price: 586, image: "images/IMG-20250504-WA0033.jpg", category: "gaming", description: "Next-gen gaming console with immersive performance." },
    { id: 5, name: "Macbook Pro M2", price: 1300, image: "images/IMG-20250504-WA0046.jpg", category: "laptops", description: "Apple’s most powerful laptop for creative work." },
    { id: 6, name: "OnePlus 11", price: 649, image: "images/phone.14.webp", category: "phones", description: "Blazing fast phone with flagship specs." },
    { id: 7, name: "Anker PowerCore", price: 80, image: "images/WhatsApp Image 2025-05-05 at 15.36.52_b13f3629.jpg", category: "powerbanks", description: "Portable power bank with fast charging support." },
    { id: 8, name: "amazon Dot 5", price: 50, image: "images/WhatsApp Image 2025-05-05 at 09.06.26_33d86105.jpg", category: "smarthome-gadgets", description: "Compact smart speaker with Alexa voice assistant." },
    { id: 9, name: "Sony WH-1000XM5", price: 320, image: "images/IMG-20250504-WA0039.jpg", category: "audio", description: "Industry-leading noise-canceling over-ear headphones." },
    { id: 10, name: "Redmagic 8 Pro", price: 750, image: "images/phone-nova.webp", category: "gaming", description: "Gaming smartphone with cooling system and AMOLED display." },
    { id: 11, name: "Lenovo XPS 15", price: 1700, image: "images/IMG-20250504-WA0043.jpg", category: "laptops", description: "Ultra-slim laptop with stunning 4K touchscreen." },
    { id: 12, name: "Google Pixel 7", price: 699, image: "images/phone.2.webp", category: "phones", description: "Smooth Android experience with incredible camera.4g ram ultrafast prcesssor, 10 terrrabite space" },
    { id: 13, name: "Samsung Power Bank 20000mAh", price: 55, image: "images/WhatsApp Image 2025-05-05 at 15.36.41_205323d4.jpg", category: "powerbanks", description: "Fast-charging power bank with dual output." },
    { id: 14, name: "Nest Thermostat", price: 130, image: "images/IMG-20250505-WA0001.jpg", category: "smarthome-gadgets", description: "Smart thermostat that saves energy efficiently." },
    { id: 15, name: "JBL Flip 6", price: 110, image: "images/jbl.jpg", category: "audio", description: "Portable Bluetooth speaker with rich bass." },
    { id: 16, name: "Xbox Series X", price: 599, image: "images/xbox.jpg", category: "gaming", description: "Microsoft’s most powerful console for 4K gaming." },
    { id: 17, name: "Asus ROG Zephyrus", price: 1900, image: "images/zephyrus.jpg", category: "laptops", description: "Gaming laptop with RTX graphics and RGB keyboard." },
    { id: 18, name: "iPhone 14 Pro", price: 999, image: "images/iphone14.jpg", category: "phones", description: "Apple's latest flagship with Dynamic Island and A16 chip." },
    { id: 19, name: "Beats Studio 3", price: 299, image: "images/beats-studio-3.jpg", category: "audio", description: "Premium noise-canceling headphones with rich sound and long battery life." },
    { id: 20, name: "Google Pixel 8", price: 799, image: "images/pixel-8.jpg", category: "phones", description: "Sleek Android phone with pure software and powerful camera capabilities." },
    { id: 21, name: "Razer DeathAdder V2", price: 59, image: "images/razer-mouse.jpg", category: "gaming", description: "Ergonomic gaming mouse with lightning-fast response and precision." },
    { id: 22, name: "TP-Link Smart Plug", price: 24, image: "images/tplink-plug.jpg", category: "smarthome-gadgets", description: "Control home appliances remotely and set smart routines." },
    { id: 23, name: "Anker Soundcore Mini", price: 35, image: "images/soundcore-mini.jpg", category: "audio", description: "Compact Bluetooth speaker with surprisingly rich sound." },
    { id: 24, name: "iPhone SE 2022", price: 429, image: "images/iphone-se.jpg", category: "phones", description: "Affordable iPhone with A15 chip and compact design." },
    { id: 25, name: "Acer Aspire 5", price: 549, image: "images/acer-aspire.jpg", category: "laptops", description: "Reliable laptop for everyday work and study." },
    { id: 26, name: "Xbox Series S", price: 299, image: "images/xbox-series-s.jpg", category: "gaming", description: "Next-gen gaming with compact design and fast load times." },
    { id: 27, name: "EcoBee Smart Thermostat", price: 199, image: "images/ecobee.jpg", category: "smarthome-gadgets", description: "Smart home temperature control with voice assistant built-in." },
    { id: 28, name: "Baseus Power Bank 30000mAh", price: 49, image: "images/baseus-pb.jpg", category: "powerBanks", description: "Ultra-capacity power bank with fast charging support." },
    { id: 29, name: "HP Spectre x360", price: 1399, image: "images/hp-spectre.jpg", category: "laptops", description: "Convertible laptop with premium design and performance." },
    { id: 30, name: "Samsung Galaxy Buds 2", price: 99, image: "images/buds-2.jpg", category: "audio", description: "Comfortable earbuds with active noise cancellation." },
    { id: 31, name: "Sony PlayStation VR2", price: 499, image: "images/psvr2.jpg", category: "gaming", description: "Immersive virtual reality headset for PlayStation gaming." },
    { id: 32, name: "Google Nest Hub", price: 89, image: "images/nest-hub.jpg", category: "smarthome-gadgets", description: "Smart display with Google Assistant for your smart home." },
    { id: 33, name: "Lenovo Yoga Slim 7", price: 799, image: "images/yoga-slim.jpg", category: "laptops", description: "Portable powerhouse with sleek design and great battery life." },
    { id: 34, name: "Realme GT Neo 5", price: 399, image: "images/realme-neo.jpg", category: "phones", description: "High-performance budget phone with fast charging." },
    { id: 35, name: "Anker Power Bank Nano", price: 29, image: "images/anker-nano.jpg", category: "powerBanks", description: "Ultra-compact and portable power backup solution." },
    { id: 36, name: "Bose QuietComfort Earbuds II", price: 249, image: "images/bose-qc2.jpg", category: "audio", description: "Elite noise-canceling earbuds for audiophiles." },
    { id: 37, name: "Nintendo Pro Controller", price: 69, image: "images/switch-controller.jpg", category: "gaming", description: "Premium controller for intense Nintendo Switch gameplay." },
    { id: 38, name: "home Ai", price: 99, image: "", category: "smarthome-gadgets", description: "Compact smart speaker with Siri and room-filling sound." },
    { id: 39, name: "Samsung Galaxy Z Flip 5", price: 999, image: "images/zflip5.jpg", category: "phones", description: "Foldable phone with futuristic design and power." },
    { id: 40, name: "MSI Katana GF66", price: 1099, image: "images/msi-katana.jpg", category: "laptops", description: "Gaming laptop with high refresh rate and cooling." },
    { id: 41, name: "Redmi Buds 4 Pro", price: 59, image: "images/redmi-buds.jpg", category: "audio", description: "Budget-friendly earbuds with impressive performance." },
    { id: 42, name: "Gaming mouse", price: 499, image: "images/WhatsApp Image 2025-05-05 at 09.05.46_e6268856.jpg", category: "gaming", description: "Advanced standalone VR headset for games and experiences." },
    { id: 43, name: "Gosund Smart Bulb", price: 19, image: "images/gosund-bulb.jpg", category: "smarthome-gadgets", description: "Color-changing smart bulb with voice assistant support." },
    { id: 44, name: "Infinix Zero Ultra", price: 399, image: "images/infinix-ultra.jpg", category: "phones", description: "Bold design with solid performance at a great price." },
    { id: 45, name: "Dell Latitude 7420", price: 949, image: "images/latitude.jpg", category: "laptops", description: "Business-grade laptop with robust features and security." },
    { id: 46, name: "Oraimo Power Bank Toast 10", price: 34, image: "images/oraimo-toast.jpg", category: "powerBanks", description: "Reliable fast-charging power bank with compact design." },
    { id: 47, name: "Skullcandy Indy Evo", price: 69, image: "images/indy-evo.jpg", category: "audio", description: "Stylish earbuds with water resistance and long battery." },
    { id: 48, name: "Asus TUF Dash F15", price: 1199, image: "images/asus-tuf.jpg", category: "laptops", description: "Tough gaming laptop built for high performance." },
    { id: 49, name: "iRobot Roomba i7+", price: 599, image: "images/roomba-i7.jpg", category: "smarthome-gadgets", description: "Smart robot vacuum with mapping and auto-emptying." },
    { id: 50, name: "Powerology 20k mAh PD", price: 59, image: "images/powerology.jpg", category: "powerBanks", description: "High-speed PD power bank with universal compatibility." },
    { id: 51, name: "Xiaomi 13 Ultra", price: 699, image: "images/xiaomi13ultra.jpg", category: "phones", description: "Flagship camera phone with Leica optics and fast performance." },
    { id: 52, name: "Samsung T7 SSD 1TB", price: 119, image: "images/samsung-t7.jpg", category: "gaming", description: "High-speed external SSD perfect for games and media." },
    { id: 53, name: "TP-Link Deco Mesh WiFi", price: 149, image: "images/deco-wifi.jpg", category: "smarthome-gadgets", description: "Whole-home mesh WiFi system for seamless connectivity." },
    { id: 54, name: "HP Envy x360", price: 999, image: "images/hp-envy.jpg", category: "laptops", description: "Convertible 2-in-1 laptop with stylus support." },
    { id: 55, name: "Ugreen 20000mAh PD", price: 45, image: "images/ugreen-pb.jpg", category: "powerBanks", description: "Sturdy and smart power bank for all your devices." },
  ];

  // Render products inside a container by ID
  function renderProducts(containerId, products) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = "";

    products.forEach(product => {
      const div = document.createElement("div");
      div.className = "product-card";
      div.innerHTML = `
        <img src="${product.image}" alt="${product.name}" />
        <div class="product-name">${product.name}</div>
        <div class="product-price">$${product.price}</div>
        <button onclick="viewDetails(${product.id})" class="view-details">View Details</button>
        <button onclick="addToCart(${product.id})" class="add-to-cart">Add to Cart</button>
      `;
      container.appendChild(div);
    });
  }

  // Redirect to product details page
  function viewDetails(id) {
    window.location.href = `product.html?id=${id}`;
  }

  // Add product to cart stored in localStorage
  function addToCart(id) {
    const product = demoProducts.find(p => p.id === id);
    if (!product) return;

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const exists = cart.find(item => item.id === id);
    if (exists) {
      exists.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
  }

  // Update the cart count displayed in the header/cart icon
 function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  document.querySelectorAll(".cart-count").forEach(el => {
    el.textContent = totalItems;

    // Trigger animation cleanly every time
    el.classList.remove("animated");
    void el.offsetWidth; // Force reflow
    el.classList.add("animated");
  });

  
  showCartFlash();
}

function showCartFlash() {
  const flash = document.createElement("div");
  flash.className = "cart-flash";
  flash.textContent = "Added to cart!";
  document.body.appendChild(flash);

  setTimeout(() => {
    flash.remove();
  }, 2500);
}


  // Initialize page product renders and cart count on load
  window.addEventListener('DOMContentLoaded', () => {
    renderProducts("featured-products", demoProducts.slice(0, 10));
    renderProducts("trending-products", demoProducts.slice(0,10));
    updateCartCount();
  });