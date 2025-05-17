
// Initialize EmailJS
emailjs.init("YOUR_USER_ID"); // Replace with your EmailJS public key

// Load cart from localStorage or use empty array
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Update cart UI
function updateCartUI() {
  const totalItemsEl = document.getElementById("totalItems");
  const totalPriceEl = document.getElementById("totalPrice");
  const orderDetailsContainer = document.getElementById("orderDetailsContainer");
  const completePurchaseButton = document.getElementById("completePurchaseButton");

  if (!orderDetailsContainer || !completePurchaseButton) return;

  orderDetailsContainer.innerHTML = '';

  let totalItems = 0;
  let totalPrice = 0;

  cart.forEach(item => {
    totalItems += item.quantity;
    totalPrice += item.price * item.quantity;

    const itemEl = document.createElement("div");
    itemEl.classList.add("cart-item");

    itemEl.innerHTML = `
      <div class="item-name"><strong>${item.name}</strong></div>
      <div class="item-quantity">Quantity: ${item.quantity}</div>
      <div class="item-price">Price: $${(item.price * item.quantity).toFixed(2)}</div>
      <hr/>
    `;
    orderDetailsContainer.appendChild(itemEl);
  });

  totalItemsEl.textContent = totalItems;
  totalPriceEl.textContent = totalPrice.toFixed(2);
  completePurchaseButton.disabled = totalItems === 0;
}

// Handle order confirmation
function completeCheckout() {
  const name = document.getElementById("name")?.value.trim();
  const address = document.getElementById("address")?.value.trim();
  const phone = document.getElementById("phone")?.value.trim();
  const paymentMethod = document.getElementById("payment-method")?.value;

  if (!name || !address || !phone || !paymentMethod) {
    alert("Please fill in all required fields.");
    return;
  }

  if (cart.length === 0) {
    alert("Cart is empty.");
    return;
  }

  // Format cart details into a readable string
  const cartDetails = cart.map(item =>
    `${item.name} - Qty: ${item.quantity}, $${(item.price * item.quantity).toFixed(2)}`
  ).join("\n");

  const emailParams = {
    name: name,
    address: address,
    phone: phone,
    paymentMethod: paymentMethod,
    cartDetails: cartDetails,
    total: cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)
  };

  emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", emailParams)
    .then(response => {
      alert("✅ Order placed successfully! A confirmation email has been sent.");
      localStorage.removeItem("cart");
      cart = [];
      updateCartUI();
      setTimeout(() => window.location.href = "shop.html", 1000);
    })
    .catch(error => {
      alert("❌ Failed to send order. Please try again.");
      console.error("EmailJS Error:", error);
    });
}

// Initialize
updateCartUI();
