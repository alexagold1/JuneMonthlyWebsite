document.addEventListener("DOMContentLoaded", () => {
  const stars = document.querySelectorAll(".stars span");
  const submitBtn = document.getElementById("submitBtn");
  const thanksMsg = document.getElementById("thanksMsg");
  const commentBox = document.getElementById("commentBox");
  const ratingLabel = document.getElementById("rating-label");
  const emoji = document.getElementById("emoji");

  stars.forEach((star, index) => {
    star.addEventListener("click", () => {
      stars.forEach((s) => s.classList.remove("selected"));
      for (let i = 0; i <= index; i++) {
        stars[i].classList.add("selected");
      }

      submitBtn.disabled = false;
      ratingLabel.style.display = "block";
      emoji.style.display = "block";
      commentBox.style.display = "block";

      ratingLabel.textContent = `You rated this ${index + 1} star${
        index + 1 > 1 ? "s" : ""
      }`;
      const emojis = ["😠", "😕", "😐", "🙂", "😄"];
      emoji.textContent = emojis[index];
    });
  });

  submitBtn.addEventListener("click", () => {
    document.getElementById("stars").style.display = "none";
    emoji.style.display = "none";
    ratingLabel.style.display = "none";
    commentBox.style.display = "none";
    submitBtn.style.display = "none";
    thanksMsg.style.display = "block";
  });

  // 👇 SCROLL DETECTION TO SHOW POPUP
  window.addEventListener("scroll", () => {
    const popup = document.getElementById("ratingPopup");
    if (window.scrollY > 600 && popup.style.display !== "block") {
      popup.style.display = "block";
    }
  });

  // 👇 Close button for popup
  document.getElementById("closePopup").addEventListener("click", () => {
    document.getElementById("ratingPopup").style.display = "none";
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
// document.querySelectorAll(".card").forEach((card, index) => {
//   const title = card.querySelector(".card-title").innerText;
//   const addBtn = document.createElement("button");
//   addBtn.innerText = "Add to Cart";
//   addBtn.className = "btn btn-primary ms-2";
//   addBtn.addEventListener("click", () => {
//     if (cart[title]) {
//       cart[title]++;
//     } else {
//       cart[title] = 1;
//     }
//     cartCount++;
//     updateCartDisplay();
//   });
//   card.querySelector(".card-body").appendChild(addBtn);
// });

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
