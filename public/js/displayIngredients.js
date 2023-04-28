var ingredientCategories = [
    {name: "Fruits", id: "fruits", 
        ingredients: [
            {name: "Apple", id: "apple"},
            {name: "Banana", id: "banana"},
            {name: "Orange", id: "orange"},
            {name: "Pear", id: "pear"},
            {name: "Strawberry", id: "strawberry"}
        ]  
    },
    {name: "Vegetables", id: "vegetables",
        ingredients: [
            {name: "Lettuce", id: "lettuce"},
            {name: "Tomato", id: "tomato"},
            {name: "Carrot", id: "carrot"},
            {name: "Cucumber", id: "cucumber"},
            {name: "Onion", id: "onion"}
        ]
    },
    {name: "Meat", id: "meat",
        ingredients: [
            {name: "Chicken", id: "chicken"},
            {name: "Beef", id: "beef"},
            {name: "Pork", id: "pork"},
            {name: "Lamb", id: "lamb"},
            {name: "Turkey", id: "turkey"}
        ]
    }
];

function displayIngredients() {
    document.getElementById("ingredientCategories").innerHTML = 
        ingredientCategories.map(category => 
            `<div class="ingredientCategory">
                <p>${category.name}</p>
            </div>`
        ).join("");
}