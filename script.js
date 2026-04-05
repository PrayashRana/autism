// Smooth Scroll
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth"
  });
}

// Poll System
function vote(choice) {
  if(localStorage.getItem("voted")) {
    document.getElementById("pollResult").innerText =
      "You already voted. Thank you!";
    return;
  }

  localStorage.setItem("vote", choice);
  localStorage.setItem("voted", true);

  document.getElementById("pollButtons").style.display = "none";
  document.getElementById("pollResult").innerText =
    "Thank you for your response!";
}

// On Load Check
window.onload = function() {
  if(localStorage.getItem("voted")) {
    document.getElementById("pollButtons").style.display = "none";
    document.getElementById("pollResult").innerText =
      "You already voted. Thank you!";
  }
};