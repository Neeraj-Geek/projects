document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");

  form.onsubmit = async (e) => {
    e.preventDefault();

    // Get input values
    const email = form.email.value;
    const password = form.password.value;

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();
      console.log(result);

      Toastify({
        text: result.message || "Login response received",
        duration: 3000,
        gravity: "top",
        position: "right",
        backgroundColor: result.success ? "green" : "red",
      }).showToast();

      if (result.success) {
        window.location.href = "/";
      }
    } catch (err) {
      Toastify({
        text: "Network or server error",
        duration: 3000,
        gravity: "top",
        position: "right",
        backgroundColor: "red",
      }).showToast();
      console.error("Fetch error:", err);
    }
  };
});
