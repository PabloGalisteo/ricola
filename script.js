const climberBtn = document.querySelector(".climber-btn")
const popUpBg = document.querySelector(".popup-bg")
const closePopUp = document.querySelector(".fa-times")
const smallHeader = document.querySelector(".header-container")

const intro = document.querySelector(".link-intro")
const nature = document.querySelector(".link-nature")
const people = document.querySelector(".link-people")
const business = document.querySelector(".link-business")
const transparency = document.querySelector(".link-transparency")

const popupText = document.querySelector(".popup-text")
const changeImg = document.querySelector(".popup-img")


climberBtn.addEventListener("click", () => {
    popUpBg.classList.add("bg-active");
    smallHeader.style.padding = "0.5em 3em";
});

closePopUp.addEventListener("click", () => {
    popUpBg.classList.remove("bg-active");
    smallHeader.style.padding = "1.2em 3em";
});

// Nature slide 

intro.addEventListener("click", () => {
    popUpBg.classList.remove("bg-active");
})

nature.addEventListener("click", () => {
    changeImg.src = "/images/footsteps_nature_croped.jpg";
    popupText.innerHTML = "<h1 class='popup-h1'>"+'Beyond Zero Twards Positive Enviromental impact'+"</h1>"+
                            "<h2 class='popup-h2'>"+'INTENTION'+"</h2>"+
                                "<p class='popup-paragraph'>"+'Understand how we can apply our sourcing standards from Switzerland in our global supply chain. We have high standards in our herb farming sourcing.<br> This footstep aims to explore how we can leverage and transfer our best practices (a combination of Swiss standards and Thomas Aeschlimann’s good work) to our global supply chain, in order to promote biodiversity and sustainable farming practices, while reducing potential reputational risks.'+"</p>"+
                                "<h2 class='popup-h2'>"+'CURRENT STATE'+"</h2>"+
                                "<p class='popup-paragraph'>"+'We work close with farmers in Switzerland to ensure high biodiversity standards. A majority of supplier is certified according to “BioSuisse“ standards and farmers in Switzerland that produce for us are adhering to high sustainable farming standards. This is not necessarily the case in our global supply chain. Through Close the Gap we have identified areas that need improvement and we wish to conduct this improvement based on a set of Ricola Principles.'+"</p>";
})

