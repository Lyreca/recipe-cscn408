var ingredients = [
            {name: "Apple", id: "apple"},
            {name: "Banana", id: "banana"},
            {name: "Orange", id: "orange"},
            {name: "Pear", id: "pear"},
            {name: "Strawberry", id: "strawberry"},
            {name: "Lettuce", id: "lettuce"},
            {name: "Tomato", id: "tomato"},
            {name: "Carrot", id: "carrot"},
            {name: "Cucumber", id: "cucumber"},
            {name: "Onion", id: "onion"},
            {name: "Chicken", id: "chicken"},
            {name: "Beef", id: "beef"},
            {name: "Pork", id: "pork"},
            {name: "Lamb", id: "lamb"},
            {name: "Turkey", id: "turkey"}
        ];

function displayIngredients() {
    ingredients.map(ingredient => {
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
            })
        }
    );
}