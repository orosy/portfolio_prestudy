const toggleBtn = document.querySelector(".navbar__toggle-btn");

toggleBtn.addEventListener("click", () => {
  if (toggleBtn.style.display === "none") {
    toggleBtn.style.display === "block";
  } else {
    toggleBtn.style.display === "none";
  }
});
