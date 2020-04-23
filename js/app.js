const profileUrl = "https://randomuser.me/api/?results=12";
const gallery = document.querySelector(".gallery");
const body = document.querySelector("body");

//==========================
// FETCH FUNCTIONS
//===========================

fetch(profileUrl)
  .then((response) => response.json())
  .then(generatePerson);

function generatePerson(data) {
  data = data.results;
  for (i = 0; i < data.length; i++) {
    createProfile(data);
    createModal(data);
  }

  const cards = document.querySelectorAll(".card");
  const [...modal] = document.querySelectorAll(".modal-container");

  cards.forEach((card, index) =>
    card.addEventListener("click", () => {
      let num = index;
      modal[index].style.display = "inherit";
      modalBtn(modal);
    })
  );
}

function createProfile(data) {
  const card = document.createElement("div");
  card.className = "card";
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

function createModal(data) {
  const modal = document.createElement("div");
  modal.className = "modal-container";
  modal.innerHTML = `
   <div class="modal">
       <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
       <div class="modal-info-container">
           <img class="modal-img" src="${data[i].picture.large}" alt="profile picture">
           <h3 id="name" class="modal-name cap">${data[i].name.first},${data[i].name.last}</h3>
           <p class="modal-text">${data[i].email}</p>
           <p class="modal-text cap">${data[i].location.city}</p>
           <hr>
           <p class="modal-text">${data[i].cell}</p>
           <p class="modal-text">${data[i].location.street},${data[i].location.city},${data[i].location.postcode}</p>
           <p class="modal-text">Birthday:${data[i].dob.date}</p>
       </div>
   </div>`;

  modal.style.display = "none";
  body.appendChild(modal);
}

function modalBtn(modal) {
  console.log(modal);
  modal.forEach((box) =>
    box.addEventListener("click", () => {
      if ((event.target.Tagname = "button")) {
        box.style.display = "none";
      }
    })
  );
}
