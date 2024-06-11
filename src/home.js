import './style.css';

export default function makeHomePage() {
	const homePage = document.createElement("div");
	homePage.classList.add("home-page");
	// Title
	const title = document.createElement("h1");
	title.textContent = "Restaurent page";
	homePage.appendChild(title);

	// Create the items
	const items = [];
	for (let i = 0; i < 3; i++) {
		items[i] = document.createElement("div");
		items[i].classList.add("item");
	}
	items[0] = makeInfoItem(items[0]);
	items[1] = makeHoursItem(items[1]);

	items.forEach((item) => {
		homePage.appendChild(item);
	});
	return homePage;
}

function makeInfoItem(item) {
	const p1 = document.createElement("p");
	p1.textContent =
		"Welcome to the World's First Chess and Kebab Shop! Discover a unique" +
		" fusion of culinary delight and strategic mastery at our one-of-a-kind " +
		"establishment.";
	const p2 = document.createElement("p");
	p2.textContent =
		" Whether you're a grandmaster or a novice, our cozy ambiance invites you to " +
		"enjoy mouth-watering kebabs while engaging in thrilling chess matches. " +
		"Our menu features an array of delicious skewers, each crafted to perfection " +
		"using the finest ingredients and authentic recipes from around the globe.";
	const p3 = document.createElement("p");
	p3.textContent = "We look forward to serving you!";

	item.appendChild(p1);
	item.appendChild(p2);
	item.appendChild(p3);
	return item;
}

function makeHoursItem(item) {
	const h3 = document.createElement("h3");
	h3.textContent = "Hours";
	const hoursDiv = document.createElement("div");
	hoursDiv.classList.add("hours");
	const p1 = document.createElement("p");
	p1.textContent = "Weekdays: 1PM - 10PM";
	const p2 = document.createElement("p");
	p2.textContent = "Saturday: 10AM - 12PM";
	const p3 = document.createElement("p");
	p3.textContent = "Sunday: 9AM - 9PM!";

	hoursDiv.appendChild(p1);
	hoursDiv.appendChild(p2);
	hoursDiv.appendChild(p3);

	item.appendChild(h3);
	item.appendChild(hoursDiv);
	return item;
}
