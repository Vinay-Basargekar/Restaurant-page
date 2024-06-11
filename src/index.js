import "./styles.css";

import makeHomePage from "./home";
import makeMenuPage from "./menu";
import makeAboutPage from "./about";

function component() {
	
	const container = document.querySelector("#content");
	const homeBtn = document.querySelector("#homeBtn");
	const menuBtn = document.querySelector("#menuBtn");
	const aboutBtn = document.querySelector("#aboutBtn");

	homeBtn.addEventListener("click", () => {
		container.textContent = "";
		container.appendChild(makeHomePage());
	});
	menuBtn.addEventListener("click", () => {
		container.textContent = "";
		container.appendChild(makeMenuPage());
	});
	aboutBtn.addEventListener("click", () => {
		container.textContent = "";
		container.appendChild(makeAboutPage());
	});

	const homePage = makeHomePage();
	container.appendChild(homePage);
	return container;
}

document.body.appendChild(component());
