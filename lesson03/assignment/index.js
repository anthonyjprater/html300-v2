/*Fetch function for JSON data*/
async function fetchDataJSON() {
  const response = await fetch('https://raw.githubusercontent.com/UWFront-End-Cert/html300-v2/master/lesson03/assignment/data/data.json');
  const card = await response.json();  return card;
}

fetchDataJSON().then(card => {
  card; // fetched data


/*Loop Here*/

/* for (let i= 0; i < card.length; i++) {  */

card.forEach((card) => {

/*
console.log(card[i].);

for (let r in card.codeLanguages) {
 console.log(card.codeLanguages);
}
	*/

const keys = Object.values(card.codeLanguages);
console.log(keys);

let name = card.name;
let jobTitle = card.jobTitle;
let company = card.company;
let experience = card.experience;
let school = card.school;
let major = card.major;
let email = card.email;
let linkedIn = card.linkedInUrl;
let code = card.codeLangauges;

const hook = document.querySelector('.template-hook');
const container = document.createElement('div');
container.className = 'container';
hook.appendChild(container);

const cardWrapper = document.createElement('main');
cardWrapper.className = 'card';
container.appendChild(cardWrapper);

const wrapper = document.createElement('div');
wrapper.className = 'wrapper';
cardWrapper.appendChild(wrapper);

const profile = document.createElement('div');
profile.className = 'profile';
wrapper.appendChild(profile);

const photo = document.createElement('figure');
photo.className = 'photo';
profile.appendChild(photo);

const image = document.createElement('img');
image.className = 'image';
image.src = 'https://github.com/anthonyjprater/html300-v2/blob/master/lesson02/assignment/img/headshot.jpg?raw=true';
photo.appendChild(image);

const titleCard = document.createElement('div');
titleCard.className = 'title-card';
profile.appendChild(titleCard);

const fullName = document.createElement('p');
fullName.className = 'name';
fullName.textContent = `${name}`;
titleCard.appendChild(fullName);

const title = document.createElement('p');
title.className = 'title';
title.textContent = `${jobTitle}`;
titleCard.appendChild(title);

const details = document.createElement('div');
details.className = 'details';
wrapper.appendChild(details);

const profileList = document.createElement('ul');
profileList.className = 'profile-list';
details.appendChild(profileList);

const employer = document.createElement('li');
employer.className = 'item';
employer.id = 'company';
employer.textContent = `Company: `;
profileList.appendChild(employer);

const infoOne = document.createElement('span');
infoOne.className = 'info';
infoOne.textContent = `${company}`;
employer.appendChild(infoOne);

const skill = document.createElement('li');
skill.className = 'item';
skill.id = 'experience';
skill.textContent = `Experience: `;
profileList.appendChild(skill);

const infoTwo = document.createElement('span');
infoTwo.className = 'info';
infoTwo.textContent = `${experience}`;
skill.appendChild(infoTwo);

const education = document.createElement('li');
education.className = 'item';
education.id = 'school';
education.textContent = `School: `;
profileList.appendChild(education);

const infoThree = document.createElement('span');
infoThree.className = 'info';
infoThree.textContent = `${school}`;
education.appendChild(infoThree);

const subjectField = document.createElement('li');
subjectField.className = 'item';
subjectField.id = 'major';
subjectField.textContent = `Major: `;
profileList.appendChild(subjectField);


const infoFour = document.createElement('span');
infoFour.className = 'info';
infoFour.textContent = `${major}`;
subjectField.appendChild(infoFour);

const emailAddress = document.createElement('li');
emailAddress.className = 'item';
emailAddress.id = 'email';
emailAddress.textContent = `Email: `;
profileList.appendChild(emailAddress);

const infoFive = document.createElement('span');
infoFive.className = 'info';
infoFive.textContent = `${email}`;
emailAddress.appendChild(infoFive);

const coding = document.createElement('li');
coding.className = 'item';
coding.id = 'codeLanguages';
coding.textContent = `Coding Languages: `;
profileList.appendChild(coding);

const infoSix = document.createElement('span');
infoSix.className = 'info';
infoSix.textContent = `${keys}`;
coding.appendChild(infoSix);

const linked = document.createElement('li');
linked.id = 'linkedInUrl';
linked.className = 'item';
profileList.appendChild(linked);

const icon = document.createElement('img');
icon.src = 'https://raw.githubusercontent.com/anthonyjprater/html300-v2/8f5853ddbe24b1f8930ee4eb714f98a57450dc0c/lesson02/assignment/img/linkedin.svg';
icon.className = 'logo';
icon.id = 'logo';
linked.appendChild(icon);

const infoSeven = document.createElement('span');
infoSeven.className = 'info';
infoSeven.textContent = `${linkedIn}`;
linked.appendChild(infoSeven);
	})
})
