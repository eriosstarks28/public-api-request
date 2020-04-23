const profileUrl = "https://randomuser.me/api/?results=12";
const gallery = document.querySelector(".gallery");
const body = document.querySelector("body");

//==========================
// FETCH FUNCTIONS
//===========================

fetch(profileUrl)
  .then((response) => response.json())
  .then(getProfiles)
  .then(generateHTML);

function getProfiles(json) {
  const profile = json.results;

  return profile;
}

function generateHTML(data) {
  for (i = 0; i < data.length; i++) {
    const card = document.createElement("div");
    const modal = document.createElement("div");
    card.className = "card";
    modal.className = "moda;-container";
    modal.style.dispaly = "none";

    card.innerHTML = `
    <div class="card-img-container">
        <img class="card-img" src="${data[i].picture.large}"alt="profile picture">
    </div>
    <div class="card-info-container">
        <h3 id="name" class="card-name cap">${data[i].name.first},${data[i].name.last}</h3>
        <p class="card-text">${data[i].email}</p>
        <p class="card-text cap">${data[i].location.city}</p>
    </div>
</div>`;
    gallery.appendChild(card);
  }
}
