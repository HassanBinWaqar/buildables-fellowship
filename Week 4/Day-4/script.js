// Regular function to generate a random hex color
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Arrow function to update the background and color text
const changeBackgroundColor = () => {
  const newColor = getRandomColor();
  document.body.style.backgroundColor = newColor;
  document.getElementById("colorValue").textContent = newColor;
};

// Event listener to handle button click
document.getElementById("changeColorBtn")
  .addEventListener("click", changeBackgroundColor);