function toggleDarkMode() {
  // Toggle the darkmode class on the body element
  const body = document.querySelector("body");

  //look at the button state
  const btn = document.querySelector("#toggleBtn");

  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    btn.textContent = "Switch to Light Mode";
  } else {
    btn.textContent = "Switch to Dark Mode";
  }
}
