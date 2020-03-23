// Author: James Buchanan
// Date: Feb 19, 2019
// Info: Animate plane on package page
// Repo: https://github.com/jaybitdesign/class-assignments/tree/master/javascript/final

function generate() {
	var forward = true;
	var plug = document.getElementById("plug");
}

// Animate back and forth
function plugWalk() {
	if (plug.offsetLeft >= document.body.offsetWidth - plug.offsetWidth) {
		forward = false;
	}
	if (plug.offsetLeft <= 0) {
		forward = true;
	}
	if (forward) {
		plug.style.transform = "scaleX(1)";
		plug.style.left = plug.offsetLeft + 1 + "px";
	} else {
		plug.style.transform = "scaleX(-1)";
		plug.style.left = plug.offsetLeft - 1 + "px";
	}
}

setInterval(plugWalk, 5);
