const BASE_URL = "https://recycleconnect-api.onrender.com/api/v1";

const forgotForm = document.getElementById("forgotform");
const formMessage = document.getElementById("formMessage");
const devTokenBox = document.getElementById("devTokenBox");
const devTokenValue = document.getElementById("devTokenValue");
const copyTokenBtn = document.getElementById("copyTokenBtn");

forgotForm.addEventListener("submit", async function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value;

  try {
    const response = await fetch(`${BASE_URL}/auth/forgot-password`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email })
    });

    const data = await response.json();

    if (!response.ok) {
      formMessage.textContent = data.message || "Something went wrong.";
      formMessage.className = "form-message error";
      return;
    }

    formMessage.textContent = data.message;
    formMessage.className = "form-message success";

    // If backend returns a dev token, show it for testing
    if (data.dev_reset_token) {
      devTokenValue.textContent = data.dev_reset_token;
      devTokenBox.style.display = "block";
    }

  } catch (err) {
    console.error("Forgot password error:", err);
    formMessage.textContent = "Something went wrong. Try again.";
    formMessage.className = "form-message error";
  }
});

copyTokenBtn.addEventListener("click", function () {
  navigator.clipboard.writeText(devTokenValue.textContent);
  copyTokenBtn.textContent = "Copied!";
  setTimeout(() => {
    copyTokenBtn.textContent = "Copy token";
  }, 2000);
});