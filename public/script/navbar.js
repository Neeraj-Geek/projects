async function fetchData() {
  try {
    const response = await fetch("/html/navbar.html");
    const data = await response.text();
    return data;
  } catch (error) {
    Toastify({
      text: "Network or server error while fetching the Navbar",
      duration: 3000,
      gravity: "top",
      position: "right",
      backgroundColor: "red",
    }).showToast();
    console.error("Error occurred while fetching the navbar:", error);
  }
}

async function insertNavbar() {
  try {
    const navHtml = await fetchData();
    document.getElementById("navbar").innerHTML = navHtml;
    const userData = JSON.parse(localStorage.getItem("userData"));
    // const isLoggedIn = userData?.isLoggedIn === "true";
    const username = userData?.username || "User";
    const authLinks = document.getElementById("auth-links");
    if (userData?.isLoggedIn && authLinks) {
      authLinks.innerHTML = `
       <li><a href="/profile.html" class="btn">👤 ${username}</a></li>
       <li><a href="#" class="btn" onclick="logout()">Logout</a></li>
     `;
    }
  } catch (error) {
    Toastify({
      text: "Network or server error while fetching the Navbar",
      duration: 3000,
      gravity: "top",
      position: "right",
      backgroundColor: "red",
    }).showToast();
  }
}

function logout() {
  localStorage.clear();
  location.reload();
}

insertNavbar();
