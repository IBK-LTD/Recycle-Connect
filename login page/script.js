const loginForm = document.getElementById("loginform");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Temporary placeholder — full backend integration in progress
  alert("Login functionality is currently being integrated with the backend. Coming soon!");

  // Optional: uncomment below to redirect straight to dashboard for demo purposes
  // window.location.href = "../dashboard/dashboard.html";
});


/* 
  ==========================================
  REAL API INTEGRATION — swap in once backend
  test credentials are confirmed
  ==========================================

const BASE_URL = "https://recycleconnect-api.onrender.com/api/v1";

loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const res = await fetch(`${BASE_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (!data.success) {
      alert(data.message || "Login failed");
      return;
    }

    localStorage.setItem("token", data.data.token);
    localStorage.setItem("user", JSON.stringify(data.data.user));

    window.location.href = "../dashboard/dashboard.html";

  } catch (error) {
    console.error("Login error:", error);
    alert("Something went wrong. Please try again.");
  }
});

*/