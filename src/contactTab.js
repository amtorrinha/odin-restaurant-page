const loadContactTab = () => {
    const contentDiv = document.getElementById("content");

    // Create the image
    const image = document.createElement("img");
    image.src = "../src/images/restaurant.jpg";
    image.alt = "Restaurant Image";

    // Create Contact Info
    const heading = document.createElement("h2");
    heading.textContent = "Contact Us";

    // Create the paragraph elements with contact information
    const paragraph1 = document.createElement("p");
    paragraph1.textContent = "If you have any questions or feedback, feel free to get in touch with us.";

    const paragraph2 = document.createElement("p");
    const emailLink = document.createElement("a");
    emailLink.href = "mailto:info@example.com";
    emailLink.textContent = "info@example.com";
    paragraph2.textContent = "Email: ";
    paragraph2.appendChild(emailLink);

    const paragraph3 = document.createElement("p");
    const phoneLink = document.createElement("a");
    phoneLink.href = "tel:+1234567890";
    phoneLink.textContent = "123-456-7890";
    paragraph3.textContent = "Phone: ";
    paragraph3.appendChild(phoneLink);

    const paragraph4 = document.createElement("p");
    paragraph4.textContent = "Address: 123 Restaurant Street, City, Country";

    // Create Text Div
    const textDiv = document.createElement("div");
    textDiv.appendChild(heading);
    textDiv.appendChild(paragraph1);
    textDiv.appendChild(paragraph2);
    textDiv.appendChild(paragraph3);
    textDiv.appendChild(paragraph4);

    // Create Contact Div
    const tabDiv = document.createElement("div");
    tabDiv.classList.add("contact-content");
    tabDiv.appendChild(image);
    tabDiv.appendChild(textDiv);

    contentDiv.appendChild(tabDiv);
}

export { loadContactTab };