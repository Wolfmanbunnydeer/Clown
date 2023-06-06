function AddGame() {
  var date = document.getElementById("date").value;
  var homeTeam = document.getElementById("hometeam").value;
  var awayTeam = document.getElementById("awayteam").value;
  var homePoint = document.getElementById("homepoint").value;
  var awayPoint = document.getElementById("awaypoint").value;
  
  var gameDiv = document.getElementById("gameDiv");
  var gameOutput = document.getElementById("gameOutput");
  
  var gameInfo = document.createElement("p");
  gameInfo.innerHTML = "Date: " + date + "<br>Home Team: " + homeTeam + "<br>Away Team: " + awayTeam + "<br>Home Points: " + homePoint + "<br>Away Points: " + awayPoint;
  
  gameOutput.appendChild(gameInfo);
  
  gameDiv.innerHTML = "";
  gameDiv.appendChild(document.createElement("br"));
  gameDiv.appendChild(document.createElement("br"));
  
  var newGameForm = document.createElement("form");
  newGameForm.id = "gamesForm";
  
  var newGameSelect = document.createElement("select");
  newGameSelect.id = "mySelect";
  newGameSelect.innerHTML = `
    <option>Arizona Cardinal</option>
    <option>Atlanta Falcons</option>
    <option>Carolina Panthers</option>
    <option>Chicago Bears</option>
    <option>Dallas Cowboys</option>
    <option>Detroit Lions</option>
    <option>Jacksonville Jaguars</option>
    <option>Green Bay Packers</option>
    <option>Los Angeles Rams</option>
    <option>Minnesota Vikings</option>
    <option>New Orleans Saints</option>
    <option>New York Giants</option>
    <option>Denver Broncos</option>
    <option>Houston Texans</option>
    <option>Miami Dolphins</option>
    <option>Tennessee Titans</option>
    <option>Buffalo Bills</option>
  `;
  
  newGameForm.appendChild(document.createElement("br"));
  newGameForm.appendChild(document.createElement("br"));
  
  var label = document.createElement("label");
  label.innerHTML = "Please Enter Home Team:";
  
  var newGameButton = document.createElement("button");
  newGameButton.onclick = AddGame;
  newGameButton.innerHTML = "Add Game";
  
  gameDiv.appendChild(newGameForm);
  newGameForm.appendChild(label);
  newGameForm.appendChild(newGameSelect);
  newGameForm.appendChild(newGameButton);
}

var addButton = document.createElement("button");
addButton.onclick = AddGame;
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

