// your JavaScript file
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);


//Add additional elements to render
const redParagraph = document.createElement("p");
redParagraph.textContent = "Hey I'm red!"
redParagraph.style.color = "red";

container.appendChild(redParagraph);

const blueHeading = document.createElement("h3");
blueHeading.textContent = "I'm a blue h3!";
blueHeading.style.color = "blue";

container.appendChild(blueHeading);

const container2 = document.createElement("div");
container2.setAttribute("style", "background-color: pink; border: 2px solid black;");

const divHeading = document.createElement("h1")
divHeading.textContent = "I'm in a div";

const meTooParagraph = document.createElement("p");
meTooParagraph.textContent = "ME TOO!";

container2.append(divHeading, meTooParagraph)
container.appendChild(container2)




// Event Listener Practice

// the JavaScript file
// METHODS 2 & 3
function alertFunction() {
  alert("YAY! YOU DID IT!");
}
// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll("button");

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {
    alert(button.id);
  });
});
