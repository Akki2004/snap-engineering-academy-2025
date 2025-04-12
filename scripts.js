/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 *
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your
 *    browser and make sure you can see that change.
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 *
 */

document.addEventListener("DOMContentLoaded", () => {
  // Get elements only after DOM is loaded
  const searchInput = document.getElementById("searchInput");
  const categoryFilter = document.getElementById("categoryFilter");
  const catalogContainer = document.getElementById("catalog");

  let filteredData = [...tvShows]; // Make sure tvShows exists from data.js

  // Function to render the catalog (list of TV shows)
  function renderCatalog(data) {
    catalogContainer.innerHTML = ""; // Clear previous content

    data.forEach(item => {
      const card = document.createElement("div");
      card.className = "item-card";
      card.innerHTML = `
        <img src="${item.poster}" alt="${item.title}">
        <div class="card-content">
          <h2>${item.title}</h2>
          <ul>${item.bullets.map(b => `<li>${b}</li>`).join("")}</ul>
          <p><strong>Category:</strong> ${item.category}</p>
          <p><strong>Price:</strong> $${item.price.toFixed(2)}</p>
        </div>
      `;
      catalogContainer.appendChild(card);
    });
  }

  // Function to apply both search and filter
  function applySearchAndFilter() {
    const query = searchInput.value.toLowerCase();
    const selectedCategory = categoryFilter.value;

    filteredData = tvShows.filter(item => {
      const matchesSearch =
        item.title.toLowerCase().includes(query) ||
        item.bullets.some(b => b.toLowerCase().includes(query));

      const matchesCategory =
        selectedCategory === "all" || item.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });

    renderCatalog(filteredData);
  }

  // Event listeners
  searchInput.addEventListener("input", applySearchAndFilter);
  categoryFilter.addEventListener("change", applySearchAndFilter);

  // Initial render of the catalog
  renderCatalog(tvShows);
});
