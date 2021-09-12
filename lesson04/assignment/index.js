let main = document.createElement('main');
main.className = 'icons';

/*Fetch function for JSON data*/
async function fetchDataJSON() {
  const response = await fetch('/data/data.json');
  const card = await response.json();
  return card;
}

fetchDataJSON().then(card => {
  card; // fetched data


  /*Loop Here*/

  /* for (let i= 0; i < card.length; i++) {  */
  //
  card.forEach((card) => {


    let icon = card.social;
    let brand = card.brand;
    let socialLinks = document.createElement('a');
    socialLinks.className = 'logo';
    socialLinks.setAttribute('href', '#');

    socialLinks.innerHTML = `
  <div class="layer">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span class="${icon}"></span>
  </div>
  <div class="text">${brand}</div>`
    main.appendChild(socialLinks);
    document.body.appendChild(main);

  })
})
