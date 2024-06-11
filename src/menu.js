import "./styles.css";
import lambSkewers from "./images/lamb-skewers.jpg";
import teriyakiGrilled from "./images/teriyaki-grilled.jpg";
import thaiBeef from "./images/Thai-Beef-Skewers.jpg";
import asianGarlic from "./images/asiangarlicskewers.jpg";
import greekSalad from "./images/greek-salad.jpeg";
import beefKabob from "./images/beef-kabob.jpg";

export default function makeMenuPage() {
	const menuPage = document.createElement("div");
	menuPage.classList.add("menu");
	// Title
	const title = document.createElement("h1");
	title.textContent = "Menu";
	menuPage.appendChild(title);
	const menuOptions = document.createElement("div");
	menuOptions.classList.add("options");
	// Create the items
	const items = [];
	const info = getInfo();
	for (let i = 0; i < 6; i++) {
		const itemInfo = info[i];
		items[i] = document.createElement("div");
		items[i].classList.add("item");
		const h3 = document.createElement("h3");
		h3.textContent = itemInfo.name;
		const image = document.createElement("img");
		image.setAttribute("src", itemInfo.src);
		items[i].appendChild(h3);
		items[i].appendChild(image);
	}

	items.forEach((item) => {
		menuOptions.appendChild(item);
	});
	menuPage.appendChild(menuOptions);
	return menuPage;
}

function getInfo() {
	const info = [
		{
			name: "Sticky jerk lamb skewers with garlic sauce",
			src: lambSkewers,
		},
		{
			name: "Grilled Hawaiian Teriyaki Chicken Skewers",
			src: teriyakiGrilled,
		},
		{
			name: "Thai Beef Skewers",
			src: thaiBeef,
		},
		{
			name: "Grilled Asian Garlic Steak Skewers",
			src: asianGarlic,
		},
		{
			name: "Greek Salad Skewers",
			src: greekSalad,
		},
		{
			name: "Shish Kebabs",
			src: beefKabob,
		},
	];
	return info;
}
