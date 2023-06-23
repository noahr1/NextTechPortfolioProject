var menu_icon = document.querySelector(".menu-icon");
var menu_items = document.getElementsByClassName("menu");
var nav_bar = document.querySelector(".nav-bar");

var active = true;
menu_icon.onclick = function() {
	if(active) {
		active = !active;
		for(var i = 0; i < menu_items.length; i++) {
			menu_items[i].style.display = "none";
			nav_bar.style.width = "5%";
		}
	}else {
		active = !active;
		for(var i = 0; i < menu_items.length; i++) {
			menu_items[i].style.display = "block";
			nav_bar.style.width = "10%";
		}
	}

}