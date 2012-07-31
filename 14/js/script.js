var menu=function(){
	var t=15,z=50,s=6,a;
	function dd(n){this.n=n; this.h=[]; this.c=[]}
	dd.prototype.init=function(p,c){
		a=c; var w=document.getElementById(p), s=w.getElementsByTagName('ul'), l=s.length, i=0;
		for(i;i<l;i++){
			var h=s[i].parentNode; this.h[i]=h; this.c[i]=s[i];
			h.onmouseover=new Function(this.n+'.st('+i+',true)');
			h.onmouseout=new Function(this.n+'.st('+i+')');
		}
	}
	dd.prototype.st=function(x,f){
		var c=this.c[x], h=this.h[x], p=h.getElementsByTagName('a')[0];
		clearInterval(c.t); c.style.overflow='hidden';
		if(f){
			p.className+=' '+a;
			if(!c.mh){c.style.display='block'; c.style.height=''; c.mh=c.offsetHeight; c.style.height=0}
			if(c.mh==c.offsetHeight){c.style.overflow='visible'}
			else{c.style.zIndex=z; z++; c.t=setInterval(function(){sl(c,1)},t)}
		}else{p.className=p.className.replace(a,''); c.t=setInterval(function(){sl(c,-1)},t)}
	}
	function sl(c,f){
		var h=c.offsetHeight;
		if((h<=0&&f!=1)||(h>=c.mh&&f==1)){
			if(f==1){c.style.filter=''; c.style.opacity=1; c.style.overflow='visible'}
			clearInterval(c.t); return
		}
		var d=(f==1)?Math.ceil((c.mh-h)/s):Math.ceil(h/s), o=h/c.mh;
		c.style.opacity=o; c.style.filter='alpha(opacity='+(o*100)+')';
		c.style.height=h+(d*f)+'px'
	}
	return{dd:dd}
}();		
		
		$(document).ready(function(){
			
			//library tabs register
			$("#tabs nav ul li").each(function(){
				//register event for each tab
				var placeholder = $(this);
				var cat = placeholder.attr("data-category");
				
				//set it all hidden
				
				placeholder.bind("click",function(){
					
					$("#tabs nav ul li").removeClass("selected");
					$(this).addClass("selected");
					
					$("#elementContainer .draggable .resizeable").parent().hide();
				
					$("#elementContainer .draggable .resizeable").each(function(){
						var target = $(this);
						var target_cat = target.attr("data-category").split(' ');
						for(var j=0; j < target_cat.length; j++){
							if(cat == target_cat[j]){
								target.parent().show();
								break;
							}
						}
					});
				});
				
			});	
			
			//palette tabs register
			$("#palette fieldset").hide();
			$("#palette fieldset[data-category=coord]").show();
			$("#palette footer ul li").each(function(){
				//register event for each tab
				var placeholder = $(this);
				var cat = placeholder.attr("data-category");
				
				//set it all hidden
				
				placeholder.bind("click",function(){
					
					$("#palette footer ul li").removeClass("selected");
					$(this).addClass("selected");
					
					$("fieldset").hide();
				
					$("#palette fieldset").each(function(){
						var target = $(this);
						var target_cat = target.attr("data-category");
							if(cat == target_cat){
								target.show();
							}
					});
				});
				
			});					
			
			//tool tips!
			$("label#width").qtip({
				content: 'Width of the element', 
				position: {
					my: 'bottom left',
					at: 'top right'
				},
				show: 'mouseover', 
				hide: 'mouseout'
			});
			$("label#height").qtip({
				content: 'Height of the element', 
				position: {
					my: 'bottom left',
					at: 'top right'
				},
				show: 'mouseover', 
				hide: 'mouseout'
			});
			$("label#x").qtip({
				content: 'X coordinate of the element', 
				position: {
					my: 'bottom left',
					at: 'top right'
				},
				show: 'mouseover', 
				hide: 'mouseout'
			});
			$("label#y").qtip({
				content: 'Y coordinate of the element', 
				position: {
					my: 'bottom left',
					at: 'top right'
				},
				show: 'mouseover', 
				hide: 'mouseout'
			});
			
			//Tooltips for quickadd
			$("i.icon-plus-sign").qtip({
				content: 'Quickly add any element to your website just by typing the name', 
				position: {
					my: 'bottom left',
					at: 'top right'
				},
				show: 'mouseover', 
				hide: 'mouseout'
			});
			
			//Tooltips for search
			$("div#searchBox").qtip({
				content: 'Search for any element', 
				position: {
					my: 'bottom left',
					at: 'top left'
				},
				show: 'mouseover', 
				hide: 'mouseout'
			});
			
			//Tooltips for library elements
			$("span.sbtntext").qtip({
				content: 'Button - try dragging to the canvas!', //button text
				position: {
					my: 'bottom left',
					at: 'top left'
				},
				show: 'mouseover', 
				hide: 'mouseout'
			});
			
			$("div#libBrowserOuterFrame").qtip({ //mock browser
				content: 'Web browser - try dragging to the canvas!', 
				position: {
					my: 'bottom left',
					at: 'top left'
				},
				show: 'mouseover', 
				hide: 'mouseout'
			});
			
			$("div#libImage").qtip({
				content: 'Image - try drgging to the canvas!', //image
				position: {
					my: 'bottom left',
					at: 'top left'
				},
				show: 'mouseover', 
				hide: 'mouseout'
			});
			
			$("div#libDummyContainer").qtip({
				content: 'Text box - try dragging to the canvas!', //text box
				position: {
					my: 'bottom left',
					at: 'top left'
				},
				show: 'mouseover', 
				hide: 'mouseout'
			});
			
			$("div#libButtonBarBox").qtip({
				content: 'Button bar box - try dragging to the canvas!', //button bar
				position: {
					my: 'bottom left',
					at: 'top left'
				},
				show: 'mouseover', 
				hide: 'mouseout'
			});
			
			$("div#libSearchBox").qtip({
				content: 'Search box - try dragging to the canvas!', //search box
				position: {
					my: 'bottom left',
					at: 'top left' 
				},
				show: 'mouseover', 
				hide: 'mouseout'
			});
			
			$("h1.libHeader").qtip({
				content: 'Header - try dragging to the canvas!', //header box
				position: {
					my: 'bottom left',
					at: 'top left' 
				},
				show: 'mouseover', 
				hide: 'mouseout'
			});
		});