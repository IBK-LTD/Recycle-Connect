const loginForm = document.getElementById("loginform");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // // Temporary placeholder — full backend integration in progress
  // alert("Login functionality is currently being integrated with the backend. Coming soon!");

  // Optional: uncomment below to redirect straight to dashboard for demo purposes
  window.location.href = "../dashboard2/dashboard.html";
});

const requestAccessBtn = document.querySelector(".btn-sso");

requestAccessBtn.addEventListener("click", () => {
  alert("Platform access request feature is coming soon!");
});