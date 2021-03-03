const climberBtn = document.querySelector(".climber-btn")
const popUp = document.querySelector(".popup")


climberBtn.addEventListener("click", () => {
    hiddenPopup();
});

function hiddenPopup() {
    popUp.classList.remove("hidden");
}



