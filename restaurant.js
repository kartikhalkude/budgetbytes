// Static restaurant data
const restaurants = [
    { name: "Budget Bites Cafe", priceRange: "$", cuisine: "Cafe", distance: 1, rating: 4.5 },
    { name: "Spicy Delights", priceRange: "$$", cuisine: "Indian", distance: 5, rating: 4.0 },
    { name: "Sushi Haven", priceRange: "$$$", cuisine: "Japanese", distance: 3, rating: 4.8 },
    { name: "Pasta Palace", priceRange: "$$", cuisine: "Italian", distance: 2, rating: 3.9 },
    { name: "Burger Bliss", priceRange: "$", cuisine: "Fast Food", distance: 4, rating: 4.2 },
  ];
  
  // Function to populate the table
  function populateTable(data) {
    const tableBody = document.getElementById("restaurantTableBody");
    tableBody.innerHTML = ""; // Clear existing rows
  
    data.forEach((restaurant) => {
      const row = document.createElement("tr");
  
      row.innerHTML = `
        <td>${restaurant.name}</td>
        <td>${restaurant.priceRange}</td>
        <td>${restaurant.cuisine}</td>
        <td>${restaurant.distance}</td>
        <td>${restaurant.rating}</td>
      `;
  
      tableBody.appendChild(row);
    });
  }
  
  // Function to filter restaurants based on selected filters
  function filterRestaurants() {
    const priceRange = document.querySelectorAll(".filter-select")[0].value;
    const cuisine = document.querySelectorAll(".filter-select")[1].value;
    const distance = parseInt(document.querySelectorAll(".filter-select")[2].value) || Infinity;
    const rating = parseFloat(document.querySelectorAll(".filter-select")[3].value) || 0;
  
    const filtered = restaurants.filter((restaurant) => {
      const matchesPrice = priceRange === "All Prices" || restaurant.priceRange === priceRange;
      const matchesCuisine = cuisine === "All Cuisine" || restaurant.cuisine === cuisine;
      const matchesDistance = distance === Infinity || restaurant.distance <= distance;
      const matchesRating = rating === 0 || restaurant.rating >= rating;
  
      return matchesPrice && matchesCuisine && matchesDistance && matchesRating;
    });
  
    populateTable(filtered);
  }
  
  // Event listeners for filter changes
  document.querySelectorAll(".filter-select").forEach((select) => {
    select.addEventListener("change", filterRestaurants);
  });
  
  // Initialize the table with all restaurants
  populateTable(restaurants);
  