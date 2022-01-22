
// to create new element, delcare it, edit the contents, and append to body
const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript!";
document.body.appendChild(newParagraph);

// you can add images by changing src and alt
const newImage = document.createElement("img");
newImage.setAttribute("src", "https://placeimg.com/200/200/animals");
newImage.alt = "random animal image"
document.body.appendChild(newImage)

// if the element being added is complex or long, you can have lots of html in a string
// and simply put it in there with .innerHTML
const newDiv = document.createElement("div");
newDiv.innerHTML = "<ul><li>One</li><li>Two</li><li>Three</li></ul>";
document.body.appendChild(newDiv);

// all document.body.appendChild() will append to the bottom
const newSection = document.createElement("section");
newSection.setAttribute("id", "javascript");
document.body.appendChild(newSection);

// to put it into a specific place, instead of using document.body.appendChild() use 
// document.queryselector("#id of div or section").appendChild()
const newh2 = document.createElement("h2");
newh2.innerText = "CSE 121B, welcome to javascript language";
document.querySelector('#javascript').appendChild(newh2);
