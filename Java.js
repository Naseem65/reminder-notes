var enterButton = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");

function inputLength(){
	return input.value.length;
} 

function listLength(){
	return item.length;
}

function createListElement() {
	var li = document.createElement("li"); // creates an element "li"
	li.appendChild(document.createTextNode(input.value)); //makes text from input field the li text
	ul.appendChild(li); //adds li to ul
	input.value = ""; //Reset text input field


	//START STRIKETHROUGH
	// because it's in the function, it only adds it for new items
	function crossOut() {
		li.classList.toggle("done");
	}

	li.addEventListener("click",crossOut);
	//END STRIKETHROUGH


	// START ADD DELETE BUTTON
	var dBtn = document.createElement("button");
	dBtn.appendChild(document.createTextNode("X"));
	li.appendChild(dBtn);
	dBtn.addEventListener("click", deleteListItem);
	// END ADD DELETE BUTTON


	//ADD CLASS DELETE (DISPLAY: NONE)
	function deleteListItem(){
		li.classList.add("delete")
	}
	//END ADD CLASS DELETE
}


function addListAfterClick() {
	if (inputLength() > 0) { //makes sure that an empty input field doesn't create a li
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.which ===13) { //this now looks to see if you hit "enter"/"return"
		//the 13 is the enter key's keycode, this could also be display by event.keyCode === 13
		createListElement();
	} 
}

function getFetch(weather) {
var url = 'http://api.openweathermap.org/data/2.5/weather?q=Louisville,ky' + weather + '&apiKey=9ae4847cd12977edde56bfff008448cc';
var req = new Request(url);
return fetch(req)
 .then(function (response) {
	return response.json();
 })
 .then(function (json) {
	 var cities = json.weather;
	 console.log(weather);
	 window.open(weather[0].url)
 })
}

function makeFetch(network) {
	var url = 'http://newsapi.org/v2/top-headlines?country=us=' + network + '&apiKey=926ea2a6d4474d838091fd2e96217ef0';
	var req = new Request(url);
	return fetch(req)
	  .then(function (response) {
		return response.json();
	  })
	  .then(function (json) {
		var articles = json.articles;
		console.log(articles);
		window.open(articles[0].url)
	  })
  }
enterButton.addEventListener("click",addListAfterClick);

input.addEventListener("keypress",addListAfterKeypress);