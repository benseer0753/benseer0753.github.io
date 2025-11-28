function checkTheme() {
	switch(localStorage.getItem("theme")) {
		case "dark":
			darkMode();
			break;
		case "light":
			lightMode();
			break;
		default:
			lightMode();
			break;
	}
}

function setDarkMode() {
	localStorage.setItem("theme", "dark");
	checkTheme();
	console.log("Theme: Dark");
}

function setLightMode() {
	localStorage.setItem("theme", "light");
	checkTheme();
	console.log("Theme: Light");
}

function darkMode() {
	document.getElementById("theme").href = "/dark.css"
}

function lightMode() {
	document.getElementById("theme").href = "/light.css"
}
