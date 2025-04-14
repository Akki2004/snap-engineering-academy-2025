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

  let filteredData = [...tvShows];

  function renderCatalog(data) {
    catalogContainer.innerHTML = "";

    data.forEach(item => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <div class="card-content">
          <h2>${item.name}</h2>
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
    const sortKey = sortBy.value;

    filteredData = tvShows.filter(show => {
      const matchesSearch = show.name.toLowerCase().includes(query);
      const matchesCategory = selectedCategory === "all" || show.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });

    // Sort
    filteredData.sort((a, b) => {
      if (sortKey === "name") return a.name.localeCompare(b.name);
      if (sortKey === "year") return a.year - b.year;
      if (sortKey === "rating") return b.rating - a.rating;
    });

    renderCatalog(filteredData);
    renderSuggestions(query);
  }

  function renderSuggestions(query) {
    let suggestionBox = document.getElementById("suggestionBox");
    if (!suggestionBox) {
      suggestionBox = document.createElement("div");
      suggestionBox.id = "suggestionBox";
      suggestionBox.style.position = "absolute";
      suggestionBox.style.background = "white";
      suggestionBox.style.border = "1px solid #ccc";
      suggestionBox.style.zIndex = 999;
      suggestionBox.style.maxHeight = "150px";
      suggestionBox.style.overflowY = "auto";
      searchInput.parentNode.appendChild(suggestionBox);
    }

    if (!query) {
      suggestionBox.innerHTML = "";
      return;
    }

    const suggestions = tvShows
      .map(show => show.name)
      .filter(name => name.toLowerCase().includes(query) && name.toLowerCase() !== query)
      .slice(0, 5);

    suggestionBox.innerHTML = suggestions
      .map(s => `<div class="suggestion-item" style="padding: 5px; cursor: pointer;">${s}</div>`) 
      .join("");

    suggestionBox.querySelectorAll(".suggestion-item").forEach(item => {
      item.addEventListener("click", () => {
        searchInput.value = item.textContent;
        suggestionBox.innerHTML = "";
        applyFilters();
      });
    });
  }

  // Attach event listeners
  searchInput.addEventListener("input", applyFilters);
  categoryFilter.addEventListener("change", applyFilters);
  sortBy.addEventListener("change", applyFilters);

  // Initial render
  renderCatalog(tvShows);
});
