apiKey = "583b4f8dae7c44299b565ed0cadc193e";
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

async function searchRecipeByName() {
    let searchQuery = document.getElementById("searchQuery").value;
    let searchURL = `https://api.spoonacular.com/recipes/complexSearch?query=${searchQuery}`;
    fetch(searchURL, {headers: {"x-api-key": apiKey}})
        .then(response => response.json())
        .then(data => displayTable(data.results));

    
}