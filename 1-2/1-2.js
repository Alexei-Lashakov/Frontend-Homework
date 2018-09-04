var anotherPage = document.getElementById('anotherPage');  //2.1
anotherPage.onclick = function() {
	document.location.href = "https://learn.javascript.ru/";
}

var changeStyle = document.getElementById('changeStyle');  //2.2
changeStyle.onclick = function() {
	if (document.body.style.backgroundColor == "") {
		document.body.style.backgroundColor = "#F3921F";
	} else {
		document.body.style.backgroundColor = "";
	}
}

var showFlexbox = document.getElementById('showFlexbox');  //2.3
showFlexbox.onclick = function() {
	document.body.innerHTML = "";
	var container = document.createElement("div"); 
	container.className = 'parentBox';
	var box = document.createElement("div"); 
	box.className = "childItem";
	box.innerHTML = "<h1>Hello World</h1>";
	box.innerHTML += "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>";
	var quantity = prompt('How many blocks do you want to get?');
	for (var i=0; i<quantity; i++){
			container.appendChild(box.cloneNode(true));
	}
document.body.appendChild(container);
}
