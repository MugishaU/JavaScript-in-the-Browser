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
