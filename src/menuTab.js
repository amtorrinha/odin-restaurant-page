const loadMenuTab = () => {
    const contentDiv = document.getElementById("content");

    // Create Dish Divs
    const spaghettiDiv = document.createElement("div");
    spaghettiDiv.classList.add("dish");
    const spaghettiHeading = document.createElement("h3");
    spaghettiHeading.textContent = "Spaghetti Carbonara";
    const spaghettiDescription = document.createElement("p");
    spaghettiDescription.textContent = "A classic Italian pasta dish made with creamy sauce, pancetta, and Parmesan cheese.";
    const spaghettiPrice = document.createElement("p");
    spaghettiPrice.textContent = "$12.99";
    const spaghettiImage = document.createElement("img");
    spaghettiImage.src = "../src/images/spaghetti.jpg";
    spaghettiImage.alt = "Spaghetti Image";
    spaghettiDiv.appendChild(spaghettiHeading);
    spaghettiDiv.appendChild(spaghettiDescription);
    spaghettiDiv.appendChild(spaghettiPrice);
    spaghettiDiv.appendChild(spaghettiImage);

    const saladDiv = document.createElement("div");
    saladDiv.classList.add("dish");
    const saladHeading = document.createElement("h3");
    saladHeading.textContent = "Grilled Chicken Salad";
    const saladDescription = document.createElement("p");
    saladDescription.textContent = "Fresh mixed greens with grilled chicken, cherry tomatoes, cucumbers, and balsamic vinaigrette.";
    const saladPrice = document.createElement("p");
    saladPrice.textContent = "$10.99";
    const saladImage = document.createElement("img");
    saladImage.src = "../src/images/salad.jpg";
    saladImage.alt = "Salad Image";
    saladDiv.appendChild(saladHeading);
    saladDiv.appendChild(saladDescription);
    saladDiv.appendChild(saladPrice);
    saladDiv.appendChild(saladImage);

    const pizzaDiv = document.createElement("div");
    pizzaDiv.classList.add("dish");
    const pizzaHeading = document.createElement("h3");
    pizzaHeading.textContent = "Margherita Pizza";
    const pizzaDescription = document.createElement("p");
    pizzaDescription.textContent = "A simple and delicious pizza with tomato sauce, fresh mozzarella, basil, and a thin crust.";
    const pizzaPrice = document.createElement("p");
    pizzaPrice.textContent = "$9.99";
    const pizzaImage = document.createElement("img");
    pizzaImage.src = "../src/images/pizza.jpg";
    pizzaImage.alt = "Pizza Image";
    pizzaDiv.appendChild(pizzaHeading);
    pizzaDiv.appendChild(pizzaDescription);
    pizzaDiv.appendChild(pizzaPrice);
    pizzaDiv.appendChild(pizzaImage);

    // Create Menu
    const tabDiv = document.createElement("div");
    tabDiv.classList.add("menu-content");
    tabDiv.appendChild(spaghettiDiv);
    tabDiv.appendChild(saladDiv);
    tabDiv.appendChild(pizzaDiv);

    contentDiv.appendChild(tabDiv);
}

export { loadMenuTab };