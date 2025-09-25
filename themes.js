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
	document.body.style.backgroundColor = "#111";
	document.body.style.color = "white";
	document.getElementById("mainText").style.borderLeftColor = "dimGrey";
	const codes = document.getElementsByTagName("code");
	//console.log(codes.length);
	for (let i = 0; i < codes.length; ++i) {
		codes[i].style.borderColor = "white";
	}
	const bigCodes = document.getElementsByClassName("bigCode");
	for (let i = 0; i < bigCodes.length; ++i) {
		bigCodes[i].style.borderColor = "white";
	}
}

function lightMode() {
	document.body.style.backgroundColor = "Beige";
	document.body.style.color = "black";
	document.getElementById("mainText").style.borderLeftColor = "Grey";
	const codes = document.getElementsByTagName("code");
	//console.log(codes.length);
	for (let i = 0; i < codes.length; ++i) {
		codes[i].style.borderColor = "black";
	}
	const bigCodes = document.getElementsByClassName("bigCode");
	for (let i = 0; i < bigCodes.length; ++i) {
		bigCodes[i].style.borderColor = "black";
	}
}