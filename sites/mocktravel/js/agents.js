// Author: James Buchanan
// Date: Feb 19, 2019
// Info: List all the agents and their information
// Repo: https://github.com/jaybitdesign/class-assignments/tree/master/javascript/final

function generate() {
	// Generate agent names, numbers, and photos
	var element = document.getElementById("agents");
	// Agent information
	var agents = ["Donald Duck", "Goofy D. Dawg", "Mickey Mouse"]
	var numbers = ["(403) 123-4567", "(403) 123-4567", "(403) 123-4567"]
	var images = ["duck.gif", "goof.gif", "mouse.png"]
	// Loop through agents
	for (var i = 0; i < agents.length; i++) {
		// Photo
		element.innerHTML += "<img class='u-max-full-width' style='agent-photo' src='img/" + images[i] + "'><br><br>";
		// Name
		element.innerHTML += "<h2 class='agent'>" + agents[i] + "</h2>";
		// Number
		element.innerHTML += "<h3 class='agent-number'>" + numbers[i] + "</h3><br><br>";
	}
}

// Init
generate();
