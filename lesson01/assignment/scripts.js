// Code that requires the DOM be loaded should not be run until the DOM is loaded
document.addEventListener("DOMContentLoaded", function() {


  //Page Stucture//
  const container = document.createElement('div');
  container.className = "container";

  const head = document.createTextNode('ES6 Methods');
  const heading = document.createElement('h1');
  heading.appendChild(head)
  container.appendChild(heading);

  const bodyElement = document.querySelector('body');
  bodyElement.appendChild(container);

  const wrapper = document.getElementById('main-content');

  container.appendChild(wrapper);



  //Initial Data Set//
  const array = [3, 1, 5, 3, 7, 5, 9, 7];

  //Event Listener Input1//
  const formOne = document.getElementById('form1');
  const cardOne = document.getElementById("card1");

  formOne.addEventListener('submit', function(event) {
    event.preventDefault()

    //Input Handler//
    const userInput = document.getElementById('input1').value
    const userNumber = parseInt(userInput)
    console.log(userNumber)

    if (!isNaN(userNumber)) {

      //Push User Input to the Array
      array.push(userNumber);
      console.log(array);
      const sum = array.reduce((sum, num) =>
        sum + num);
      const average = sum / array.length;
      console.log(average);

      //Handles Output to the DOM
      const result = document.getElementById('result1')
      const text = document.createTextNode(`Your input "${userNumber}" has been pushed to the array and averaged by the index length`)
      result.appendChild(text)
      cardOne.appendChild(result)
      cardOne.classList.add('submitted')

      // Resets the form field
      document.getElementById('input1').value = ''
    }
  });


  //Event Listener Input2
  const formTwo = document.getElementById('form2');
  const cardTwo = document.getElementById("card2");

  formTwo.addEventListener('submit', function(event) {
    event.preventDefault()

    //Input Handler//
    const userInput = document.getElementById('input2').value
    const userNumber = parseInt(userInput)
    console.log(userNumber)

    // Verify the user gave us a real number
    if (!isNaN(userNumber)) {

      //Function returning values larger than user input value
      const isLarger = value => value > userNumber;

      //Filter Method creates an array consisting of the only the elements that are greater than the user input and the forEach method logs each elemnent that is larger individually in the console

      const bigger = array.filter(isLarger).forEach(array => {
        console.log(array);
      });

      //Get the  length of the new array created by filter method
      const elementSum = array.filter(isLarger).length;

      //Handles Output to the DOM element
      const result = document.getElementById('result2')
      const text = document.createTextNode(`Your input "${userNumber}" is smaller than "${elementSum}" elements of the array`)
      result.appendChild(text)
      cardTwo.appendChild(result)
      cardTwo.classList.add('submitted')

      // Resets the form field
      document.getElementById('input2').value = ''
    }
  })

  //Event Listener Input3
  const formThree = document.getElementById('form3');
  const cardThree = document.getElementById("card3");

  formThree.addEventListener('submit', function(event) {
    event.preventDefault()

    //Input Handler//
    const userInput = document.getElementById('input3').value
    const userNumber = parseInt(userInput)
    console.log(userNumber)

    if (!isNaN(userNumber)) {

      //The find method delivers the first addend in the array to produce a sum greater than 10
      const newSum = array.find((x) => x + userNumber >= 10);
      console.log(newSum);

      //Handle Output
      const result = document.getElementById('result3')
      const text = document.createTextNode(`"${newSum}" is the first element of the array when added with your input "${userNumber}" produces a sum greater than 10`)
      result.appendChild(text)
      cardThree.appendChild(result)
      cardThree.classList.add('submitted')

      // Resets the form field
      document.getElementById('input3').value = ''
    }
  })
  //Event Listener Input4
  const formFour = document.getElementById('form4');
  const cardFour = document.getElementById("card4");

  formFour.addEventListener('submit', function(event) {
    event.preventDefault()

    //Input Handler//
    const userInput = document.getElementById('input4').value
    const userNumber = parseInt(userInput)
    console.log(userNumber)

    if (!isNaN(userNumber)) {

      //The map method will create a new array with the product of the original arrays items multilpied by the user input number
      let results = array.map(function(value) {
        return (value * userNumber);
      });
      console.log(results);

      //Handle Output
      const result = document.getElementById('result4')
      const text = document.createTextNode(`"${results}" is the map of the array when its items are multiplied with your input "${userNumber}"`)
      result.appendChild(text)
      cardFour.appendChild(result)
      cardFour.classList.add('submitted')

      // Resets the form field
      document.getElementById('input4').value = ''

    }
  })



})
