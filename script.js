// Listen for form submission
document.getElementById('search-form').addEventListener('submit', searchRecipes);

// Function to search for recipes
function searchRecipes(e) {
  // Prevent default form submission behavior
  e.preventDefault();

  // Get search query from form input
  const query = document.getElementById('query').value;

  // Make API request to Spoonacular recipe database
  fetch(`https://api.spoonacular.com/recipes/search?apiKey=931e88230086426085c5b9b61e48767e&query=${query}`)
    .then(response => response.json())
    .then(data => {
      // Extract relevant data from response
      const recipes = data.results;

      // Clear previous search results
      document.getElementById('results').innerHTML = '';

      // Loop through recipes and create HTML elements for each
      recipes.forEach(recipe => {
        // Create container element for recipe
        const recipeElement = document.createElement('div');
        recipeElement.classList.add('result');

        // Create image element for recipe
        const recipeImage = document.createElement('img');
        recipeImage.src = recipe.image;
        recipeElement.appendChild(recipeImage);

        // Create title element for recipe
        const recipeTitle = document.createElement('h3');
        recipeTitle.textContent = recipe.title;
        recipeElement.appendChild(recipeTitle);

        // Add recipe element to search results container
        document.getElementById('results').appendChild(recipeElement);
      });
    });
}
