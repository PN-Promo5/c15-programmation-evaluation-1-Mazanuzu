//Exercise 1 : Create a function which creates a graphical interface containing 2 labels (first name / last name), 2 text input fields corresponding to said labels and an "Ok" button

//creation of the name form function
function createNameForm() {

  //creation of the form container
  let nameForm = document.createElement("form");
  nameForm.classList.add("nameForm");
  nameForm.action = "index.html";
  nameForm.method = "post";
  document.body.appendChild(nameForm);

  //creation of the paragraph containing first name label + first name text input
  let firstNameParagraph = document.createElement("p");
  nameForm.appendChild(firstNameParagraph);

  //creation of the first name label
  let firstNameLabel = document.createElement("label");
  firstNameLabel.textContent = "Quel est votre prénom ? ";
  firstNameLabel.setAttribute("for", "firstName");
  firstNameParagraph.appendChild(firstNameLabel);

  //creation of the first name text input
  let firstNameInput = document.createElement("input");
  firstNameInput.type = "text";
  firstNameInput.setAttribute("name", "firstName");
  firstNameParagraph.appendChild(firstNameInput);

  //creation of the last name paragraph
  let lastNameParagraph = document.createElement("p");
  nameForm.appendChild(lastNameParagraph);

  //creation of the last name label
  let lastNameLabel = document.createElement("label");
  lastNameLabel.textContent = "Quel est votre nom ? ";
  lastNameLabel.setAttribute("for", "lastName");
  lastNameParagraph.appendChild(lastNameLabel);

  //creation of the last name text input
  let lastNameInput = document.createElement("input");
  lastNameInput.type = "text";
  lastNameInput.setAttribute("name", "lastName");
  lastNameParagraph.appendChild(lastNameInput);

  //creation of the "Ok" button paragraph
  let okBtnParagraph = document.createElement("p");
  nameForm.appendChild(okBtnParagraph);

  //creation of the "Ok" button
  let okBtn = document.createElement("input");
  okBtn.type = "button";
  okBtn.value = "OK";
  okBtnParagraph.appendChild(okBtn);

  //creation of an hidden error message
  let errorMsg = document.createElement("p");
  errorMsg.textContent = "Veuillez remplir tous les champs du formulaire avant de passer à l'étape suivante !";
  errorMsg.hidden = true;
  nameForm.appendChild(errorMsg);

  //creation of an hidden welcome message
  let welcomeMsg = document.createElement("p");
  welcomeMsg.hidden = true;
  document.body.appendChild(welcomeMsg);

  //adding an event listener to the button containing an anonymous function
  okBtn.addEventListener("click", function() {

    //testing if one of the two text input field is empty or filled incorrectly
    if ((firstNameInput.value === "" || undefined) || (lastNameInput.value === "" || undefined)) {

      //if one of the field is empty or filled incorrectly, then the hidden error message appears
      errorMsg.hidden = false;

      //if both fields are filled correctly, the form disappears and the hidden welcome message appears
    } else {
      nameForm.hidden = true;
      welcomeMsg.hidden = false;
      welcomeMsg.textContent = "Bonjour " + firstNameInput.value + " " + lastNameInput.value + " !";
    }

  }, false);

}










//Exercise 2 : create a function which creates a graphical interface containing 4 matching labels and number type input fields

