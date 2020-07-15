const h1 = document.querySelector("header h1");

h1.addEventListener("click", (event) => {
  h1.style.backgroundColor = "lightblue";
});

h1.addEventListener("mouseleave", (event) => {
  h1.style.backgroundColor = "white";
});

const h2 = document.querySelector("header h2");
h2.addEventListener("mouseover", function event() {
  h2.textContent = "Hello, Greetings";
});

h2.addEventListener("mouseout", function event() {
  h2.textContent = "Eshan & Mugisha";
});

const page = document.querySelector("body");
const newP = document.getElementById("p4");
page.addEventListener("keydown", (event) => {
  newP.append(String.fromCharCode(event.keyCode));
});
