//get jQuery AJAX function
$.get('https://www.reddit.com/search.json',{
  q: 'kittens'
}).done(function(data){
  console.log(data);
});
//AJAX function. More customizable
$.ajax({
  url: 'https://www.reddit.com/search.json',
  method: "GET",
  data: {
    q: 'kittens'
  }
}).done(function(data){
  console.log('data');
});


/////Demonstration of asychronous nature of AJAX
console.log('Document is ready');

$.get('https://www.reddit.com/search.json',{
  q: 'kittens'
}).done(function(data){
  console.log('AJAX is ready');
});

console.log("Just fired AJAX request");

///////Demonstrating how to use AJAX data//////////////////////
$.get('https://www.reddit.com/search.json',{
  q: 'kittens'
}).done(function(data){
  var posts = data;
});
console.log(posts);////posts is undefined in this scope. This will result in an error

$.get('https://www.reddit.com/search.json',{
  q: 'kittens'
}).done(function(data){
  var posts = data;
  console.log(posts); //posts is defined in this scope. This will console log properly
});

//////The FAIL promise
$.get('https://www.redit.com/sear.son',{
  q: 'kittens'
}).done(function(data){
  console.log('this wont run because I misspelled the URL');
}).fail(function(error){
  console.log('there was a 404 error');
});

///The THEN promise
var ajaxReq = $.get("https://www.thiswebsitedoesntexist.com");
ajaxReq.then(function(value) {
  console.log(value); // Success!
}, function(reason) {
  console.log(reason); // Error!
});


////Getting your results on the page
///reference index.html for the relevant html

$.get('https://www.reddit.com/search.json', {
  q: 'pics'
}).done(function(data) {
  console.log(data, "THIS IS THE DATA OBJECT!!!");
  var redditArr = data.data.children;
  for(var i = 0; i < redditArr.length; i++){
    postToPage(redditArr[i].data);
  }
});
console.log("WHEN AM I GONNA PRINT!?!?!?!?!")

function postToPage(data){
  console.log(data);
  var containerDiv = document.getElementById("links");
  var newLink = document.createElement("a");
  newLink.setAttribute("href", data.url);
  newLink.textContent = data.title;
  containerDiv.appendChild(newLink);
}







