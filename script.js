function AddGame() {
  var date = document.getElementById("date").value;
  var homeTeam = document.getElementById("hometeam").value;
  var awayTeam = document.getElementById("awayteam").value;
  var homePoint = document.getElementById("homepoint").value;
  var awayPoint = document.getElementById("awaypoint").value;
  
  var gameOutput = document.getElementById("gameOutput");
  
  // Create a new paragraph to show the game info
  var gameInfo = document.createElement("p");
  gameInfo.innerHTML = "Date: " + date + "<br>Home Team: " + homeTeam + "<br>Away Team: " + awayTeam + "<br>Home Points: " + homePoint + "<br>Away Points: " + awayPoint;
  
  gameOutput.appendChild(gameInfo);
}

function createForm() {
  var gameDiv = document.getElementById("gameDiv");

  // Create a form for adding a game
  var newGameForm = document.createElement("form");
  newGameForm.id = "gamesForm";

  var labelDate = document.createElement("label");
  labelDate.innerHTML = "Enter Game Date: ";
  var inputDate = document.createElement("input");
  inputDate.id = "date";
  inputDate.type = "date";

  var labelHomeTeam = document.createElement("label");
  labelHomeTeam.innerHTML = "Enter Home Team: ";
  var inputHomeTeam = document.createElement("input");
  inputHomeTeam.id = "hometeam";
  
  var labelAwayTeam = document.createElement("label");
  labelAwayTeam.innerHTML = "Enter Away Team: ";
  var inputAwayTeam = document.createElement("input");
  inputAwayTeam.id = "awayteam";

  var labelHomePoints = document.createElement("label");
  labelHomePoints.innerHTML = "Enter Home Points: ";
  var inputHomePoints = document.createElement("input");
  inputHomePoints.id = "homepoint";
  inputHomePoints.type = "number";

  var labelAwayPoints = document.createElement("label");
  labelAwayPoints.innerHTML = "Enter Away Points: ";
  var inputAwayPoints = document.createElement("input");
  inputAwayPoints.id = "awaypoint";
  inputAwayPoints.type = "number";
  
  var addButton = document.createElement("button");
  addButton.type = "button";
  addButton.onclick = AddGame;
  addButton.innerHTML = "Add Game";

  // Append elements to the form
  newGameForm.appendChild(labelDate);
  newGameForm.appendChild(inputDate);
  newGameForm.appendChild(document.createElement("br"));
  newGameForm.appendChild(labelHomeTeam);
  newGameForm.appendChild(inputHomeTeam);
  newGameForm.appendChild(document.createElement("br"));
  newGameForm.appendChild(labelAwayTeam);
  newGameForm.appendChild(inputAwayTeam);
  newGameForm.appendChild(document.createElement("br"));
  newGameForm.appendChild(labelHomePoints);
  newGameForm.appendChild(inputHomePoints);
  newGameForm.appendChild(document.createElement("br"));
  newGameForm.appendChild(labelAwayPoints);
  newGameForm.appendChild(inputAwayPoints);
  newGameForm.appendChild(document.createElement("br"));
  newGameForm.appendChild(addButton);

  // Append the form to the gameDiv
  gameDiv.appendChild(newGameForm);
}

window.onload = createForm;  // Call the function to set up the form when the page loads.

addButton.innerHTML = "Add Game";

document.getElementById("gamesForm").appendChild(addButton);

// Add Game function
function AddGame() {
  var date = document.getElementById("date").value;
  var homeTeam = document.getElementById("hometeam").value;
  var awayTeam = document.getElementById("awayteam").value;
  var homePoint = document.getElementById("homepoint").value;
  var awayPoint = document.getElementById("awaypoint").value;

  // Perform desired actions with the game data
  // ...

  // Clear input fields
  document.getElementById("date").value = "";
  document.getElementById("hometeam").value = "";
  document.getElementById("awayteam").value = "";
  document.getElementById("homepoint").value = "";
  document.getElementById("awaypoint").value = "";
}

// Add event listener to the Add Game button
var addButton = document.querySelector(".btn-primary");
addButton.addEventListener("click", AddGame);

