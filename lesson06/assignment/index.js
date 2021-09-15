const imageWrapper = document.querySelector(".wrapper_gallery");


/*Fetch function for JSON data from unsplash api*/
async function fetchDataJSON() {
  const response = await fetch('https://api.unsplash.com/search/photos?query=starwars&per_page=12&client_id=PaHrfu4_q3NMgYkSbeKWbwn7QLzd8AQuzUtbVnBkafg');
  const data = await response.json();
  return data;
};

fetchDataJSON().then(data => {
  data; // fetched data

  console.log(data.results);


  /*Loop Here for images from unsplash json*/
  data.results.forEach((data) => {

    // Get image, link and credit to artist
    let imageBox = document.createElement('figure');
    imageBox.className = 'gallery__item col-xl-2 col-lg-4 col-md-6 col-sm-12';
    imageBox.id = 'gallery';
    let imageLink = data.urls.regular;
    let creditLink = data.user.links.html;
    let creditName = data.user.name;

    // Template for image page
    imageBox.innerHTML = `
    <a href="#" class="d-block text-center">
      <img class="img-fluid img-thumbnail bg-dark gallery__image" src="${imageLink}" alt="star wars inspired image">
    </a>
    <br>
    <p class="m-auto text-light">Credit to <a href="${creditLink}">${creditName}</a></p>
`
    imageWrapper.appendChild(imageBox)

  });
});

//Sample JS for testing UI
const spring = document.getElementById('c3po');

function myfunction(x) {
  document.getElementById('c3po').style.filter = "invert(0)";
}

function yourfunction(x) {
  document.getElementById('c3po').style.filter = "invert(1)";
}
