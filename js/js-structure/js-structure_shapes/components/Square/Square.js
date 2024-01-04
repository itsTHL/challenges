export default function square(getRandomColor) {
  const square = document.createElement("div");
  square.classList.add("square");
  square.addEventListener("click", () => {
    square.style.backgroundColor = getRandomColor();
  });
  return square;
}
