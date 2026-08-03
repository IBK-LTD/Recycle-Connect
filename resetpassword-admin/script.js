const BASE_URL = "https://recycleconnect-api.onrender.com/api/v1";

const resetForm = document.getElementById("resetform");
const formMessage = document.getElementById("formMessage");

resetForm.addEventListener("submit", async function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const token = document.getElementById("token").value;
  const newPassword = document.getElementById("newPassword").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  // Check passwords match before even calling the API
  if (newPassword !== confirmPassword) {
    formMessage.textContent = "Passwords do not match.";
    formMessage.className = "form-message error";
    return;
  }

  try {
    const response = await fetch(`${BASE_URL}/auth/reset-password`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        token: token,
        new_password: newPassword
      })
    });

    const data = await response.json();

    if (!response.ok) {
      formMessage.textContent = data.message || "Reset failed. Check your token and try again.";
      formMessage.className = "form-message error";
      return;
    }

    formMessage.textContent = "Password reset successful! You can now sign in with your new password.";
    formMessage.className = "form-message success";

    // Clear the form after success
    resetForm.reset();

  } catch (err) {
    console.error("Reset password error:", err);
    formMessage.textContent = "Something went wrong. Try again.";
    formMessage.className = "form-message error";
  }
});