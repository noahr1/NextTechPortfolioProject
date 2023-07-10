var content = document.querySelector(".content");
var nav_icon = document.querySelector(".nav-icon");
var nav_bar = document.querySelector(".nav-bar");

var projects = [
	{
		name: "Adventure Game",
		timeCreated: { date: "6/26/2023", time: "3:40pm" },
		projectLink: "https://replit.com/@NoahReynolds9/Make-your-own-Adventure-Noah",
		lastEdited: { date: "6/26/2023", time: "3:45pm" },
		imgSrc: "../projects/Adventure_Game/adventure_game_thumbnail.png"
	},
	{
		name: "Machine Chart",
		timeCreated: { date: "6/26/2023", time: "3:50pm" },
		projectLink: "../projects/Machine_Chart/machine_chart.html",
		lastEdited: { date: "6/26/2023", time: "3:51pm" },
		imgSrc: "../projects/Machine_Chart/machine_chart_thumbnail.png"
	},
	{
		name: "Pixel Texture Maker",
		timeCreated: { date: "6/26/2023", time: "3:54pm" },
		projectLink: "https://noahr1.github.io/Pixel_Texture_Maker/",
		lastEdited: { date: "6/26/2023", time: "3:57pm" },
		imgSrc: "../projects/Pixel_Texture_Maker/pixel_texture_maker_thumbnail.png"
	},
	{
		name: "Quiz Project",
		timeCreated: { date: "6/26/2023", time: "3:54pm" },
		projectLink: "https://replit.com/@NoahReynolds9/Quiz-Project",
		lastEdited: { date: "6/26/2023", time: "3:57pm" },
		imgSrc: "../projects/Quiz_Project/quiz_thumbnail.png"
	},
];

function createTag(tag, value) {
	var tempTag = document.createElement(tag);
	if(value) {
		tempTag.innerHTML = value;
	}
	return tempTag;
}

function createLink(path) {
	var tempLink = document.createElement("a");
	if(path) {
		tempLink.href = path;
		tempLink.setAttribute("target", "_blank");
	}
	return tempLink;
}

function createImage(path) {
	var tempImage = document.createElement("img");
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
		var link = createLink(project.projectLink);
		var dateCreated = createTag("p", "Date Created: " + project.timeCreated.date);
		var timeCreated = createTag("p", "Time Created: " + project.timeCreated.time);
		var datelastEdited = createTag("p", "Date Last Edited: " + project.lastEdited.date);
		var timelastEdited = createTag("p", "Time Last Edited: " + project.lastEdited.time);
		var pic = createImage(project.imgSrc);
		tempDiv.append(title, dateCreated, timeCreated, datelastEdited, timelastEdited, pic, link);
		tempDiv.classList.add("project-container");
		content.append(tempDiv);
		tempDiv.onclick = function(e) {
			var elm = e.target.parentElement;
			if(elm.classList.value === "project-container") {
				elm.children[6].click();
			}
		}
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