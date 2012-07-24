function workspace_height() {
	var menu = document.querySelector('#menu_wrap');
    var height = window.innerHeight-menu.offsetHeight;
    var workspace = document.querySelector('#workspace');
    workspace.style.height=height+"px";
}

window.onload = function(){
	workspace_height();
	window.onresize = workspace_height;
}