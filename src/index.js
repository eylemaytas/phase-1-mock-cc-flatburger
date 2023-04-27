const burgerName = document.getElementById("name");
const burgerImage = document.getElementById("image");
const burgerDescription = document.getElementById("burger-info");
let numOfBurgers = 0;
const burgerNum = document.getElementById("burger-num");
const restaurantMenu = document.getElementById("restaurant-menu");
const foodDetails = document.getElementById("food-detail");
const buyBurger = document.getElementById("buy-burger");
fetch("http://localhost:3000/burgers/1")
  .then((res) => res.json())
  .then((burger) => {
    burgerName.textContent = burger.name;
    burgerImage.src = burger.image;
    burgerDescription.textContent = burger.description;
    numOfBurgers = burger.maximum_number_of_burgers - burger.burgers_sold;
    burgerNum.textContent = numOfBurgers;
  });

fetch("http://localhost:3000/burgers")
  .then((res) => res.json())
  .then((burgers) => {
    burgers.forEach((burger) => {
      const imageElement = document.createElement("img");
      imageElement.src = burger.image;
      restaurantMenu.appendChild(imageElement);
      imageElement.addEventListener("click", () => {
        burgerImage.src = burger.image;
        burgerName.textContent = burger.name;
        burgerDescription.textContent = burger.description;
        numOfBurgers = burger.maximum_number_of_burgers - burger.burgers_sold;
        burgerNum.textContent = numOfBurgers;
      });
    });
  });

buyBurger.addEventListener("click", () => {
  if (numOfBurgers < 0) return;
  numOfBurgers = numOfBurgers - 1;
  burgerNum.textContent = numOfBurgers;
});

/* const burgerNameElement = document.getElementById("name");
const burgerImageElement = document.getElementById("image");
const burgerDescriptionElement = document.getElementById("burger-info");
const burgerNumElement = document.getElementById("burger-num");
let numOfBurgers;
const restaurantMenuElement = document.getElementById("restaurant-menu");

fetch("http://localhost:3000/burgers/1")
  .then((res) => res.json())
  .then((burger) => {
    burgerNameElement.textContent = burger.name;
    burgerImageElement.src = burger.image;
    burgerDescriptionElement.textContent = burger.description;
    numOfBurgers = burger.maximum_number_of_burgers - burger.burgers_sold;
    burgerNumElement.textContent = numOfBurgers;
  });

fetch("http://localhost:3000/burgers")
  .then((res) => res.json())
  .then((burgers) => {
    burgers.forEach((burger) => {
      const newImageElement = document.createElement("img");
      newImageElement.src = burger.image;
      restaurantMenuElement.appendChild(newImageElement);
    });
  });

const buyBurgerButton = document.getElementById("buy-burger");
buyBurgerButton.addEventListener("click", () => {
 if(numOfBurgers > 0){
    numOfBurgers--
    burgerNumElement.textContent = numOfBurgers
 }
    
});

*/
