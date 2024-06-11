import './styles.css';

export default function makeAboutPage() {
	const aboutPage = document.createElement("div");
	aboutPage.classList.add("about-us");
	// Title
	const title = document.createElement("h1");
	title.textContent = "About Us";
	aboutPage.appendChild(title);
	// Create the items
	const items = [];
	const info = getInfo();
	for (let i = 0; i < 2; i++) {
		const itemInfo = info[i];
		items[i] = document.createElement("div");
		items[i].classList.add("item");
		items[i] = makeBackStory(items[i], info[i]);
	}

	items.forEach((item) => {
		aboutPage.appendChild(item);
	});
	return aboutPage;
}

function makeBackStory(item, paraContent) {
	const paraSize = 3;
	for (let i = 0; i < paraSize; i++) {
		const p = document.createElement("p");
		p.textContent = paraContent[i];
		item.appendChild(p);
	}
	return item;
}

function getInfo() {
	const info = [
		[
			"Welcome to Fork 'N Skewer, where the timeless elegance " +
				"of chess meets the savory delights of kebabs! Nestled " +
				"in the heart of the bustling city, Fork 'n Skewer is more" +
				" than just a cafe—it's a haven for chess enthusiasts and" +
				" food aficionados alike. ",
			"Our story began with a simple " +
				"passion for both the strategic intricacies of chess " +
				"and the aromatic flavors of authentic kebabs. Inspired" +
				" by the idea of blending these two worlds, we set out" +
				" to create a unique space where players could gather" +
				" to enjoy thrilling matches over mouthwatering kebab" +
				" creations. From classic rook-to-pawn maneuvers to " +
				"the artful skewering of succulent meats, every " +
				"aspect of Fork 'n Skewer is crafted to stimulate " +
				"both the mind and the palate. ",
			"So whether you're a seasoned grandmaster or a casual " +
				"player looking to indulge in delectable cuisine, join us" +
				" at Fork 'N Skewer for a chess experience like no other." +
				" After all, where else can you enjoy a thrilling game " +
				"of chess while savoring the finest kebabs in town?",
		],
		["Contact Us!", "Email: kebabGambit@chess.com", "Phone: 555-123-4567"],
	];
	return info;
}
