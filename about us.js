const aboutModal = document.getElementById("aboutModal");
const aboutBtn = document.getElementById("aboutBtn");
const closeAbout = document.getElementById("closeAbout");

aboutBtn.onclick = function() {
  aboutModal.style.display = "flex";
}

closeAbout.onclick = function() {
  aboutModal.style.display = "none";
}

window.addEventListener("click", function(event) {
  if (event.target === aboutModal) {
    aboutModal.style.display = "none";
  }
});
