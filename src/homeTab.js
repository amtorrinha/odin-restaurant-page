const loadHomeTab = () => {
    const contentDiv = document.getElementById("content");

    // Create the image
    const image = document.createElement("img");
    image.src = "../src/images/restaurant.jpg";
    image.alt = "Restaurant Image";

    // Create text section
    const sectionDiv = document.createElement("div");
    const heading = document.createElement("h1");
    heading.textContent = "Welcome to Restaurant Name";
    const paragraph = document.createElement("p");
    paragraph.textContent = "Experience the finest dining in town at Restaurant Name. We offer a diverse menu of delicious dishes prepared with the freshest ingredients and served in a warm and welcoming atmosphere. Whether you're joining us for a romantic dinner or a casual lunch, our restaurant is the perfect choice for any occasion.";
    sectionDiv.appendChild(heading);
    sectionDiv.appendChild(paragraph);

    // Append all elements to the content div
    const tabDiv = document.createElement("div");
    tabDiv.classList.add("home-content");
    tabDiv.appendChild(image);
    tabDiv.appendChild(sectionDiv);
    contentDiv.appendChild(tabDiv);
}

export { loadHomeTab };