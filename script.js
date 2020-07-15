const bgClick = (event, selected) => {
  selected.style.backgroundColor = "blue";
};

const h1 = document.querySelector("header h1");

h1.addEventListener("click", (event) => {
  h1.style.backgroundColor = "lightblue";
});

h1.addEventListener("mouseleave", (event) => {
  h1.style.backgroundColor = "white";
});

const h2 = document.querySelector("h2");
h2.addEventListener("mouseover", function event(){
  h2.textContent = "Hello, Greetings"
});

const navLink1 = document.getElementById("a1");
const para1 = document.getElementById("p1")
navLink1.addEventListener("click", function event() {
  para1.setAttribute("style", "font-weight: bold; font-size: 20px");
});

// navLink1.addEventListener("click click", function event() {
//   para1.setAttribute("style", "font-weight: none; font-size: 12px");
// });

const navLink2 = document.getElementById("a2");
const para2 = document.getElementById("p2")
navLink2.addEventListener("click", function event() {
  para2.setAttribute("style", "font-weight: bold; font-size: 20px");
});

const navLink3 = document.getElementById("a3");
const para3 = document.getElementById("p3")
navLink3.addEventListener("click", function event() {
  para3.setAttribute("style", "font-weight: bold; font-size: 20px");
});