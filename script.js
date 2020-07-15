const h1 = document.querySelector("header h1");
h1.addEventListener("click", (event) => {
  console.log("clicked");
});

const h2 = document.querySelector("header h2");
h2.addEventListener("mouseover", function event(){
  h2.textContent = "Hello, Greetings"
});