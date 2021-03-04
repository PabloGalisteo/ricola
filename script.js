const climberBtn = document.querySelector(".climber-btn")
const popUpBg = document.querySelector(".popup-bg")
const closePopUp = document.querySelector(".fa-times")
const smallHeader = document.querySelector(".header-container")

const intro = document.querySelector(".link-intro")
const morad = document.querySelector(".link-morad")
const schutz = document.querySelector(".link-schutz")
const popupH1 = document.querySelector(".popup-h1")



climberBtn.addEventListener("click", () => {
    popUpBg.classList.add("bg-active");
    smallHeader.style.padding = "0.5em 3em";
});

closePopUp.addEventListener("click", () => {
    popUpBg.classList.remove("bg-active");
    smallHeader.style.padding = "1.2em 3em";
});

intro.addEventListener("click", () => {
    popupH1.innerHTML='Hello Malin'

})