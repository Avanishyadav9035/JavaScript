// Infinite Scroll

// Load more items when reaching bottom

const list = document.getElementById("infiniteList");
  let count = 0;

  function loadMore() {
    for (let i = 0; i < 10; i++) {
      const li = document.createElement("li");
      li.textContent = "Item " + (++count);
      list.appendChild(li);
    }
  }

  window.addEventListener("scroll", () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      loadMore();
    }
  });

  loadMore();