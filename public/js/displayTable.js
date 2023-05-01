function generateTableHead(table, data) {
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let key of data) {
      let th = document.createElement("th");
      let text = document.createTextNode(key);
      th.appendChild(text);
      row.appendChild(th);
    }
  }
  
function generateTable(table, data) {
    for (let element of data) {
      let row = table.insertRow();
      for (key in element) {
        let cell = row.insertCell();
        let text = document.createTextNode(element[key]);
        cell.appendChild(text);
      }
    }
  }


function joinNames(data) {
    let names = "";
    data.forEach(ingredient => {
        names += ingredient.name + ", ";
    });
    return names;
}

function displayTable(data) {
    var table = document.getElementById("searchResults");
    
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

        let query = data[i].title.replace(" ", "-");
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
        text = document.createTextNode(data[i].title);
        cell.appendChild(text);

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
}