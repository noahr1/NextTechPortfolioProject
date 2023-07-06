var content = document.querySelector(".content");
var nav_icon = document.querySelector(".nav-icon");
var nav_bar = document.querySelector(".nav-bar");

var projects = [
	{
		name: "Test Project 1",
		timeCreated: { date: "6/26/2023", time: "3:40pm" },
		projectLink: "./projects/test_project_1/test_project_1.html",
		lastEdited: { date: "6/26/2023", time: "3:45pm" },
		imgSrc: "./projects/test_project_1/image.png"
	},
	{
		name: "Test Project 2",
		timeCreated: { date: "6/26/2023", time: "3:50pm" },
		projectLink: "./projects/test_project_1/test_project_2.html",
		lastEdited: { date: "6/26/2023", time: "3:51pm" },
		imgSrc: "./projects/test_project_2/image.png"
	},
	{
		name: "Test Project 3",
		timeCreated: { date: "6/26/2023", time: "3:54pm" },
		projectLink: "./projects/test_project_3/test_project_3.html",
		lastEdited: { date: "6/26/2023", time: "3:57pm" },
		imgSrc: "./projects/test_project_3/image.png"
	},
];

function createTag(tag, value) {
	var tempTag = document.createElement(tag);
	if(value) {
		tempTag.innerHTML = value;
	}
	return tempTag;
}

function createImage(path) {
	var tempImage = document.createElement("image");
	if(path) {
		tempImage.src = path;
	}
	return tempImage;
}

function generateProjects() {
	
	for(var i = 0; i < projects.length; i++) {
		var project = projects[i];
		
		var tempDiv = createTag("div", null);
		var title = createTag("h1", project.name);
		var dateCreated = createTag("h2", "Date Created: " + project.timeCreated.date);
		var timeCreated = createTag("h2", "Time Created: " + project.timeCreated.time);
		var datelastEdited = createTag("h2", "Date Last Edited: " + project.lastEdited.date);
		var timelastEdited = createTag("h2", "Time Last Edited: " + project.lastEdited.time);
		var pic = createImage(project.imgSrc);

		tempDiv.append(title, dateCreated, timeCreated, datelastEdited, timelastEdited, pic);
		tempDiv.classList.add("project-container");
		content.append(tempDiv);
	}
}

generateProjects();


nav_icon.addEventListener("click", (e) => {
	for(var i = 0; i < nav_bar.children.length; i++) {
		if(nav_bar.children[i].style.display === "none") {
			nav_bar.children[i].style.display = "block";
			nav_bar.style.width = "10%";
		}else {
			nav_bar.children[i].style.display = "none";
			nav_bar.style.width = 0;
			content.style.width = "100%";
		}
	}
});