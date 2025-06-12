const stars = document.querySelectorAll(".stars span");
const emoji = document.getElementById("emoji");
const ratingLabel = document.getElementById("rating-label");
const commentBox = document.getElementById("commentBox");
const submitBtn = document.getElementById("submitBtn");
const thanksMsg = document.getElementById("thanksMsg");

const labels = ["Terrible", "Bad", "Okay", "Good", "Amazing"];
const emojis = ["😡", "😕", "😐", "🙂", "😍"];
let selectedRating = 0;

stars.forEach((star, index) => {
  star.addEventListener("click", () => {
    selectedRating = index + 1;

    // Reset star classes
    stars.forEach((s, i) => {
      s.classList.toggle("selected", i < selectedRating);
    });

    // Show emoji and label after click
    emoji.style.display = "block";
    ratingLabel.style.display = "block";
    emoji.innerText = emojis[selectedRating - 1];
    ratingLabel.innerText = `${
      labels[selectedRating - 1]
    } (${selectedRating}★)`;

    // Show comment box if 1–3
    commentBox.style.display = selectedRating <= 3 ? "block" : "none";

    // Enable submit
    submitBtn.disabled = false;
  });
});

submitBtn.addEventListener("click", () => {
  thanksMsg.style.display = "block";
  submitBtn.disabled = true;
});
