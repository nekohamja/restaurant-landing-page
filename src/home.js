function createHome() {
  const home = document.createElement("div");
  home.classList.add("home");

  const hero = document.createElement("div");
  const heroDialog = document.createElement("h1");
  heroDialog.textContent = "Elevate Your Dining Experience with SavoryBites";

  const heroSubText = document.createElement("p");
  heroSubText.textContent = `At SavoryBites, we invite you to embark on a culinary journey like no other.
    Our passion for exceptional food, inspired by flavors from around the world, 
    has led us to create a dining experience that goes beyond the ordinary.`;

  const heroButton = document.createElement("button");
  heroButton.classList.add("button-primary");
  heroButton.innerText = "Order Now";

  const heroButton2 = document.createElement("button");
  heroButton2.classList.add("button-alt");
  heroButton2.innerText = "Watch Video";

  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("hero-buttons");

  const heroImg = document.createElement("img");
  heroImg.classList.add("hero-img");
  heroImg.src = `./assets/items/3.png`;

  buttonContainer.appendChild(heroButton);
  buttonContainer.appendChild(heroButton2);

  hero.appendChild(heroDialog);
  hero.appendChild(heroSubText);
  hero.appendChild(buttonContainer);
  hero.appendChild(createRating());
  home.appendChild(hero);
  home.appendChild(heroImg);
  return home;
}

function createRating() {
  const rating = document.createElement("div");
  const ratingDialog = document.createElement("p");
  const ratingNumber = document.createElement("p");
  ratingDialog.textContent = "300+ happy customers";
  ratingNumber.textContent = "⭐ 4.7 (323 reviews)";
  rating.appendChild(ratingDialog);
  rating.appendChild(ratingNumber);

  return rating;
}

function loadHome() {
  const section = document.getElementById("section");
  section.appendChild(createHome());
}

export default loadHome;
