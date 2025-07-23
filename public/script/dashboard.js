document.addEventListener("DOMContentLoaded", async () => {
  const blogCard = document.getElementById("blogcard");
  console.log(blogCard, 222222);
  try {
    let blogData = await fetch("/api/posts/");
    blogData = await blogData.json();
    const blogArr = blogData.post;
    if (blogArr.length > 0) {
      blogArr.forEach((item) => {
        const date = new Date(item.createdAt);
        const options = { month: "short", day: "2-digit", year: "numeric" };
        const formatDate = date
          .toLocaleDateString("en-US", options)
          .replace(",", "");
        const truncatedContent =
          item.content.length > 100
            ? item.content.slice(0, 100) + "..."
            : item.content;
        const blogCardHtml = `<a href="post-detail.html" class="card">
                    <h4>${item.title}</h4>
                    <p>${truncatedContent}</p>
                    <span class="date">${formatDate}</span>
                </a>`;
        blogCard.innerHTML += blogCardHtml;
        console.log(blogCardHtml);
      });
    } else {
      blogCard.innerHTML = "<p>No blogs found.</p>";
    }
  } catch (error) {
    console.log("error :>> ", error);
  }
});
