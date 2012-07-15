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
	var active_nav_item = top_nav_items[0];
	console.log(top_nav_items);
	for(var i=0; i<top_nav_items.length; i++){
		top_nav_items[i].onclick = function(e){
			active_nav_item.removeClass('active');
			if(e.target.hasClass('nav_item')){
				e.target.addClass('active');
				active_nav_item = e.target;
			}
			else{
				e.target.parentElement.addClass('active');
				active_nav_item = e.target.parentElement;
			}
		}
	}
	
	var anchors = document.getElementsByClassName('a_target');
	console.log(anchors);
	
	window.onscroll = function(){
		for(var i = 0; i<anchors.length; i++){
			var position = anchors[i].getBoundingClientRect();
			if(position.top <= 90 && position.bottom > 0){
				active_nav_item.removeClass('active');
				top_nav_items[i].addClass('active');
				active_nav_item = top_nav_items[i];
			}
		}
	}
	
	
};