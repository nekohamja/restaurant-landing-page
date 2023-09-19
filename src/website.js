import loadHome from "./home";
import loadShop from "./shop";
import loadAbout from "./about";

function createHeader() {
  const header = document.createElement("header");
  const restaurantName = document.createElement("h3");
  restaurantName.classList.add("brand-name");
  restaurantName.textContent = "SavoryBites";
  header.appendChild(restaurantName);
  header.appendChild(createNav());
  header.appendChild(createSearch());
  return header;
}

function createNav() {
  const nav = document.createElement("nav");
  const homeButton = document.createElement("button");
  homeButton.classList.add("button-nav");
  homeButton.textContent = "Home";
  homeButton.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    setActiveButton(homeButton);
    clearSection();
    loadHome();
  });

  const menuButton = document.createElement("button");
  menuButton.classList.add("button-nav");
  menuButton.textContent = "Order";
  menuButton.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    setActiveButton(menuButton);
    clearSection();
    loadShop();
  });

  const contactButton = document.createElement("button");
  contactButton.classList.add("button-nav");
  contactButton.textContent = "Info";
  contactButton.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    setActiveButton(contactButton);
    clearSection();
    loadAbout();
  });

  nav.appendChild(homeButton);
  nav.appendChild(menuButton);
  nav.appendChild(contactButton);
  return nav;
}
function createSearch() {
  const search = document.createElement("INPUT");
  search.setAttribute("type", "text");
  search.placeholder = "Pizza...";
  return search;
}

function setActiveButton(button) {
  const buttons = document.querySelectorAll(".button-nav");
  buttons.forEach((button) => {
    if (button !== this) button.classList.remove("active");
  });
  button.classList.add("active");
}

function clearSection() {
  const section = document.getElementById("section");
  section.innerHTML = "";
}

function createSection() {
  const section = document.createElement("section");
  section.classList.add("section");
  section.setAttribute("id", "section");
  return section;
}

function initializeWebsite() {
  const content = document.getElementById("content");
  content.appendChild(createHeader());
  content.appendChild(createSection());
  setActiveButton(document.querySelector(".button-nav"));
  loadHome();
}

export default initializeWebsite;
