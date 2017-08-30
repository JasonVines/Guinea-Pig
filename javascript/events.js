"use strict";
console.log("GUINEA PIG");


// 1. When any section is clicked the output target text should be "You clicked on the {text of the section} section"
// retrieves the output area in the HTML document
let outputHTML = document.getElementById("output-target");


// retrieves the 'article-section' class area in the HTML document
let articleSec = document.getElementsByClassName("article-section");


// retrieves the HTML text within the 'article-section'
function sectionClick(click) {
	let sectionText = click.target.innerHTML;
	outputHTML.innerHTML = "You clicked on the " + sectionText + " section.";
}


// adds event listener for the 'click' on the HTML document when the cursor is in the 'article-section'
for (let i = 0; i <articleSec.length; i++) {
	articleSec.item(i).addEventListener("click", sectionClick);
}


// 2. When the mouse is over the h1 tag, the output element should contain the text "You moved your mouse over the header".
document.getElementById("page-title").onmouseover = function() {
	outputHTML.innerHTML = "You moved your mouse over the header.";
}


// 3. When the mouse leaves the h1 tag, the output element should contain the text "You left me!!".
document.getElementById("page-title").onmouseout = function() {
	outputHTML.innerHTML = "You left me!!";
}


// 4. When you type characters into the input field, the output element should mirror the text in the input field.
document.getElementById("keypress-input").addEventListener("keyup", function(event) {
	outputHTML.innerHTML = event.target.value;
});


// 5. When you click the "Add color" button, the guinea-pig element's text color should change to blue.
document.getElementById("add-color").addEventListener('click', function() {
	document.body.style.color = "blue";
})


// 6. When you click the "Hulkify" button, the guinea-pig element's font size should become much larger.
document.getElementById("make-large").addEventListener('click', function() {
	document.body.style.fontSize = "3em";
})


// 7. When you click the "Capture it" button, the guinea-pig element should have a border added to it.
document.getElementById("add-border").addEventListener('click', function() {
	document.body.style.border = "solid black 3px";
})


// 8. When you click the "Rounded" button, the guinea-pig element's border should become rounded.
document.getElementById("add-rounding").addEventListener('click', function() {
	document.body.style.borderRadius = "10px";
})


// 9. The first section's text should be bold.
document.getElementsByClassName("article-section")[2].style.fontWeight = "bold";


// 10. The last section's text should be bold and italicized.
document.getElementsByClassName("article-section")[4].style.fontStyle = "italic";


// 11. Make the buttons stop appearing next to each other as inline elements. Change them into block elements.
let buttons = document.querySelectorAll("button");
console.log(buttons.length);

for (let i = 0; i < buttons.length; i++) {
	console.log(buttons.item(i));
	buttons.item(i).classList.add("blockStyle");
}