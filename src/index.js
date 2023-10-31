import { loadHomeTab } from "./homeTab";
import { loadMenuTab } from "./menuTab";
import { loadContactTab } from "./contactTab";
import './style.css';

const contentDiv = document.getElementById("content");

// Create Header Div and Heading
const headerDiv = document.createElement("div");
headerDiv.classList.add("header");

// Create Tab elements and add click events
const tabList = document.createElement("ul");
const homeElem = document.createElement("li");
homeElem.textContent = "Home";
homeElem.addEventListener("click", function() {
    contentDiv.removeChild(contentDiv.lastChild); // removes previous tab element
    loadHomeTab();
});
const menuElem = document.createElement("li");
menuElem.textContent = "Menu";
menuElem.addEventListener("click", function() {
    contentDiv.removeChild(contentDiv.lastChild);
    loadMenuTab();
});
const contactElem = document.createElement("li");
contactElem.textContent = "Contact";
contactElem.addEventListener("click", function() {
    contentDiv.removeChild(contentDiv.lastChild);
    loadContactTab();
});

tabList.appendChild(homeElem);
tabList.appendChild(menuElem);
tabList.appendChild(contactElem);
headerDiv.append(tabList);

// Append main elements
contentDiv.appendChild(headerDiv);

// Load Default Tab
loadHomeTab();