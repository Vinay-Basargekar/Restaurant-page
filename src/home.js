import "./styles.css";
import Icon from "./images/restro.jpg";

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
	items[2] = makeLessonItem(items[2]);

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
	p3.textContent =
		"From spicy jerk lamb to savory teriyaki chicken, our dishes promise to tantalize" +
		" your taste buds and leave you craving more. Join us for an unforgettable" +
		" experience where great food meets great skill. Whether you're here to challenge " +
		"a friend to a game of chess or simply to savor a delightful meal, we guarantee " +
		"a memorable time filled with laughter, strategy, and gastronomic pleasure.";
	const p4 = document.createElement("p");
	p4.textContent =
		"Come for the chess, stay for the kebabs, and enjoy a harmonious blend of flavors and fun.";
	const p5 = document.createElement("p");
	p5.textContent = "We look forward to serving you!";

	item.appendChild(p1);
	item.appendChild(p2);
	item.appendChild(p3);
	item.appendChild(p4);
	item.appendChild(p5);

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

function makeLessonItem(item) {
	const h3 = document.createElement("h3");
	h3.textContent = "Lessons";
	const p1 = document.createElement("p");
	p1.textContent =
		"Join on weeknights for a free kebab with any purchase of lessons.";
	const p2 = document.createElement("p");
	p2.textContent = "Tournaments every Sunday!";
	item.appendChild(h3);
	item.appendChild(p1);
	item.appendChild(p2);
	return item;
}
