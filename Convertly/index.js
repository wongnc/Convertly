window.onload = init()

function init() {
	const data = getData();
	
	for(var i=0; i<data.length; i++){
		const flexGrid = document.querySelector('#flex-grid');

		//creating col Div and appending to flexGrid
		const colDiv = document.createElement("div");
		colDiv.setAttribute("class", "col");
		flexGrid.appendChild(colDiv);

		//creating child elements and appending to colDiv
		const img = document.createElement("img");
		img.src = data[i].profile;
		img.setAttribute("class", "img");
		colDiv.appendChild(img);

		const name = document.createElement("h3");
		name.textContent = data[i].firstName + " " + data[i].lastName;
		name.setAttribute("class", "info")
		name.setAttribute("id", "name")
		colDiv.appendChild(name);

		const job = document.createElement("p");
		job.textContent = data[i].job;
		job.setAttribute("class", "info")
		job.setAttribute("id", "job")
		colDiv.appendChild(job);

		const location = document.createElement("p");
		location.textContent = data[i].location;
		location.setAttribute("class", "info")
		location.setAttribute("id", "location")
		colDiv.appendChild(location);

		const bio = document.createElement("p");
		bio.textContent = ("Read " + data[i].firstName + "'s Bio");
		bio.setAttribute("class", "bio");
		bio.setAttribute("id", "bio")
		colDiv.appendChild(bio);
	}

};

function getData(message) {
	return [{
		firstName: "Jacob",
		lastName: "Hawkins",
		job: "Senior Editor",
		location:"New York Times",
		profile: "./imgs/jacob-hawkins.png"
	},
	{
		firstName: "Esther",
		lastName:"Black",
		job: "Editor in Chief",
		location:"Wall Street Journal",
		profile: "./imgs/esther-black.png"
	},
	{
		firstName: "Philip",
		lastName:"Miles",
		job: "Senior Writer",
		location:"Washington Post",
		profile: "./imgs/philip-miles.png"
	}
	]
}