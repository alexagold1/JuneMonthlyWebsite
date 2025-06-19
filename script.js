document.addEventListener("DOMContentLoaded", () => {
  // --- Rating Popup Logic ---
  const popup = document.getElementById("ratingPopup");
  const stars = popup.querySelectorAll(".stars span");
  const submitBtn = document.getElementById("submitBtn");
  const thanksMsg = document.getElementById("thanksMsg");
  const commentBox = document.getElementById("commentBox");
  const ratingLabel = document.getElementById("rating-label");
  const emoji = document.getElementById("emoji");
  const closePopupBtn = document.getElementById("closePopup");

  // Scroll to show popup
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50 && popup.style.display !== "block") {
      popup.style.display = "block";
    }
  });

  // Close popup
  closePopupBtn.addEventListener("click", () => {
    popup.style.display = "none";
  });

  // Handle star rating
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

      ratingLabel.textContent = `You rated this ${index + 1} star${index + 1 > 1 ? "s" : ""}`;
      const emojis = ["😠", "😕", "😐", "🙂", "😄"];
      emoji.textContent = emojis[index];
    });
  });

  // Submit feedback
  submitBtn.addEventListener("click", () => {
    popup.querySelector(".stars").style.display = "none";
    emoji.style.display = "none";
    ratingLabel.style.display = "none";
    commentBox.style.display = "none";
    submitBtn.style.display = "none";
    thanksMsg.style.display = "block";
  });

  // --- Cart Logic (you already had this part right) ---
  const cartCountEl = document.getElementById('cartCount');
  const cartItemsEl = document.getElementById('cartItems');
  const cartDropdown = document.getElementById('cartDropdown');
  const clearCartBtn = document.getElementById('clearCart');
  const cartIcon = document.querySelector('.cart-icon');

  const cart = [];

  if (cartIcon) {
    cartIcon.addEventListener('click', () => {
      cartDropdown.classList.toggle('d-none');
    });
  }

  document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function () {
      const modal = this.closest('.modal');
      const productTitle = modal.querySelector('.modal-title').innerText;

      cart.push(productTitle);
      updateCartDisplay();
      alert(`${productTitle} added to cart!`);
    });
  });

  if (clearCartBtn) {
    clearCartBtn.addEventListener('click', () => {
      cart.length = 0;
      updateCartDisplay();
      cartDropdown.classList.add('d-none');
    });
  }

  function updateCartDisplay() {
    if (cartCountEl) cartCountEl.textContent = cart.length;

    if (cartItemsEl) {
      cartItemsEl.innerHTML = '';
      cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        cartItemsEl.appendChild(li);
      });
    }

    if (cartDropdown) {
      if (cart.length > 0) {
        cartDropdown.classList.remove('d-none');
      } else {
        cartDropdown.classList.add('d-none');
      }
    }
  }
});
