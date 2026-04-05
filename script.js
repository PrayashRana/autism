// Smooth Scroll
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth"
  });
}

// Poll Voting System
function vote(choice) {
  const result = document.getElementById("pollResult");
  const buttons = document.querySelectorAll("#pollButtons button");

  // If already voted
  if (localStorage.getItem("voted")) {
    result.innerText = "⚠️ You have already voted. Thank you!";
    return;
  }

  // Save vote
  localStorage.setItem("vote", choice);
  localStorage.setItem("voted", "true");

  // Disable buttons
  buttons.forEach(btn => {
    btn.disabled = true;
    btn.style.opacity = "0.6";
    btn.style.cursor = "not-allowed";
  });

  // Highlight selected button
  if (choice === "yes") {
    buttons[0].style.background = "#28a745";
  } else {
    buttons[1].style.background = "#dc3545";
  }

  // Show response message
  if (choice === "yes") {
    result.innerText = "💙 Thank you! Awareness starts with you.";
  } else {
    result.innerText = "🙏 Thank you! Every opinion matters.";
  }
}

// On Page Load
window.onload = function () {
  const result = document.getElementById("pollResult");
  const buttons = document.querySelectorAll("#pollButtons button");

  if (localStorage.getItem("voted")) {
    const savedVote = localStorage.getItem("vote");

    // Disable buttons
    buttons.forEach(btn => {
      btn.disabled = true;
      btn.style.opacity = "0.6";
      btn.style.cursor = "not-allowed";
    });

    // Highlight previous choice
    if (savedVote === "yes") {
      buttons[0].style.background = "#28a745";
      result.innerText = "💙 You voted YES earlier. Thank you!";
    } else {
      buttons[1].style.background = "#dc3545";
      result.innerText = "🙏 You voted NO earlier. Thank you!";
    }
  }
};