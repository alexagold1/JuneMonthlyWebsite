document.addEventListener("DOMContentLoaded", () => {
  const stars = document.querySelectorAll(".stars span");

  stars.forEach((star, index) => {
    star.addEventListener("click", () => {
      stars.forEach((s) => s.classList.remove("selected"));
      for (let i = 0; i <= index; i++) {
        stars[i].classList.add("selected");
      }
      // Optional: do something with the selected rating
      console.log("Rating selected:", index + 1);

      // Enable submit button, show rating label, emoji, comment box if you want
      document.getElementById("submitBtn").disabled = false;
      document.getElementById("rating-label").style.display = "block";
      document.getElementById("emoji").style.display = "block";
      document.getElementById("commentBox").style.display = "block";

      // Update the rating label text (example)
      document.getElementById("rating-label").textContent = `You rated this ${
        index + 1
      } star${index + 1 > 1 ? "s" : ""}`;

      // Update emoji based on rating (simple example)
      const emojis = ["😠", "😕", "😐", "🙂", "😄"];
      document.getElementById("emoji").textContent = emojis[index];
    });
  });
});
let cart = {};
let cartCount = 0;

const cartCountEl = document.getElementById("cartCount");
const cartItemsEl = document.getElementById("cartItems");
const cartDropdown = document.getElementById("cartDropdown");
const cartToggle = document.getElementById("cartToggle");
const clearCartBtn = document.getElementById("clearCart");

// Toggle dropdown visibility
cartToggle.addEventListener("click", () => {
  cartDropdown.classList.toggle("d-none");
});

// Clear cart
clearCartBtn.addEventListener("click", () => {
  cart = {};
  cartCount = 0;
  updateCartDisplay();
});

// Add to cart buttons
document.querySelectorAll(".card").forEach((card, index) => {
  const title = card.querySelector(".card-title").innerText;
  const addBtn = document.createElement("button");
  addBtn.innerText = "Add to Cart";
  addBtn.className = "btn btn-primary ms-2";
  addBtn.addEventListener("click", () => {
    if (cart[title]) {
      cart[title]++;
    } else {
      cart[title] = 1;
    }
    cartCount++;
    updateCartDisplay();
  });
  card.querySelector(".card-body").appendChild(addBtn);
});

// Update cart UI
function updateCartDisplay() {
  cartCountEl.innerText = cartCount;
  cartItemsEl.innerHTML = "";
  for (const item in cart) {
    const li = document.createElement("li");
    li.innerText = `${item} x ${cart[item]}`;
    cartItemsEl.appendChild(li);
  }
}
