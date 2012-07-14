Element.prototype.addClass = function(className){
	this.className += (" "+className);
}

Element.prototype.removeClass = function(className){
	var oldClass = this.className;
	this.className = oldClass.replace((" "+className), "");
}

Element.prototype.hasClass = function(className){
	if(this.className.indexOf(className) < 0){
		return false;
	}
	return true;
}

Element.prototype.toggleClass = function(className){
	if(this.hasClass(className)){
		this.removeClass(className);
	}
	else{
		this.addClass(className);
	}
}

window.onload = function() {
	var top_nav_items = document.getElementById('top_nav').getElementsByClassName('nav_item');
	console.log(top_nav_items);
	for(var i=0; i<top_nav_items.length; i++){
		top_nav_items[i].onclick = function(e){
			for(var j=0; j<top_nav_items.length; j++){
				if(top_nav_items[j].hasClass('active')){
					top_nav_items[j].removeClass('active');
				}
			}
			if(e.target.hasClass('nav_item')){
				e.target.addClass('active');
			}
			else{
				e.target.parentElement.addClass('active');
			}
		}
	}
};