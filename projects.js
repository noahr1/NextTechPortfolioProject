var nav_icon = document.querySelector(".nav-icon");
var menu_items = document.getElementsByClassName("menu");


var active = true;
nav_icon.onclick = function() {
	if(active) {
		active = !active;
		for(var i = 0; i < menu_items.length; i++) {
			menu_items[i].style.display = "none";
		}
	}else {
		active = !active;
		for(var i = 0; i < menu_items.length; i++) {
			menu_items[i].style.display = "block";
		}
	}

}