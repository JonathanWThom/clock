function changeClass() {
  var colors = ["red", "green", "blue", "purple", "white", "black", "pink", "yellow"];
  var color = colors[Math.floor(Math.random()*colors.length)];
  document.getElementById("body").className = color;
};
