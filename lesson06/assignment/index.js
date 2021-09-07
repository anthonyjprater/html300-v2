const imageWrapper = document.querySelector(".wrapper_gallery");

// function request(){
// fetch("https://api.unsplash.com/photos/?client_id=PaHrfu4_q3NMgYkSbeKWbwn7QLzd8AQuzUtbVnBkafg",function(data){
//   console.log(response);
// })
// }


/*Fetch function for JSON data*/
async function fetchDataJSON() {
  const response = await fetch('https://api.unsplash.com/search/photos?query=starwars&per_page=12&client_id=PaHrfu4_q3NMgYkSbeKWbwn7QLzd8AQuzUtbVnBkafg');
  const data = await response.json();  return data;
};

fetchDataJSON().then(data => {
  data; // fetched data

  console.log(data.results);


/*Loop Here*/
data.results.forEach((data) => {

  let imageBox = document.createElement('figure');
  imageBox.className = 'gallery__item col-xl-2 col-lg-4 col-md-6 col-sm-12';
  imageBox.id = 'gallery';
  let imageLink = data.urls.regular;
  let creditLink = data.user.links.html;
  let creditName = data.user.name;

  imageBox.innerHTML =`
    <a href="#" class="d-block text-center">
      <img class="img-fluid img-thumbnail bg-dark gallery__image" src="${imageLink}" alt="star wars inspired image">
    </a>
    <br>
    <p class="m-auto text-light">Credit to <a href="${creditLink}">${creditName}</a></p>
`
imageWrapper.appendChild(imageBox)

});
});

//
// for (let pic = 0; pic < 13; pic++) {
//   // Runs 13 times, with values of step 0 through 12.
//   // let imageLink = 'https://source.unsplash.com/1600x900/?star wars'
//   let imageBox = document.getElementById("gallery")
//   imageBox.HTML =  `
//   <a href="#" class="d-block w-100">
//      <img class="img-fluid img-thumbnail bg-dark" src="${imageLink}" alt="star wars inspired image">
//    </a>
// `
// imageWrapper.appendChild(imageBox);
//
//
//   console.log('here');
// };
