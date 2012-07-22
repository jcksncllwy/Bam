window.onload = function(){

var puff = Puffin.create();
puff.move(100,100);
puff.resize(200,300);
puff.setContent(document.getElementById('puffin_window'));
puff.show();
console.log(puff);

}