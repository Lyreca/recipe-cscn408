const apiKey = "583b4f8dae7c44299b565ed0cadc193e";
url = `https://api.spoonacular.com/recipes/716429/information?includeNutrition=true.`;

async function logJSONData() {
    fetch(url, {
        headers: {
            "x-api-key": apiKey
            }
        }
    )
        .then(response => response.json())
        .then(data => console.log(data));
}

// Reading CSV data

document.addEventListener('DOMContentLoaded', function() {
    let fetchIngredientsResults = document.getElementById("ingredientsUnselected");
    displayLoadingBox(fetchIngredientsResults);

    let searchURL = `https://spoonacular.com/application/frontend/downloads/ingredients.csv`;

    fetch(searchURL)
        .then(response => response.text())
        .then(data => readCSVData(data))
        .then(() => {
            removeLoadingBox(fetchIngredientsResults);
            displayIngredients();
        })
        .then(() => highlightIngredients())
        .then(() => filterIngredients());
 }, false);


    
async function searchRecipeByName() {
    let searchQuery = document.getElementById("searchQuery").value;
    let numberOfResults = 10;
    searchQuery = searchQuery.trim();
    searchQuery = searchQuery.replace(/[^a-zA-Z0-9_-]+/g, "-");

    // Loading Box
    let searchResultsDiv = document.getElementById("searchResultsDiv");
    clearDiv(searchResultsDiv);
    displayLoadingBox(searchResultsDiv);

    let searchURL = `https://api.spoonacular.com/recipes/complexSearch?query=${searchQuery}&number=${numberOfResults}`;
    fetch(searchURL, {headers: {"x-api-key": apiKey}})
        .then(response => response.json())
        .then(data => {
            removeLoadingBox(searchResultsDiv);
            displayTableByName(data.results)
        });
    
}

async function searchRecipeByIngredients() {
    let ingredientsDivs = document.querySelectorAll(`div.selection.selected`);
    let numberOfResults = 10;
    let ingredientQueryStr = "";
    ingredientsDivs.forEach(ingredient => {
        ingredient.textContent.replace(" ", "-");
        ingredientQueryStr += ingredient.textContent + ",+";
        
    });

    ingredientQueryStr = ingredientQueryStr.slice(0, -2);

    // Loading Box
    let searchResultsDiv = document.getElementById("searchResultsDiv");
    clearDiv(searchResultsDiv);
    displayLoadingBox(searchResultsDiv);
    
    let searchURL = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredientQueryStr}&number=${numberOfResults}&ranking=1`;
    fetch(searchURL, {headers: {"x-api-key": apiKey}})
        .then(response => response.json())
        .then(data => {
            removeLoadingBox(searchResultsDiv);
            displayTableByIngredients(data);
        });
}

function displayLoadingBox(div) {
    let loadingBox = document.createElement("div");
    loadingBox.className = "loadingBox";

    let loadingText = document.createElement("p");
    loadingText.textContent = "Loading...";
    loadingText.className = "loadingText";

    loadingBox.appendChild(loadingText);
    div.appendChild(loadingBox);
}

function removeLoadingBox(div) {
    let loadingBox = document.querySelector(".loadingBox");
    div.removeChild(loadingBox);
}

function clearDiv(div) {
    // -- CLEAR PREVIOUS SEARCH RESULTS --
    while (div.firstChild) {
        div.removeChild(div.firstChild);
    }
}