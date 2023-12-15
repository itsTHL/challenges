console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');

const newToastMessage = document.createElement("toast-container");

addButton.addEventListener("click", () => {
  // Exercise: Append a new entry to the toast messages container
  toastContainer.append(newToastMessage);
  newToastMessage.classList.add("toast-container__message");
  newToastMessage.textContent = "I'm a new toast message";
});

clearButton.addEventListener("click", () => {
  // Exercise: Clear the stack of toast messages
});
