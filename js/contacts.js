var content = document.querySelector(".content");
var nav_icon = document.querySelector(".nav-icon");
var nav_bar = document.querySelector(".nav-bar");
var span = document.querySelector("span");

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

span.onclick = function() {
	var link = document.createElement('a');
	link.setAttribute("target", "_blank");
    link.href = "https://mail.google.com/mail/?view=cm&fs=1&to=betajsion@gmail.com&su=Example Subject&body=Example Content";
    document.body.append(link);
	link.click();
	link.remove();
}