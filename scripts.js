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

// Sample data import
let filteredData = [...catalogData]; // Clone original data

const catalogContainer = document.getElementById("catalog");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");

function renderCatalog(data) {
  catalogContainer.innerHTML = "";
  data.forEach((item) => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <div class="card-content">
        <h2>${item.name}</h2>
        <img src="${item.image}" alt="${item.name} Poster" />
        <ul>
          <li>${item.description}</li>
          <li>Genre: ${item.category}</li>
          <li>Price: ${item.price}</li>
        </ul>
      </div>
    `;

    catalogContainer.appendChild(card);
  });
}

function handleSearch() {
  applySearchAndFilter();
}

function handleFilter() {
  applySearchAndFilter();
}

function applySearchAndFilter() {
  const query = searchInput.value.toLowerCase();
  const selectedCategory = categoryFilter.value;

  filteredData = catalogData.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query);

    const matchesCategory =
      selectedCategory === "all" || item.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  renderCatalog(filteredData);
}

function sortByName() {
  filteredData.sort((a, b) => a.name.localeCompare(b.name));
  renderCatalog(filteredData);
}

function sortByPrice() {
  filteredData.sort(
    (a, b) =>
      parseFloat(a.price.replace("$", "")) -
      parseFloat(b.price.replace("$", ""))
  );
  renderCatalog(filteredData);
}

function quoteAlert() {
  alert("I guess I can kiss heaven goodbye, because it got to be a sin to look this good!");
}

function removeLastCard() {
  filteredData.pop();
  renderCatalog(filteredData);
}

// Initial render
document.addEventListener("DOMContentLoaded", () => {
  renderCatalog(filteredData);
});
