const cross = document.querySelector("span");
const button = document.querySelector("button");
const modal = document.querySelector(".modal");
const body = document.querySelector("body");
const containerModal = modal.parentElement;

button.addEventListener("click", () => {
  newDiv = document.createElement("div");
  newDiv.classList.add("newDiv");
  body.append(newDiv);
  containerModal.classList.toggle("hidden");
  button.classList.toggle("hidden");
});

document.addEventListener("click", (e) => {
  switch (e.target) {
    case cross:
      containerModal.classList.toggle("hidden");
      button.classList.toggle("hidden");
      newDiv.classList.toggle("hidden");
      break;
    case newDiv:
      containerModal.classList.toggle("hidden");
      button.classList.toggle("hidden");
      newDiv.classList.toggle("hidden");
      break;
  }
});