//creation of the salary converting function
function salaryConverter() {

  //creation of the monthly gross salary paragraph
  let monthlyGrossSalaryParagraph = document.createElement("p");
  document.body.appendChild(monthlyGrossSalaryParagraph);

  //creation of the monthly gross salary label
  let monthlyGrossSalaryLabel = document.createElement("label");
  monthlyGrossSalaryLabel.textContent = "Salaire mensuel brut ";
  monthlyGrossSalaryLabel.setAttribute("for", "monthlyGross");
  monthlyGrossSalaryParagraph.appendChild(monthlyGrossSalaryLabel);

  //creation of the monthly gross salary input
  let monthlyGrossSalaryInput = document.createElement("input");
  monthlyGrossSalaryInput.type = "number";
  monthlyGrossSalaryInput.setAttribute("name", "monthlyGross");
  monthlyGrossSalaryParagraph.appendChild(monthlyGrossSalaryInput);

  //creation of the monthly net salary paragraph
  let monthlyNetSalaryParagraph = document.createElement("p");
  document.body.appendChild(monthlyNetSalaryParagraph);

  //creation of the monthly net salary label
  let monthlyNetSalaryLabel = document.createElement("label");
  monthlyNetSalaryLabel.textContent = "Salaire mensuel net ";
  monthlyNetSalaryLabel.setAttribute("for", "monthlyNet");
  monthlyNetSalaryParagraph.appendChild(monthlyNetSalaryLabel);

  //creation of the monthly net salary input
  let monthlyNetSalaryInput = document.createElement("input");
  monthlyNetSalaryInput.type = "number";
  monthlyNetSalaryInput.setAttribute("name", "monthlyNet");
  monthlyNetSalaryParagraph.appendChild(monthlyNetSalaryInput);

  //creation of the yearly gross salary paragraph
  let yearlyGrossSalaryParagraph = document.createElement("p");
  document.body.appendChild(yearlyGrossSalaryParagraph);

  //creation of the yearly gross salary label
  let yearlyGrossSalaryLabel = document.createElement("label");
  yearlyGrossSalaryLabel.textContent = "Salaire annuel brut ";
  yearlyGrossSalaryLabel.setAttribute("for", "yearlyGross");
  yearlyGrossSalaryParagraph.appendChild(yearlyGrossSalaryLabel);

  //creation of the yearly gross salary input
  let yearlyGrossSalaryInput = document.createElement("input");
  yearlyGrossSalaryInput.type = "number";
  yearlyGrossSalaryInput.setAttribute("name", "yearlyGross");
  yearlyGrossSalaryParagraph.appendChild(yearlyGrossSalaryInput);

  //creation of the yearly net salary paragraph
  let yearlyNetSalaryParagraph = document.createElement("p");
  document.body.appendChild(yearlyNetSalaryParagraph);

  //creation of the yearly net salary label
  let yearlyNetSalaryLabel = document.createElement("label");
  yearlyNetSalaryLabel.textContent = "Salaire annuel net ";
  yearlyNetSalaryLabel.setAttribute("for", "yearlyNet");
  yearlyNetSalaryParagraph.appendChild(yearlyNetSalaryLabel);

  //creation of the yearly net salary input
  let yearlyNetSalaryInput = document.createElement("input");
  yearlyNetSalaryInput.type = "number";
  yearlyNetSalaryInput.setAttribute("name", "yearlyNet");
  yearlyNetSalaryParagraph.appendChild(yearlyNetSalaryInput);

  //creation of the event listener for the monthly gross input which contains the converting function
  monthlyGrossSalaryInput.addEventListener("input", function(event) {
    monthlyNetSalaryInput.value = monthlyGrossSalaryInput.value / 1.298;
    yearlyGrossSalaryInput.value = monthlyGrossSalaryInput.value * 12;
    yearlyNetSalaryInput.value = (monthlyGrossSalaryInput.value / 1.298) * 12;
  }, false);

  //creation of the event listener for the monthly net input which contains the converting function
  monthlyNetSalaryInput.addEventListener("input", function(event) {
    monthlyGrossSalaryInput.value = monthlyNetSalaryInput.value * 1.298;
    yearlyGrossSalaryInput.value = (monthlyNetSalaryInput.value * 1.298) * 12;
    yearlyNetSalaryInput.value = monthlyNetSalaryInput.value * 12;
  }, false);

  //creation of the event listener for the yearly gross input which contains the converting function
  yearlyGrossSalaryInput.addEventListener("input", function(event) {
    monthlyNetSalaryInput.value = (yearlyGrossSalaryInput.value / 1.298) / 12;
    monthlyGrossSalaryInput.value = yearlyGrossSalaryInput.value / 12;
    yearlyNetSalaryInput.value = yearlyGrossSalaryInput.value / 1.298;
  }, false);

  //creation of the event listener for the yearly net input which contains the converting function
  yearlyNetSalaryInput.addEventListener("input", function(event) {
    monthlyNetSalaryInput.value = yearlyNetSalaryInput.value / 12 ;
    monthlyGrossSalaryInput.value = (yearlyNetSalaryInput.value * 12) * 1.298;
    yearlyGrossSalaryInput.value = yearlyNetSalaryInput.value * 1.298;
  }, false);

}










