// Author: James Buchanan
// Date: Feb 19, 2019
// Info: Display the date in a readable format
// Repo: https://github.com/jaybitdesign/class-assignments/tree/master/javascript/final

function generate() {
	// Convert date to en-US with options
	var options = {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	};
	var date = new Date().toLocaleDateString('en-US', options);
	// Replace text
	document.getElementById("date").innerText = date;
}

// Init
generate();
