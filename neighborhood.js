const clickMeButton = document.querySelector("#click-me");

function recResto() {
  const arrayOfRestaurants = [
    "Molos",
    "Charritos",
    "Rumbacubana",
    "JackAustins",
    "Chart House",
    "Houlihans",
  ];

  const randomElement =
    arrayOfRestaurants[Math.floor(Math.random() * arrayOfRestaurants.length)];

  alert(`You should try ${randomElement}!`);
}

clickMeButton.addEventListener("click", recResto);
