function filterIngredients() {
    var input = document.getElementById("searchBarIngredients");
    input.addEventListener("keyup", filter);
}

function filter() {
    var input = document.getElementById("searchBarIngredients");
    var ingredients = document.getElementById("ingredientsUnselected");
    var selection = ingredients.getElementsByClassName("selection");

    if(input.value !== "") {
        var filter = input.value.toUpperCase();

        for (var i = 0; i < selection.length; i++) {
            var txtValue = selection[i].textContent;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                selection[i].style.display = "";
            } else {
                selection[i].style.display = "none";
            }
        }
    } 
    else {
        // reset
        for (var i = 0; i < selection.length; i++) {
            selection[i].style.display = "";
        }
    }
}