    document.addEventListener("DOMContentLoaded", () => {
      const products = JSON.parse(localStorage.getItem("allProducts")) || [];
  
      function getProductIdFromURL() {
        const urlParams = new URLSearchParams(window.location.search);
        return parseInt(urlParams.get("id"));
      }
  
      function changeQty(delta) {
        const qtyInput = document.getElementById("quantity");
        const val = parseInt(qtyInput.value);
        if (!isNaN(val)) {
          const newVal = Math.max(1, val + delta);
          qtyInput.value = newVal;
        }
      }
  
      function displayProduct(product) {
        if (!product) {
          document.querySelector(".product-container").style.display = "none";
          document.getElementById("notFoundMessage").style.display = "block";
          document.querySelector(".recommend-title").style.display = "none";
          return;
        }
  
        document.querySelector(".product-container").style.display = "flex";
        document.getElementById("notFoundMessage").style.display = "none";
        document.querySelector(".recommend-title").style.display = "block";
  
        document.getElementById("productImage").src = product.image;
        document.getElementById("productName").textContent = product.name;
        document.getElementById("productPrice").textContent = "$" + product.price.toLocaleString();
        document.getElementById("productDescription").textContent = product.description || "No description available.";
  
        // Add to cart handler
        const addToCartBtn = document.getElementById("addToCartBtn");
        if (addToCartBtn) {
          addToCartBtn.onclick = () => {
            const quantity = parseInt(document.getElementById("quantity").value);
            if (isNaN(quantity) || quantity <= 0) return alert("Enter a valid quantity");
  
            let cart = JSON.parse(localStorage.getItem("cart")) || [];
            const existing = cart.find(item => item.id === product.id);
            if (existing) {
              existing.quantity += quantity;
            } else {
              cart.push({ ...product, quantity });
            }
            localStorage.setItem("cart", JSON.stringify(cart));
            alert("Added to cart!");
          };
        }
      }
  
      function loadRecommendations(currentId) {
        const recContainer = document.getElementById("recommendations");
        recContainer.innerHTML = "";
  
        const shuffled = products.filter(p => p.id !== currentId).sort(() => 0.5 - Math.random());
        const recommended = shuffled.slice(0, 5);
  
        recommended.forEach(p => {
          const div = document.createElement("div");
          div.className = "recommend-item";
          div.innerHTML = `
            <img src="${p.image}" alt="${p.name}" />
            <p>${p.name}</p>
          `;
          div.addEventListener("click", () => switchProduct(p));
          recContainer.appendChild(div);
        });
      }
  
      function switchProduct(product) {
        document.querySelector(".product-container").style.opacity = 0;
        setTimeout(() => {
          displayProduct(product);
          loadRecommendations(product.id);
          document.querySelector(".product-container").style.opacity = 1;
        }, 200);
      }
  
      const productId = getProductIdFromURL();
      const selectedProduct = products.find(p => p.id === productId);
      displayProduct(selectedProduct);
      loadRecommendations(productId);
  
      // Make changeQty globally accessible for inline HTML buttons
      window.changeQty = changeQty;
    });