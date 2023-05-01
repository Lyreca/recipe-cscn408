var onlyAlphaNumericRegex = /[^a-zA-Z0-9_-]+/g;

function joinNames(data) {
    let names = "";
    data.forEach(ingredient => {
        names += ingredient.name + ", ";
    });
    return names;
}

function displayTableByName(data) {
    var div = document.getElementById("searchResultsDiv");
    var table = document.createElement("table");
    
    // -- CREATE TABLE HEAD SECTION --
    let thead = table.createTHead();
    let row = thead.insertRow();

    // no. of search result
    let th = document.createElement("th");
    let text = document.createTextNode("No.");
    th.appendChild(text);
    row.appendChild(th);

    // image
    th = document.createElement("th");
    text = document.createTextNode("Image");
    th.appendChild(text);
    row.appendChild(th);

    // title
    th = document.createElement("th");
    text = document.createTextNode("Title");
    th.appendChild(text);
    row.appendChild(th);

    // -- CREATE TABLE BODY SECTION --
    for (let i = 0; i < data.length; i++) {
        let row = table.insertRow();
        let cell = row.insertCell();
        let text = document.createTextNode(i + 1);
        cell.appendChild(text);

        cell = row.insertCell();
        let query = data[i].title.replace(onlyAlphaNumericRegex, "-");
        query = query.toLowerCase();
        console.log(query);
        let url = `https://spoonacular.com/recipes/${query}-${data[i].id}`;

        let a = document.createElement("a");
        a.href = url;
        a.target = "_blank";

        let img = document.createElement("img");
        img.src = data[i].image;

        a.appendChild(img);
        cell.appendChild(a);

        cell = row.insertCell();
        let a2 = document.createElement("a");
        a2.href = url;
        a2.target = "_blank";
        text = document.createTextNode(data[i].title);
        a2.appendChild(text);
        cell.appendChild(a2);
  }

  div.appendChild(table);

  let successText = document.getElementById("searchByNameText");
  successText.textContent = `Search Results: ${data.length} Recipes Found!`;
}

function displayTableByIngredients(data) {
    var div = document.getElementById("searchResultsDiv");
    var table = document.createElement("table");
    
    // -- CREATE TABLE HEAD SECTION --
    let thead = table.createTHead();
    let row = thead.insertRow();

    // no. of search result
    let th = document.createElement("th");
    let text = document.createTextNode("No.");
    th.appendChild(text);
    row.appendChild(th);

    // image
    th = document.createElement("th");
    text = document.createTextNode("Image");
    th.appendChild(text);
    row.appendChild(th);

    // title
    th = document.createElement("th");
    text = document.createTextNode("Title");
    th.appendChild(text);
    row.appendChild(th);

    // used ingredients
    th = document.createElement("th");
    text = document.createTextNode("Used Ingredients");
    th.appendChild(text);
    row.appendChild(th);

    // missed ingredients
    th = document.createElement("th");
    text = document.createTextNode("Missing Ingredients");
    th.appendChild(text);
    row.appendChild(th);

    // unused ingredients
    th = document.createElement("th");
    text = document.createTextNode("Unused Ingredients");
    th.appendChild(text);
    row.appendChild(th);

    // -- CREATE TABLE BODY SECTION --
    for (let i = 0; i < data.length; i++) {
        let row = table.insertRow();
        let cell = row.insertCell();
        let text = document.createTextNode(i + 1);
        cell.appendChild(text);

        cell = row.insertCell();

        let query = data[i].title.replace(onlyAlphaNumericRegex, "-");
        query = query.toLowerCase();
        let url = `https://spoonacular.com/recipes/${query}-${data[i].id}`;

        let a = document.createElement("a");
        a.href = url;
        a.target = "_blank";

        let img = document.createElement("img");
        img.src = data[i].image;

        a.appendChild(img);
        cell.appendChild(a);

        cell = row.insertCell();
        let a2 = document.createElement("a");
        a2.href = url;
        a2.target = "_blank";
        text = document.createTextNode(data[i].title);
        a2.appendChild(text);
        cell.appendChild(a2);

        cell = row.insertCell();
        console.log(data[i].usedIngredients)
        text = document.createTextNode(joinNames(data[i].usedIngredients));
        cell.appendChild(text);

        cell = row.insertCell();
        text = document.createTextNode(joinNames(data[i].missedIngredients));
        cell.appendChild(text);

        cell = row.insertCell();
        text = document.createTextNode(joinNames(data[i].unusedIngredients));
        cell.appendChild(text);
    }

    div.appendChild(table);

    let successText = document.getElementById("searchByIngredientsText");
    successText.textContent = `Search Results: ${data.length} Recipes Found!`;
}