var content = document.querySelector(".content");
var nav_icon = document.querySelector(".nav-icon");
var nav_bar = document.querySelector(".nav-bar");

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