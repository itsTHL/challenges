console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

const newPostSection = document.createElement("section");
newPostSection.classList.add("post");
document.body.append(newPostSection);

const newPostContent = document.createElement("p");
newPostSection.append(newPostContent);
newPostContent.classList.add("post__content");
newPostContent.textContent = "new lorem ipsum dolor, sit amet consectur";

const newPostFooter = document.createElement("footer");
newPostFooter.classList.add("post__footer");
newPostSection.append(newPostFooter);

const newPostUsername = document.createElement("span");
newPostFooter.append(newPostUsername);
newPostUsername.classList.add("post__username");
newPostUsername.textContent = "@username";
