console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

function renderStars(filledStars) {
  // reset the star container before rerendering stars
  starContainer.innerHTML = "";

  //--v-- your code here --v--

  for (let count = 1; count <= 5; count++) {
    const star = document.createElement("img");
    starContainer.append(star);

    if (filledStars >= count) {
      star.src = "assets/star-filled.svg";
    } else {
      star.src = "assets/star-empty.svg";
    }
  }

  //--^-- your code here --^--
}

renderStars(2);
