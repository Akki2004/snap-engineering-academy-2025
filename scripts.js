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
  const suggestionsList = document.getElementById("suggestions");
  const categoryFilter = document.getElementById("categoryFilter");
  const sortBy = document.getElementById("sortBy");
  const catalogContainer = document.getElementById("catalog");

  let filteredData = [...albumCovers];

  // Create suggestions
  function updateSuggestions(query) {
    suggestionsList.innerHTML = "";
    if (!query) {
      suggestionsList.style.display = "none";
      return;
    }

    const matches = albumCovers
      .filter(show => show.name.toLowerCase().includes(query.toLowerCase()))
      .slice(0, 5);

    if (matches.length === 0) {
      suggestionsList.style.display = "none";
      return;
    }

    matches.forEach(show => {
      const li = document.createElement("li");
      li.textContent = show.name;
      li.addEventListener("click", () => {
        searchInput.value = show.name;
        suggestionsList.style.display = "none";
        applyFilters();
      });
      suggestionsList.appendChild(li);
    });

    suggestionsList.style.display = "block";
  }

  // Render the catalog
  function renderCatalog(data) {
    catalogContainer.innerHTML = "";
    data.forEach(show => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <img src="${show.image}" alt="${show.name}" />
        <div class="card-content">
          <h2>${show.name}</h2>
          <p>${show.artist}</p>
          <p><strong>Category:</strong> ${show.category}</p>
          <p><strong>Year:</strong> ${show.year}</p>
          <p><strong>Rating:</strong> ${show.rating}</p>
        </div>
      `;
      catalogContainer.appendChild(card);
    });
  }

  function applyFilters() {
    const query = searchInput.value.toLowerCase();
    const category = categoryFilter.value;
    const sortKey = sortBy.value;

    filteredData = albumCovers.filter(show => {
      const matchesCategory = category === "all" || show.category === category;
      const matchesSearch = show.name.toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    });

    if (sortKey === "name") {
      filteredData.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortKey === "year") {
      filteredData.sort((a, b) => a.year - b.year);
    } else if (sortKey === "rating") {
      filteredData.sort((a, b) => b.rating - a.rating);
    }

    renderCatalog(filteredData);
  }

  // Event listeners
  searchInput.addEventListener("input", () => {
    updateSuggestions(searchInput.value);
    applyFilters();
  });

  categoryFilter.addEventListener("change", applyFilters);
  sortBy.addEventListener("change", applyFilters);

  // Hide suggestions when clicking outside
  document.addEventListener("click", event => {
    if (!document.querySelector(".search-wrapper").contains(event.target)) {
      suggestionsList.style.display = "none";
    }
  });

  // Initial load
  renderCatalog(albumCovers);
});