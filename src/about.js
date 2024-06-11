import "./style.css";

export default function makeAboutPage() {
	const aboutPage = document.createElement("div");
	aboutPage.classList.add("about-page");

	// Title
	const title = document.createElement("h1");
	title.textContent = "About Us";
	aboutPage.appendChild(title);

	// Description
	const description = document.createElement("p");
	description.textContent =
		"Welcome to the World's First Chess and Kebab Shop! Our unique establishment combines the strategic thrill of chess with the culinary delight of kebabs. Whether you're a seasoned grandmaster or a curious beginner, our cozy ambiance and mouth-watering menu offer something for everyone. Join us for a memorable experience where great food and great minds meet!";
	aboutPage.appendChild(description);

	// Team Section
	const teamTitle = document.createElement("h2");
	teamTitle.textContent = "Our Team";
	aboutPage.appendChild(teamTitle);

	const teamMembers = [
		{
			name: "John Doe",
			role: "Founder & Chef",
			description:
				"John is the visionary behind our unique concept. With a passion for chess and culinary arts, he brings his expertise to create an unforgettable dining experience.",
		},
		{
			name: "Jane Smith",
			role: "Co-Founder & Manager",
			description:
				"Jane ensures that every aspect of our restaurant runs smoothly. Her dedication to customer service and operational excellence is second to none.",
		},
	];

	const teamList = document.createElement("ul");
	teamList.classList.add("team-list");

	teamMembers.forEach((member) => {
		const listItem = document.createElement("li");
		listItem.classList.add("team-member");

		const memberName = document.createElement("h3");
		memberName.textContent = member.name;

		const memberRole = document.createElement("p");
		memberRole.textContent = `Role: ${member.role}`;

		const memberDescription = document.createElement("p");
		memberDescription.textContent = member.description;

		listItem.appendChild(memberName);
		listItem.appendChild(memberRole);
		listItem.appendChild(memberDescription);
		teamList.appendChild(listItem);
	});

	aboutPage.appendChild(teamList);

	return aboutPage;
}
