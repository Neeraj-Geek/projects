async function fetchData() {
  try {
    const response = await fetch("/html/navbar.html");
    const data = await response.text();
    return data;
  } catch (error) {
    console.error("Error occurred while fetching the navbar:", error);
  }
}

async function insertNavbar() {
  const navHtml = await fetchData();
  document.getElementById("navbar").innerHTML = navHtml;
}

insertNavbar();
