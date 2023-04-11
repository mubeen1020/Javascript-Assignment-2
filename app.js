//Javascript Assignment 2

//Q1 : Write a function that creates a closure and returns a function that can add
//a specific number to any number passed to it. For example, if the closure is
//reate

function AdditionNumber(AddNumber) {
    return function(num) {
      return num + AddNumber;
    }
  }
  const addFive = AdditionNumber(5);
  const result1= addFive(10);
  console.log(result); 

//Q2 : Write a recursive function that searches an array for a specific value. The
//function should return true if the value is found, and false if it is not. You
//can assume that the array is not nested.  

function searchArray(arr, value) {
    if (arr.length === 0) {
      return false;
    }
    if (arr[0] === value) {
      return true;
    }
    return searchArray(arr.slice(1), value);
  }
  const myArray = [1, 2, 3, 4, 5];
  const valueToSearch = 5;
  const result = searchArray(myArray, valueToSearch);
  console.log(result);

//Q3 : Write a function that adds a new paragraph element to the bottom of an
//HTML document. The function should take a string argument that will be
//used as the text content of the new paragraph element.

function addParagraphToDocument(text) {
    const newParagraph = `<p>${text}</p>`;
    document.body.innerHTML += newParagraph;
  }
  addParagraphToDocument('I am Super Hero') 
  
//Q4 : Write a function that adds a new list item to an unordered list in an HTML
//document. The function should take a string argument that will be used as
//the text content of the new list item.

function addListItemToUnorderedList(text) {
    const unorderedList = document.querySelector('ul');
    const newListItem = `<li>${text}</li>`;
    unorderedList.innerHTML += newListItem;
  }
  addListItemToUnorderedList('Item 3');

//Q5 : Write a function that changes the background color of an HTML element.
//The function should take two arguments: the first argument is a reference
//to the HTML element, and the second argument is a string representing
//the new background color.
  
function changeBackgroundColor(element, color) {
    const targetElement = document.querySelector(element);
    if (targetElement) {
      targetElement.style.backgroundColor = color;
    } else {
      console.error('Element not found:', element);
    }
  }

//Q6 : Write a function that saves an object to localStorage. The function should
//take two arguments: the first argument is a string representing the key to
//use for storing the object, and the second argument is the object to store.

function saveObjectToLocalStorage(key, object) {
    const jsonString = JSON.stringify(object);
    localStorage.setItem(key, jsonString);
  }
  const myObject = {
    name: "Muhammad Mubeen",
    age: 22,
    city: "Karachi"
  };
  saveObjectToLocalStorage("myObject", myObject);

//Q7 : Write a function that retrieves an object from localStorage. The function
//should take one argument, which is a string representing the key used to
//store the object. The function should return the object.

function getObjectFromLocalStorage(key) {
    const jsonString = localStorage.getItem(key);
    const object = JSON.parse(jsonString);
    return object;
  }
const myObject1 = getObjectFromLocalStorage("myObject");
console.log(myObject.name); 
console.log(myObject.age); 
console.log(myObject.city); 

//Q8 : Write a function that takes an object and saves each property to
//localStorage using the property name as the key and the property value as
//the value. The function should also retrieve the object from localStorage
//and return it as a new object.

function saveObjectPropertiesToLocalStorage(object) {
    for (const key in object) {
      if (object.hasOwnProperty(key)) {
        const value = object[key];
        const jsonString = JSON.stringify(value);
        localStorage.setItem(key, jsonString);
      }
    }
    const retrievedObject = {};
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const jsonString = localStorage.getItem(key);
      const value = JSON.parse(jsonString);
      retrievedObject[key] = value;
    }
    return retrievedObject;
  }
  const myObject2 = {
        name: "Muhammad Noman",
        age: 25,
        city: "Kashmir"
      };
  
  saveObjectPropertiesToLocalStorage(myObject2);
  const retrievedObject = saveObjectPropertiesToLocalStorage();
  console.log(retrievedObject.name); 
  console.log(retrievedObject.age); 
  console.log(retrievedObject.city); 
  

  