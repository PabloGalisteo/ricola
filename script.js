const climberBtn = document.querySelector(".climber-btn")
const popUpBg = document.querySelector(".popup-bg")
const closePopUp = document.querySelector(".fa-times")
const smallHeader = document.querySelector(".header-container")


climberBtn.addEventListener("click", () => {
    popUpBg.classList.add("bg-active");
    smallHeader.style.padding.add = "1em 3em;";
});

closePopUp.addEventListener("click", () => {
    popUpBg.classList.remove("bg-active");
});