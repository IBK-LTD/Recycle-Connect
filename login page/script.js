const loginForm = document.getElementById("loginform");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Temporary placeholder — full backend integration in progress
  alert("Login functionality is currently being integrated with the backend. Coming soon!");

  // Optional: uncomment below to redirect straight to dashboard for demo purposes
  window.location.href = "../dashboard/dashboard.html";
});

const ssoButton = document.querySelector(".btn-sso");

ssoButton.addEventListener("click", function () {
  alert("Sign in with SSO is coming soon!");
});

// const BASE_URL = "https://recycleconnect-api.onrender.com/api/v1";

// const loginForm = document.getElementById("loginform");

// loginForm.addEventListener("submit", async function (e) {
//   e.preventDefault();

//   const email = document.getElementById("email").value;
//   const password = document.getElementById("password").value;

//   try {
//     const response = await fetch(`${BASE_URL}/auth/login/password`, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ email, password })
//     });

//     const data = await response.json();

//     if (!response.ok) {
//       alert(data.message || "Login failed. Check your email/password.");
//       return;
//     }

//     console.log("Login success:", data);
//     alert("Login successful!");

//   } catch (err) {
//     console.error("Login error:", err);
//     alert("Something went wrong. Try again.");
//   }
// });

// forgotten password
 async function forgotPassword(email) {
  try {
    const response = await fetch(`${BASE_URL}/auth/forgot-password`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email })
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Request failed");
    }

    return data;
  } catch (err) {
    console.error("Forgot password error:", err);
    throw err;
  }
}