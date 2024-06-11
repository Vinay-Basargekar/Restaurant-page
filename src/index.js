
import './style.css';
import makeHomePage from './home';
import makeMenuPage from './menu';
import makeAboutPage from './about';

function component() {
	const container = document.querySelector("#content");

	const homeBtn = document.querySelector("#homeBtn");
	homeBtn.addEventListener("click", () => {
		container.textContent = "";
		container.appendChild(makeHomePage());
	});

	const menuBtn = document.querySelector("#menuBtn");
	menuBtn.addEventListener("click", () => {
		container.textContent = "";
		container.appendChild(makeMenuPage());
	});

	const aboutBtn = document.querySelector("#aboutBtn");
	aboutBtn.addEventListener("click", () => {
		container.textContent = "";
		container.appendChild(makeAboutPage());
	});

	const homePage = makeHomePage();
	container.appendChild(homePage);

	return container;
}

document.body.appendChild(component());