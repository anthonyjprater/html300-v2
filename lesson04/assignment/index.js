/*Fetch function for JSON data*/
async function fetchDataJSON() {
  const response = await fetch('/data/data.json');
  const card = await response.json();  return card;
}

fetchDataJSON().then(card => {
  card; // fetched data


/*Loop Here*/

/* for (let i= 0; i < card.length; i++) {  */
//
card.forEach((card) => {


console.log(card.social);

let icon = card.social;

  let main = document.createElement('main');
  main.className = 'icons';

  main.innerHTML = `
<a href="#">
  <div class="layer">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span class="${icon}"></span>
  </div>
</a>
`
document.body.appendChild(main);

  })
})
