const form = document.getElementById("myForm");
form.addEventListener("submit", function(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const fruit = document.getElementById("fruit").value;
  alert("Name: " + name + "\nFavorite Fruit: " + fruit);
});
