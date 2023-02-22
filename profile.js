/* <button id="color">My Favorite Color</button>
  <button id="place">My Favorite Place</button>
  <button id="ritual">My Favorite Ritual</button> */

const color = document.querySelector("#color");
const place = document.querySelector("#place");
const ritual = document.querySelector("#ritual");

color.addEventListener("click", () => alert("My favorite color is Red!"));
place.addEventListener("click", () => alert("My favorite place is Home!"));
ritual.addEventListener("click", () => alert("My favorite ritual is Sleep!"));
