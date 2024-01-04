import { getRandomColor } from "./utils/randomColor.js";
import Circle from "./components/Circle/Circle.js";
import Square from "./components/Square/Square.js";

console.clear();

const root = document.getElementById("root");

const circleElement = Circle(getRandomColor);

const squareElement = Square(getRandomColor);

const pentagon = document.createElement("div");
pentagon.classList.add("pentagon");
pentagon.addEventListener("click", () => {
  pentagon.style.backgroundColor = getRandomColor();
});

root.append(circleElement, squareElement, pentagon);
