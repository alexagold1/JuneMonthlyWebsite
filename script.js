document.addEventListener("DOMContentLoaded", () => {
  const stars = document.querySelectorAll(".stars span");

  stars.forEach((star, index) => {
    star.addEventListener("click", () => {
      // Remove 'selected' class from all stars
      stars.forEach((s) => s.classList.remove("selected"));
      // Add 'selected' class to all stars up to clicked one
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

let cartCount = 0;
const cartCountElement = document.getElementById("cartCount");

document.querySelectorAll(".add-to-cart").forEach((button) => {
  button.addEventListener("click", () => {
    cartCount++;
    cartCountElement.textContent = cartCount;
  });
});
