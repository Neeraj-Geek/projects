document.addEventListener("DOMContentLoaded", async () => {
  async function getP(url) {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error:", error);
    }
  }

  try {
    let data = await getP("http://localhost:3000/user/userdata");

    if (!!data) {
      document.getElementById(
        "user_name"
      ).innerText = `Welocome ${data.username}`;
      document.getElementById("role").innerText = `Role:- ${data.role}`;

      const localStorageObj = JSON.stringify(data);
      localStorage.setItem("userData", localStorageObj);

      let urlData = await getP("http://localhost:3000/user/userurl");

      let urlList = document.getElementById("urlList");

      urlData.forEach((item) => {
        let li = document.createElement("li");
        li.innerHTML = ` <strong>Short URL:</strong> <a href = ${item.short_url} target="_blank">https://${item.short_url}</a>`;
        urlList.appendChild(li);
      });
      document.getElementById("logout").addEventListener("click", () => {
        localStorage.clear();
      });
    }
  } catch (error) {
    console.log("Error :>> ", error);
  }
});
