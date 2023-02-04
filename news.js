const body = document.querySelector("body");
const burger = document.querySelector(".burger");
const nav = document.querySelector(".navbar ul");
const cancelBtn = document.querySelector(".cancel-btn");

const navSlide = () => {
  // add Nav

  burger.addEventListener("click", () => {
    body.classList.add("black-after");
    cancelBtn.style.display = "block";
    nav.classList.add("nav-active");
  });
  cancelBtn.addEventListener("click", () => {
    nav.classList.remove("nav-active");
    cancelBtn.style.display = "none";
    body.classList.remove("black-after");
  });
};

navSlide();
