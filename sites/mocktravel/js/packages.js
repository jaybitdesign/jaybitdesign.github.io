// Author: James Buchanan
// Date: Feb 19, 2019
// Info: Replace images on hover with JavaScript
// Repo: https://github.com/jaybitdesign/class-assignments/tree/master/javascript/final

function fade(option, string) {
	// If option == 0, replace with new image
	// If option != 0, reset to old image
	// Switch locations
	switch (string) {
		case 'mexico':
			if (option == 0) {
				// Replace
				document.getElementById(string).src = "img/mexico.jpg";
			} else {
				// Reset
				document.getElementById(string).src = "img/mexico-alt.jpg";
			}
			break;
		case 'barbados':
			if (option == 0) {
				// Replace
				document.getElementById(string).src = "img/barbados.jpg";
			} else {
				// Reset
				document.getElementById(string).src = "img/barbados-alt.jpg";
			}
			break;
		case 'miami':
			if (option == 0) {
				// Replace
				document.getElementById(string).src = "img/miami.jpg";
			} else {
				// Reset
				document.getElementById(string).src = "img/miami-alt.jpg";
			}
			break;
		case 'greece':
			if (option == 0) {
				// Replace
				document.getElementById(string).src = "img/greece.jpg";
			} else {
				// Reset
				document.getElementById(string).src = "img/greece-alt.jpg";
			}
			break;
		case 'paris':
			if (option == 0) {
				// Replace
				document.getElementById(string).src = "img/paris.jpg";
			} else {
				// Reset
				document.getElementById(string).src = "img/paris-alt.jpg";
			}
			break;
		case 'cuba':
			if (option == 0) {
				// Replace
				document.getElementById(string).src = "img/cuba.jpg";
			} else {
				// Reset
				document.getElementById(string).src = "img/cuba-alt.jpg";
			}
			break;
	}
}
