// Simple function
function greet(name) {
  return "Hello, " + name;
}
console.log(greet("Elizabeth"));

// Trigger animation with JS
const btn = document.getElementById("moveBtn");
const box = document.getElementById("jsBox");

btn.addEventListener("click", function() {
  box.classList.add("move");

  // Reset after 2s so it can be clicked again
  setTimeout(() => box.classList.remove("move"), 2000);
});
