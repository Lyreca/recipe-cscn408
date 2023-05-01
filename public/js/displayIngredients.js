var ingredientList = []

function sortIngredientList(list) {
    list.sort((x, y) => (x.id < y.id) ? 1 : (x.price > y.price) ? -1 : 0);
    return list;
}

function readCSVData(data) {
    const rows = data.split("\n");
    rows.slice(1, -1).forEach(row => {
        row = row.slice(0,-1);
        const columns = row.split(";");

        if(ingredientList.map(ingredient => ingredient.id).includes(columns[1])) {
            return;
        }

        ingredientList.push({name: columns[0], id: columns[1]});
    });

    ingredientList = sortIngredientList(ingredientList);
    console.log(ingredientList.length);
}

function displayIngredients() {
    ingredientList.map(ingredient => {
            var ingredientDiv = document.createElement("div");
            ingredientDiv.classList.add("selection");
            ingredientDiv.id = ingredient.id;
            ingredientDiv.innerHTML = ingredient.name;
            document.getElementById("ingredientsUnselected").appendChild(ingredientDiv);
        }
    )
}

function highlightIngredients() {
    const selections = document.querySelectorAll(".selection");
    const selected = document.querySelectorAll(".selected");

    selections.forEach(selection => {
        selection.addEventListener("click", () => {
                if (selection.classList.contains("selected")) {
                    selection.classList.remove("selected");
                    document.getElementById("ingredientsSelected").removeChild(selection);
                    document.getElementById("ingredientsUnselected").appendChild(selection);
                } else {
                    selection.classList.add("selected");
                    document.getElementById("ingredientsUnselected").removeChild(selection);
                    document.getElementById("ingredientsSelected").appendChild(selection);
                }
                filter();
            })
        }
    );
}