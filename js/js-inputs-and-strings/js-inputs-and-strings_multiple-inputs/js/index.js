/*

Important: Create a fork for each sub challenge!
Implement the following functionality:

1. On button click: The value of the first input field is copied into the second input field

2. On button click: The value of the first input field is copied in uppercase into the second input field

3. On button click: The values of the two input fields switch.

*/

const firstInput = document.querySelector("[data-js=first-input]");
const secondInput = document.querySelector("[data-js=second-input]");
const button = document.querySelector("[data-js=button]");

/*

// solution to first task

button.addEventListener("click", () => {
  secondInput.value = firstInput.value
})


// solution to second task

button.addEventListener("click", () => {
  secondInput.value = firstInput.value.toUpperCase();
});
*/

// solution to third task

button.addEventListener("click", () => {
  const initialFirstValue = firstInput.value;
  firstInput.value = secondInput.value;
  secondInput.value = initialFirstValue;
});
