var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelectorAll("li");
var counter = 1;

function incrementCounter(){
	return counter++;
}



function inputLength(){
	return input.value.length;
}

function createListElement(){
		var li = document.createElement("li");
		li.appendChild(document.createTextNode(input.value));
		var button1 = document.createElement("button");
		button1.innerHTML ="x";
		button1.setAttribute("id","deleteButton");
		button1.setAttribute("class", "btn btn-danger delButton");
		li.appendChild(button1);
		li.setAttribute("id", incrementCounter());
		li.setAttribute("class", "shopList");
		ul.appendChild(li);
		input.value="";
}

function addListAfterClick(){
	if(inputLength() > 0){
		createListElement();
	}
}

function addListAfterKeypress(event){
	if(inputLength() > 0 && event.keyCode === 13){
		createListElement();
	}
}


function toggleDone(event){
	if(event.target.id === "deleteButton"){
		var element = document.getElementById(event.target.parentElement.getAttribute("id"));
		event.target.parentElement.parentElement.removeChild(element);
	}else{
		document.getElementById(event.target.id).classList.toggle("done");
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", toggleDone);



