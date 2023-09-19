function createAbout() {
  const about = document.createElement("div");
  about.classList.add("about");

  const headerDiv = document.createElement("div");
  headerDiv.classList.add("info-description");
  const header = document.createElement("h2");
  header.textContent = "Quality Deliveries, Happy Tummies";
  const text = document.createElement("p");
  text.textContent = `Indulge in a culinary adventure that's been curat
    ed by our patrons' preferences. These dishes have delighted
    countless taste buds and left a lasting impression.`;
  headerDiv.appendChild(header);
  headerDiv.appendChild(text);

  const imgContainer = document.createElement("div");
  imgContainer.classList.add("img-container");
  const img = document.createElement("img");
  img.src = `./assets/about.jpg`;
  imgContainer.appendChild(img);

  const contactDiv = document.createElement("div");
  contactDiv.classList.add("info-contact");
  const contactHeader = document.createElement("h2");
  contactHeader.textContent = "Make Orders With Our Mobile App!";
  const contactText = document.createElement("p");
  contactText.textContent = `Indulge in a culinary adventure that's been curat
  ed by our patrons' preferences. These dishes have delighted
  countless taste buds and left a lasting impression.`;
  contactDiv.appendChild(contactHeader);
  contactDiv.appendChild(contactText);

  const contactImgContainer = document.createElement("div");
  contactImgContainer.classList.add("img-contact");
  const contactImg = document.createElement("img");
  contactImg.src = `./assets/play-store.png`;
  contactImgContainer.appendChild(contactImg);
  const contactImg2 = document.createElement("img");
  contactImg2.classList.add("icon-big");
  contactImg2.src = `./assets/app-store.png`;
  contactImgContainer.appendChild(contactImg2);

  about.appendChild(headerDiv);
  about.appendChild(imgContainer);
  about.appendChild(contactDiv);
  about.appendChild(contactImgContainer);
  return about;
}

function loadAbout() {
  const section = document.getElementById("section");
  section.appendChild(createAbout());
}

export default loadAbout;
