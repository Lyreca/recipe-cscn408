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

async function grabCSVData() {

    let response = await fetch("https://spoonacular.com/application/frontend/downloads/ingredients.csv");
    let data = await response.text();
    return data;

}

grabCSVData()
    .then(data => readCSVData(data))
    .then(() => displayIngredients())
    .then(() => highlightIngredients())
    .then(() => filterIngredients());
    
async function searchRecipeByName() {
    let searchQuery = document.getElementById("searchQuery").value;
    let numberOfResults = 10;
    searchQuery = searchQuery.trim();
    searchQuery = searchQuery.replace(/[^a-zA-Z0-9_-]+/g, "-");

    // Loading Box
    let searchResultsDiv = document.getElementById("searchResultsDiv");
    clearDiv(searchResultsDiv);
    displayLoadingBox();

    let searchURL = `https://api.spoonacular.com/recipes/complexSearch?query=${searchQuery}&number=${numberOfResults}`;
    fetch(searchURL, {headers: {"x-api-key": apiKey}})
        .then(response => response.json())
        .then(data => {
            removeLoadingBox();
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
    displayLoadingBox();
    
    let searchURL = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredientQueryStr}&number=${numberOfResults}&ranking=1`;
    fetch(searchURL, {headers: {"x-api-key": apiKey}})
        .then(response => response.json())
        .then(data => {
            removeLoadingBox();
            displayTableByIngredients(data);
        });
}

function displayLoadingBox() {
    let searchResultsDiv = document.getElementById("searchResultsDiv");

    let loadingBox = document.createElement("div");
    loadingBox.className = "loadingBox";

    let loadingText = document.createElement("p");
    loadingText.textContent = "Loading...";
    loadingText.className = "loadingText";

    loadingBox.appendChild(loadingText);
    searchResultsDiv.appendChild(loadingBox);
}

function removeLoadingBox() {
    let searchResultsDiv = document.getElementById("searchResultsDiv");
    let loadingBox = document.querySelector(".loadingBox");
    searchResultsDiv.removeChild(loadingBox);
}

function clearDiv(div) {
    // -- CLEAR PREVIOUS SEARCH RESULTS --
    while (div.firstChild) {
        div.removeChild(div.firstChild);
    }
}