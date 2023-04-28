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
    document.getElementById("ingredients").innerHTML = 
        ingredients.map(ingredient => 
            `<div class="ingredients">
                <label>
                    <input type="checkbox" name=${ingredient.name} value=${ingredient.id}>${ingredient.name}</input>
                </label>
            </div>`
        ).join("");
}