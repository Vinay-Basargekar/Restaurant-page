import "./style.css";

export default function makeMenuPage() {
	const menuPage = document.createElement("div");
	menuPage.classList.add("menu-page");

	// Title
	const title = document.createElement("h1");
	title.textContent = "Menu";
	menuPage.appendChild(title);

	// Create the menu table
	const table = document.createElement("table");
	table.classList.add("menu-table");

	const tableHeader = `
        <thead>
            <tr>
                <th>Dish</th>
                <th>Description</th>
                <th>Price</th>
            </tr>
        </thead>
    `;

	table.innerHTML = tableHeader;

	const tableBody = document.createElement("tbody");

	const menuItems = [
		{
			name: "Kebab Skewers",
			description: "Delicious grilled kebabs with a blend of spices.",
			price: "₹1075",
		},
		{
			name: "Chess Burger",
			description: "A juicy burger with a side of chess pieces made of cheese.",
			price: "₹1099",
		},
		{
			name: "Pawn Poutine",
			description: "Crispy fries topped with cheese curds and gravy.",
			price: "₹899",
		},
		{
			name: "Rook Roll",
			description: "A savory roll filled with chess-themed fillings.",
			price: "₹999",
		},
		{
			name: "Knight's Nachos",
			description:
				"Nachos topped with melted cheese, jalapeños, and chess-shaped chips.",
			price: "₹799",
		},
	];

	menuItems.forEach((item) => {
		const tableRow = document.createElement("tr");

		const itemName = document.createElement("td");
		itemName.textContent = item.name;

		const itemDescription = document.createElement("td");
		itemDescription.textContent = item.description;

		const itemPrice = document.createElement("td");
		itemPrice.textContent = item.price;
		itemPrice.classList.add("price");

		tableRow.appendChild(itemName);
		tableRow.appendChild(itemDescription);
		tableRow.appendChild(itemPrice);

		tableBody.appendChild(tableRow);
	});

	table.appendChild(tableBody);
	menuPage.appendChild(table);

	return menuPage;
}
