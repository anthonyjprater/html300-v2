const container = document.querySelector('.container');


/*Fetch function for JSON data*/
async function fetchDataJSON() {
  const response = await fetch('/data/data.json');
  const card = await response.json();  return card;
};

fetchDataJSON().then(card => {
  card; // fetched data



/*Loop Here*/
card.forEach((card) => {

let mainCard = document.createElement('main');
mainCard.className = 'card';

const keys = Object.values(card.codeLanguages);


let name = card.name;
let jobTitle = card.jobTitle;
let company = card.company;
let experience = card.experience;
let school = card.school;
let major = card.major;
let email = card.email;
let linkedIn = card.linkedInUrl;
let code = card.codeLangauges;


mainCard.innerHTML = `
  <div class="wrapper">
    <div class="profile">
      <figure class="photo" id="photo">
        <img src="/img/headshot.jpg" alt="profile photo of dog" class="image">
      </figure>
      <div class="title-card">
        <p class="name">${name}</p>
        <p class="title" id="jobTitle">${jobTitle}</p>
      </div>
    </div>
    <div class="details">
      <ul class="profile-list">
      <li class="item" id="company"><span class="info">Company: </span><span>${company}</span></li>
            <li class="item" id="experience"><span class="info">Experience: </span><span>${experience}</span></li>
            <li class="item" id="school"><span class="info">School: </span><span>${school}</span></li>
            <li class="item" id="major"><span class="info">Major: </span><span>${major}</span></li>
            <li class="item" id="email"><span class="info">Email: </span><span>${email}</span></li>
            <li class="item" id="codeLanguages"><span class="info">Coding Languages: </span><span>${keys}</span></li>
            <li class="item linkedin" id="linkedInUrl"><span class="info"><img src="/img/linkedin.svg" alt="linked in logo" class="logo" ></span><span>${linkedIn}</span></li>
      </ul>
    </div>
  </div>
`
container.appendChild(mainCard);

    });
document.body.appendChild(container);
  });

window.addEventListener('DOMContentLoaded', (event) => {

console.log('DOM fully loaded and parsed');
});
