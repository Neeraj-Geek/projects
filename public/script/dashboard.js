document.addEventListener("DOMContentLoaded", async () => {
  async function getP() {
    try {
      const response = await fetch("http://localhost:3000/userdata");
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error:", error);
    }
  }

  let data = await getP();
  document.getElementById("user_name").innerText = `Welocome ${data.username}`;
  document.getElementById("role").innerText = `Role:- ${data.role}`;

  const localStorageObj = JSON.stringify(data);
  localStorage.setItem("userData", localStorageObj);
});
