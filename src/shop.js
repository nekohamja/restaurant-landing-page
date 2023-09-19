function createShop() {
  const shop = document.createElement("div");
  shop.classList.add("shop");
  const itemContainer = document.createElement("div");

  itemContainer.appendChild(
    createDescription(
      "Most Popular Dishes",
      `Indulge in a culinary adventure that's been curated by our patrons' 
      preferences. These dishes have delighted countless taste 
      buds and left a lasting impression.`
    )
  );

  itemContainer.appendChild(createSeeAll());

  itemContainer.appendChild(
    createMenuItem(
      "Nachos",
      "Neque porro quisquam est qui. dolorem ipsum quia dolor sit amet.",
      "1.png"
    )
  );

  itemContainer.appendChild(
    createMenuItem(
      "Nachos",
      "Neque porro quisquam est qui. dolorem ipsum quia dolor sit amet.",
      "2.png"
    )
  );

  itemContainer.appendChild(
    createMenuItem(
      "Nachos",
      "Neque porro quisquam est qui. dolorem ipsum quia dolor sit amet.",
      "3.png"
    )
  );

  itemContainer.appendChild(
    createMenuItem(
      "Nachos",
      "Neque porro quisquam est qui. dolorem ipsum quia dolor sit amet.",
      "2.png"
    )
  );

  itemContainer.appendChild(
    createDescription(
      "New and Fresh",
      `Indulge in a culinary adventure that's been curated by our patrons' 
      preferences. These dishes have delighted countless taste 
      buds and left a lasting impression.`
    )
  );

  itemContainer.appendChild(createSeeAll());

  itemContainer.appendChild(
    createMenuItem(
      "Nachos",
      "Neque porro quisquam est qui. dolorem ipsum quia dolor sit amet.",
      "1.png"
    )
  );

  itemContainer.appendChild(
    createMenuItem(
      "Nachos",
      "Neque porro quisquam est qui. dolorem ipsum quia dolor sit amet.",
      "2.png"
    )
  );

  itemContainer.appendChild(
    createMenuItem(
      "Nachos",
      "Neque porro quisquam est qui. dolorem ipsum quia dolor sit amet.",
      "3.png"
    )
  );

  itemContainer.appendChild(
    createMenuItem(
      "Nachos",
      "Neque porro quisquam est qui. dolorem ipsum quia dolor sit amet.",
      "2.png"
    )
  );

  shop.appendChild(itemContainer);
  return shop;
}

function createMenuItem(name, description, image) {
  const menuItem = document.createElement("div");
  menuItem.classList.add("menu-item");

  const foodName = document.createElement("h3");
  foodName.textContent = name;

  const foodDescription = document.createElement("p");
  foodDescription.textContent = description;

  const foodImage = document.createElement("img");
  foodImage.src = `assets/items/${image}`;
  foodImage.alt = `${name}`;

  menuItem.appendChild(foodImage);
  menuItem.appendChild(foodName);
  menuItem.appendChild(foodDescription);

  return menuItem;
}

function createDescription(title, description) {
  const descriptionBar = document.createElement("div");
  descriptionBar.classList.add("description");
  const header = document.createElement("h2");
  header.textContent = title;

  const subText = document.createElement("p");
  subText.textContent = description;

  descriptionBar.appendChild(header);
  descriptionBar.appendChild(subText);

  return descriptionBar;
}

function createSeeAll() {
  const container = document.createElement("div");
  container.classList.add("see-all-bar");

  const button = document.createElement("button");
  button.classList.add("button-alt");
  button.textContent = "See All";

  container.appendChild(button);
  return container;
}

function loadShop() {
  const section = document.getElementById("section");
  section.appendChild(createShop());
}
export default loadShop;
