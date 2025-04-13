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
  const searchInput = document.getElementById("searchInput");
  const categoryFilter = document.getElementById("categoryFilter");
  const sortBy = document.getElementById("sortBy");
  const catalogContainer = document.getElementById("catalog");

  function renderCatalog(data) {
    catalogContainer.innerHTML = "";

    data.forEach(item => {
      const card = document.createElement("div");
      card.className = "card"; // CSS class matches your style.css
      card.innerHTML = `
        <div class="card-content">
          <h2>${item.name}</h2>
          <img src="${item.image}" alt="${item.name}">
          <p>${item.description}</p>
          <p><strong>Category:</strong> ${item.category}</p>
          <p><strong>Year:</strong> ${item.year}</p>
          <p><strong>Rating:</strong> ${item.rating}</p>
        </div>
      `;
      catalogContainer.appendChild(card);
    });
  }

  function applyFilters() {
    const query = searchInput.value.toLowerCase();
    const selectedCategory = categoryFilter.value;
    const sortOption = sortBy.value;

    let filtered = tvShows.filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(query) ||
                            item.description.toLowerCase().includes(query);

      const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });

    // Sort logic
    filtered.sort((a, b) => {
      if (sortOption === "name") {
        return a.name.localeCompare(b.name);
      } else if (sortOption === "year") {
        return b.year - a.year;
      } else if (sortOption === "rating") {
        return b.rating - a.rating;
      }
      return 0;
    });

    renderCatalog(filtered);
  }

  // Event listeners
  searchInput.addEventListener("input", applyFilters);
  categoryFilter.addEventListener("change", applyFilters);
  sortBy.addEventListener("change", applyFilters);

  // Initial render
  renderCatalog(tvShows);
});