//Exercise 3 : create a function which takes an integer array as a parameter and returns a copy of said array with only even values

//creation of the function
function createEvenNumbersArrayFunction(integerArray) {


  //creation of an intermediary variable used to enumerate
  let i = 0;

  //creation of a variable used to stock the current element during the loop
  let currentElement;

  //creation of the second array used to stock only even numbers
  let evenNumbersArray = [];

  //creation of a loop which runs until the enumerate variable value is the same as the array length
  while(i < integerArray.length) {

    //stocking the current element
    currentElement = integerArray[i];

    //even numbers are multiples of 2 so this is what we're looking for
    if (i % 2 !== 0) {

      //if the tested value is indeed a multiple of 2, it is stocked in the second array
      evenNumbersArray.push(currentElement);
    }

    //incrementing the intermediary variable value so the loop tests the next value in the array
    i += 1;
  }

  //the function returns the new array containing only even numbers
  return evenNumbersArray;
}









//Exercise 4 : create a function which takes a string array as a parameter and returns a copy of said array with only coordinating conjuctions

//creation of the function
function createCoordinatingConjuctionsArrayFunction(stringArray) {

  //creation of an inter var used for enumeration
  let i = 0;

  //creation of the variable used to stock the current element
  let currentElement;

  //creation of the second array used to stock coordinating conjunctions
  let coordinatingConjunctionsArray = [];

  //creation of a loop which runs until the inter variable value is the same as the array length
  while (i < stringArray.length) {

    //stocking the current element
    currentElement = stringArray[i];

    //we're looking for specific words to look for so we add those words as a condition to be stored in the new array
    if ((currentElement === "mais") || (currentElement === "ou") || (currentElement === "et") || (currentElement === "donc") || (currentElement === "or") || (currentElement === "ni") || (currentElement === "car")) {

      //if the tested value matches the condition, the word is added to the new array
      coordinatingConjunctionsArray.push(currentElement);
    }

    //incrementing the intermediary variable value so the loop tests the next value in the array
    i+= 1;
  }

  //the function returns the new array containing only the coordinating conjunctions
  return coordinatingConjunctionsArray;
}









//Exercise 5 : create a function that returns an integer array containing 128 numbers which all have a value that goes from 0 to 100

//creation of the function
function createIntegerArrayWith128RandomValuesFunction(){

  //creation of an inter var used for enumeration
  let i = 0;

  //creation of a var used to stock the current element
  let currentElement;

  //creation of an array used to stock the random numbers
  let arrayWith128RandomValues = [];

  //creation of a loop which runs until 128 numbers are put into the array
  while (i < 128) {

    //incrementing the inter var value so the loop can reach its condition
    i+= 1

    //stocking the current element
    currentElement = i;

    //we need a way to generate random numbers
    //we establish a minimum value (which is 0)
    let min = Math.ceil(0);
    //we establish a maximum value (which is 100)
    let max = Math.floor(100);
    //we create the random number generating variable
    let rng = Math.floor(Math.random() * (max - min)) + min;

  //with each turn of the loop, a new random value is added to the array
  arrayWith128RandomValues.push(rng);

  }

  //the function returns the integer array containing 128 random values
  return arrayWith128RandomValues
}
