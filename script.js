
const caramelBtn = document.querySelector(".caramel-btn")

const climberBtn = document.querySelector(".climber-btn")
const popUpBg = document.querySelector(".popup-climber")
const closePopUp = document.getElementById("exit-climber")
const smallHeader = document.querySelector(".header-container")
const logoTransform = document.querySelector(".logo")
const changeColor = document.querySelector(".change-color")

const intro = document.querySelector(".link-intro")
const nature = document.querySelector(".link-nature")
const people = document.querySelector(".link-people")
const business = document.querySelector(".link-business")
const transparency = document.querySelector(".link-transparency")

const popupText = document.querySelector(".popup-text-climber")
const changeImg = document.querySelector(".popup-img-climber")

const airplaneBtn = document.querySelector(".airplane-btn")
const popupAirplane = document.querySelector(".popup-airplane")
const closePopupAirplane = document.getElementById("exit-airplane")
const importMenu = document.querySelector(".link-import")
const popupImgAirplane = document.querySelector(".popup-img-airplane")
const popupInfoAirplane = document.querySelector(".popup-text-airplane")
const exportMenu = document.querySelector(".link-export")

// section 2
const farmBtn = document.querySelector(".farm-btn")
const popUpFarm = document.querySelector(".popup-farm")
const closePopUpFarm = document.getElementById("exit-farm")

const schutz = document.querySelector(".link-schutz")
const morard = document.querySelector(".link-morard")
const linkIntroFarm = document.querySelector(".link-intro-farm")
const popupInfoFarm = document.querySelector(".popup-text-farm")
const popupImgFarm = document.querySelector(".popup-img-farm")

const herbsBtn = document.querySelector(".herbs-btn")
const popupHerbs = document.querySelector(".popup-herbs")
const closePopupHerbs = document.getElementById("exit-herbs")
const introHerbs = document.querySelector(".link-intro-herbs")
const horehound = document.querySelector(".link-horehound")
const burnet = document.querySelector(".link-Burnet")
const popupImgHerbs = document.querySelector(".popup-img-herbs")
const popupInfoHerbs = document.querySelector(".popup-text-herbs")

//section 4 People
const peopleBtn = document.querySelector(".people-btn")
const popUpPeople = document.querySelector(".popup-people")
const exitPeople = document.getElementById("exit-people")
const linkPeople = document.querySelector(".link-intro-people")


// section 4 Factory

const factory = document.querySelector(".factory-btn")
const popUpFactory = document.querySelector(".popup-factory")
const popUpTextFactory = document.querySelector(".popup-text-factory")
const factoryImages = document.querySelector(".popup-img-factory")
const exitFactory = document.getElementById("exit-factory")
const linkIntroFactory = document.querySelector(".link-intro-factory")
const linkProcessing = document.querySelector(".link-processing")
const linkProduction = document.querySelector(".link-production")

const truckBtn = document.querySelector(".truck-btn")
const ricolaSound = new Audio("./images/ricola_short.mp3");

// ------------------------------------SECTION 1------------------------------------

//Caramel button

ricolaSound.addEventListener("ended", function(){
    location.href = "./https://www.ricola.com/en-gb/products/all-products";
});

caramelBtn.addEventListener("click", function() {
    ricolaSound.play();
});

// Airplane slides

airplaneBtn.addEventListener("click", () => {
    popupAirplane.classList.add("bg-active");
    smallHeader.style.padding = "0.5em 3em";
    logoTransform.style.width = "4.5em";
    importMenu.classList.add("popup-menu-underline");
});

closePopupAirplane.addEventListener("click", () => {
    popupAirplane.classList.remove("bg-active");
    smallHeader.style.padding = "1.2em 3em";
    logoTransform.style.width = "6em";
});

exportMenu.addEventListener("click", () => {
    popupImgAirplane.src = "./images/export.png";
    exportMenu.classList.add("popup-menu-underline");
    importMenu.classList.remove("popup-menu-underline");
    popupInfoAirplane.innerHTML = "<h1 class='popup-h1'>"+'Export'+"</h1>"+
                            "<h2 class='popup-h2'>"+'Providing Fresh Alpine Herbs'+"</h2>"+
                                "<p class='popup-paragraph'>"+'Ricola is a global family company. We provide fresh alpine herbs in the form of cough drops on a worldwide scale. Our mission is to bring freshness and health of the swiss alps to anyone, anywhere.'+"</p>"+
                                "<h2 class='popup-h2'>"+'Sustainable Supply Chain'+"</h2>"+
                                "<p class='popup-paragraph'>"+'Since all of Ricola’s production takes place in Switzerland we export all of our product from there. We ship out around X tons of product every year to Y countries. To do this in the most sustainable way we follow our sustainable supply chain footsteps to carry out this operation.'+"</p>";
});

importMenu.addEventListener("click", () => {
    popupImgAirplane.src = "./images/Import.png";
    importMenu.classList.add("popup-menu-underline");
    exportMenu.classList.remove("popup-menu-underline");
    popupInfoAirplane.innerHTML = "<h1 class='popup-h1'>"+'Imported herbs'+"</h1>"+
                            "<h2 class='popup-h2'>"+'Established Ecosystem'+"</h2>"+
                                "<p class='popup-paragraph'>"+'Here at Ricola we pride ourselves on growing 97% of all our herbs right here in the swiss alps. With the help of over 100 amazing farmers we have established an ecosystem of fresh near produced raw materials.'+"</p>"+
                                "<h2 class='popup-h2'>"+'We are not yet perfect'+"</h2>"+
                                "<p class='popup-paragraph'>"+'Although we are not perfect it would be impossible to find all the herbs we require for our healthy fresh products in Switzerland. Especially since we are a global company.<br><br>Therefore we import 3% of our herbs from the awesome, hard working farmers in India and other locations around the world.'+"</p>";
});

// Footsteps slides

climberBtn.addEventListener("click", () => {
    popUpBg.classList.add("bg-active");
    smallHeader.style.padding = "0.5em 3em";
    logoTransform.style.width = "4.5em";
    intro.classList.add("popup-menu-underline");
});

closePopUp.addEventListener("click", () => {
    popUpBg.classList.remove("bg-active");
    smallHeader.style.padding = "1.2em 3em";
    logoTransform.style.width = "6em";
});

intro.addEventListener("click", () => {
    changeImg.src = "./images/footstepsbg.jpg";
    changeColor.style.color = "white";
    intro.classList.add("popup-menu-underline");
    nature.classList.remove("popup-menu-underline");
    people.classList.remove("popup-menu-underline");
    transparency.classList.remove("popup-menu-underline");
    business.classList.remove("popup-menu-underline");
    popupText.innerHTML = "<h1 class='popup-h1'>"+'Our Footsteps Approach'+"</h1>"+
                            "<h2 class='popup-h2'>"+'Sustainability strategy'+"</h2>"+
                                "<p class='popup-paragraph'>"+'Understand how we can apply our sourcing standards from Switzerland in our global supply chain. We have high standards in our herb farming sourcing.<br> This footstep aims to explore how we can leverage and transfer our best practices (a combination of Swiss standards and Thomas Aeschlimann’s good work) to our global supply chain, in order to promote biodiversity and sustainable farming practices, while reducing potential reputational risks.'+"</p>"+
                                "<h2 class='popup-h2'>"+'CURRENT STATE'+"</h2>"+
                                "<p class='popup-paragraph'>"+'At Ricola we believe in the actions we take in the here and now. We believe that every step towards a more sustainable way of operating and developing our global business matters. The belief is grounded in Lean methodology, tangibility, behavioural and mathematical science. <br><br>If we take relevant and constant sustainable footsteps, over time, the accumulated effect will benefit us and the world in ways we could not imagine. <br><br>We refer to measures and projects as: “Footsteps”.'+"</p>";
})

nature.addEventListener("click", () => {
    changeImg.src = "./images/footsteps_nature_croped.jpg";
    changeColor.style.color = "grey";
    intro.classList.remove("popup-menu-underline");
    nature.classList.add("popup-menu-underline");
    people.classList.remove("popup-menu-underline");
    transparency.classList.remove("popup-menu-underline");
    business.classList.remove("popup-menu-underline");
    popupText.innerHTML = "<h1 class='popup-h1'>"+'Beyond Zero Twards Positive Enviromental impact'+"</h1>"+
                            "<h2 class='popup-h2'>"+'INTENTION'+"</h2>"+
                                "<p class='popup-paragraph'>"+'Understand how we can apply our sourcing standards from Switzerland in our global supply chain. We have high standards in our herb farming sourcing.<br> This footstep aims to explore how we can leverage and transfer our best practices (a combination of Swiss standards and Thomas Aeschlimann’s good work) to our global supply chain, in order to promote biodiversity and sustainable farming practices, while reducing potential reputational risks.'+"</p>"+
                                "<h2 class='popup-h2'>"+'CURRENT STATE'+"</h2>"+
                                "<p class='popup-paragraph'>"+'We work close with farmers in Switzerland to ensure high biodiversity standards. A majority of supplier is certified according to “BioSuisse“ standards and farmers in Switzerland that produce for us are adhering to high sustainable farming standards. This is not necessarily the case in our global supply chain. Through Close the Gap we have identified areas that need improvement and we wish to conduct this improvement based on a set of Ricola Principles.'+"</p>";
})

people.addEventListener("click", () => {
    changeImg.src = "./images/footsteps_people.jpg";
    changeColor.style.color = "black";
    intro.classList.remove("popup-menu-underline");
    nature.classList.remove("popup-menu-underline");
    people.classList.add("popup-menu-underline");
    transparency.classList.remove("popup-menu-underline");
    business.classList.remove("popup-menu-underline");
    popupText.innerHTML = "<h2 class='popup-h2'>"+'Continuous deep care. '+"</h2>"+
    "<p class='popup-paragraph'>"+'“Enriching the lives of people and the communities we engage with”'+"</p>"+
                            "<h2 class='popup-h2'>"+'Vision'+"</h2>"+
                                "<p class='popup-paragraph'>"+'Our vision of being a progressive and responsible employer is to support our employees in achieving their goals, to behave respectfully and to be valued by the workforce as a stable employer.'+"</p>"+
                                "<h2 class='popup-h2'>"+'Key Project'+"</h2>"+
                                "<p class='popup-paragraph'>"+'The cultural transformation “We are Ricola” project was kicked-off in 2019. “We are Ricola” focuses on developing strong leadership and accountability throughout the organisation by building on the knowhow and talent of everyone.'+"</p>"+
                                "<img class='icon-audience' src='./images/26_ricola_icon_audience_line_w.png' alt='Swiss'>";
})

business.addEventListener("click", () => {
    changeImg.src = "./images/footsteps_business.jpg";
    changeColor.style.color = "white";
    intro.classList.remove("popup-menu-underline");
    nature.classList.remove("popup-menu-underline");
    people.classList.remove("popup-menu-underline");
    transparency.classList.remove("popup-menu-underline");
    business.classList.add("popup-menu-underline");
    popupText.innerHTML = "<h2 class='popup-h2'>"+'Vision and Ambition'+"</h2>"+
                                "<p class='popup-paragraph'>"+'Regenerative business. Through growth inspired by nature. With confidence and consciousness growing a resilient and thriving global business. Looking to nature for inspiration, while improving our ways of doing business.'+"</p>"+
                                "<h2 class='popup-h2'>"+'Connecting People and Business'+"</h2>"+
                                "<p class='popup-paragraph'>"+'We commit to build a sustainable, thriving global business. We apply our skills and knowledge to transform naturally healthy herbs into delightful products. Responding to a genuine need, we connect people to nature.<br><br>We care deeply about both.'+"</p>";
})

transparency.addEventListener("click", () => {
    changeImg.src = "./images/footsteps_transparency.jpg";
    changeColor.style.color = "black";
    intro.classList.remove("popup-menu-underline");
    nature.classList.remove("popup-menu-underline");
    people.classList.remove("popup-menu-underline");
    transparency.classList.add("popup-menu-underline");
    business.classList.remove("popup-menu-underline");
    popupText.innerHTML = "<h2 class='popup-h2'>"+'Commitment'+"</h2>"+
                                "<p class='popup-paragraph'>"+'Ricola is committed to thinking and acting sustainably, and for decades, this has been an important basis for the management’s decision making. The sustainability strategy is based on the stable foundation of our declaration that “Sustainability is our way of life”. This commitment places sustainability at the heart of internal processes and reinforces internal and external communication on sustainability issues.'+"</p>"+
                                "<h2 class='popup-h2'>"+'Focus'+"</h2>"+
                                "<p class='popup-paragraph'>"+'Our sustainability strategy focuses on the areas in which the company has the greatest impact on its stakeholders and the environment. Our herb specialties and their manufacture are at the center of our strategy, which is based on four pillars. These pillars represent the main thrusts of Ricola’s social, environ- mental and economic responsibility.'+"</p>";
})





// ------------------------------------SECTION 2------------------------------------

// Farm slides


farmBtn.addEventListener("click", () => {
    popUpFarm.classList.add("bg-active");
    smallHeader.style.padding = "0.5em 3em";
    logoTransform.style.width = "4.5em";
    linkIntroFarm.classList.add("popup-menu-underline");
});

closePopUpFarm.addEventListener("click", () => {
    popUpFarm.classList.remove("bg-active");
    smallHeader.style.padding = "1.2em 3em";
    logoTransform.style.width = "6em";
});

linkIntroFarm.addEventListener("click", () => {
    popupImgFarm.src = "./images/Farm_Intro_Background test.jpg";
    linkIntroFarm.classList.add("popup-menu-underline");
    schutz.classList.remove("popup-menu-underline");
    morard.classList.remove("popup-menu-underline");
    popupInfoFarm.innerHTML = "<h1 class='popup-h1'>"+'Our growing Regions'+"</h1>"+
                            "<h2 class='popup-h2'>"+'Robust and pure'+"</h2>"+
                                "<p class='popup-paragraph'>"+'Our herbs grow at sites in Valais, Emmental, Val Poschiavo, the southern foothills of the Jura mountains and Central Switzerland. Over one hundred highly experienced herb farmers attend to the small plants that thrive in the soil types that are unique to the Swiss mountains. This is where the energy in every Ricola sweet comes from.'+"</p>"+
                                "<div class='swiss-div'>"+
                                "<img class='inner-images swiss-img' src='./images/Swiss.svg' alt='Swiss'>"+
                                "</div>"+
                                "<p class='popup-paragraph'>"+'Every herb has unique requirements that need to be met if it is to become healthy and strong. This is why our cultivation methods are aligned with the various climates, sites and soil conditions. In Emmental and the southern foothills of the Jura mountains, acidic soil and relatively high rainfall create the ideal environment in which to grow peppermint crops. Meanwhile, the warm, dry climate and light, stony soil in Valais and the Val Poschiavo valley – sometimes at altitudes of 1,000 metres above sea level – are ideal for the cultivation of sage and thyme. <br><br> The harsh mountain climate keeps the herbs used in Ricola’s products robust and pure. We use growing regions that are situated as far away from industrial areas and traffic as possible. This enables us to protect our herbs and prevent them from coming into contact with pollutants and other harmful substances.'+"</p>";
});

schutz.addEventListener("click", () => {
    popupImgFarm.src = "./images/Shutz_Background.png";
    linkIntroFarm.classList.remove("popup-menu-underline");
    schutz.classList.add("popup-menu-underline");
    morard.classList.remove("popup-menu-underline");
    popupInfoFarm.innerHTML = "<h1 class='popup-h1'>"+'The Schütz family'+"</h1>"+
                            "<h2 class='popup-h2'>"+'“Ricola shares my values and mindset. Pursuing a policy of natural cultivation suits me perfectly.”<br><br>'+"</h2>"+
                                "<p class='popup-paragraph'>"+'The Schütz family’s partnership with Ricola has been in place for over twenty years. Based in Emmental, the six members of the family are dedicated to looking after their herb fields.'+"</p>"+
                                "<div class='bubble-people'>"+
                                "<img class='bubble-man' src='./images/bubble_man.png' alt='peppermintman'>"+
                                "<img class='bubble-woman' src='./images/bubble_woman.png' alt='peppermintwoman'>"+
                                "</div>"+
                                "<p class='popup-paragraph'>"+'Eliane and Christian Schütz supply Ricola with over 2,000 kilograms of peppermint and 700 kilograms of lemon balm each year.<br><br>Natural cultivation goes hand in hand with natural labour. To that end, Eliane and Christian spend three to four hours a day weeding their fields. Sometimes the whole family – and even the neighbouring family – lends a helping hand. “We have a great time working together,” says eldest daughter Anina.'+"</p>";
});

morard.addEventListener("click", () => {
    popupImgFarm.src = "./images/Morard_Background test.png";
    linkIntroFarm.classList.remove("popup-menu-underline");
    schutz.classList.remove("popup-menu-underline");
    morard.classList.add("popup-menu-underline");
    popupInfoFarm.innerHTML = "<h1 class='popup-h1'>"+'The Morard family'+"</h1>"+
                            "<h2 class='popup-h2'>"+'“Mountain people have always used herbs. These habits were passed down to me from my parents.”<br><br>'+"</h2>"+
                                "<p class='popup-paragraph'>"+'Hailing from Grimisuat, the Morard family grows the mint used in Ricola Glacier Mints on the moraine soil that the canton of Valais is famous for.'+"</p>"+
                                "<div class='bubble-people'>"+
                                "<img class='bubble-man' src='./images/Morard_man.png' alt='peppermintman'>"+
                                "<img class='bubble-woman' src='./images/Morard_family.png' alt='peppermintwoman'>"+
                                "</div>"+
                                "<p class='popup-paragraph'>"+'Frédéric Morard, who took over the farm from his father Armand, helped out in the fields as a young boy. Before entering into a partnership with Ricola, the Morard family – like many other farmers in Valais – mainly cultivated potatoes and strawberries.<br><br>Despite using machines, up to 70% of the herbs are still cultivated by hand today. The Morard family routinely invests around 1,500 hours into each hectare of land per year. Ricola’s homegrown “glacier mint” starts its life in the Valais Alps before being made into drops and sent out around the world.'+"</p>";
});

// Herb slides

herbsBtn.addEventListener("click", () => {
    popupHerbs.classList.add("bg-active");
    smallHeader.style.padding = "0.5em 3em";
    logoTransform.style.width = "4.5em";
    introHerbs.classList.add("popup-menu-underline");
});

closePopupHerbs.addEventListener("click", () => {
    popupHerbs.classList.remove("bg-active");
    smallHeader.style.padding = "1.2em 3em";
    logoTransform.style.width = "6em";
});

introHerbs.addEventListener("click", () => {
    popupImgHerbs.src = "./images/herb_intro.png";
    introHerbs.classList.add("popup-menu-underline");
    horehound.classList.remove("popup-menu-underline");
    burnet.classList.remove("popup-menu-underline");
    popupInfoHerbs.innerHTML = "<h1 class='popup-h1'>"+'Intro'+"</h1>"+
                            "<h2 class='popup-h2'>"+'Herbs'+"</h2>"+
                                "<p class='popup-paragraph'>"+'In 1940, Emil Richter, pioneer and founder of Ricola, mixed the 13 herb blend for the first time. Based on this blend, he established Ricola’s most important product, the original herb.<br><br>Today we use the same herbs to produce our fresh cough drops in different mixes and flavors.'+"</p>"+
                                "<div class='herbs-images'>"+
                                "<div class='div-herbs'>"+
                                "<img class='inner-images-herbs' src='./images/herbs/Horehound.png' alt='Swiss'>"+
                                    "<p class='p-herbs'>"+'Horehound'+"</p>"+
                                "</div>"+
                                "<div class='div-herbs'>"+
                                "<img class='inner-images-herbs' src='./images/herbs/Burnet.png' alt='Swiss'>"+
                                    "<p class='p-herbs'>"+'Burnet'+"</p>"+
                                "</div>"+
                                "<div class='div-herbs'>"+
                                "<img class='inner-images-herbs' src='./images/herbs/Cowslip.png' alt='Swiss'>"+
                                    "<p class='p-herbs'>"+'Cowslip'+"</p>"+
                                "</div>"+
                                "<div class='div-herbs'>"+
                                "<img class='inner-images-herbs' src='./images/herbs/Seedwell.png' alt='Swiss'>"+
                                    "<p class='p-herbs'>"+'Seedwell'+"</p>"+
                                "</div>"+
                                "<div class='div-herbs'>"+
                                "<img class='inner-images-herbs' src='./images/herbs/Elder.png' alt='Swiss'>"+
                                    "<p class='p-herbs'>"+'Elder'+"</p>"+
                                "</div>"+
                                "<div class='div-herbs'>"+
                                "<img class='inner-images-herbs' src='./images/herbs/Ladys mantle.png' alt='Swiss'>"+
                                    "<p class='p-herbs'>"+'Ladys mantle'+"</p>"+
                                "</div>"+
                                "<div class='div-herbs'>"+
                                "<img class='inner-images-herbs' src='./images/herbs/Mallow.png' alt='Swiss'>"+
                                    "<p class='p-herbs'>"+'Mallow'+"</p>"+
                                "</div>"+
                                "<div class='div-herbs'>"+
                                "<img class='inner-images-herbs' src='./images/herbs/Peppermint.png' alt='Swiss'>"+
                                    "<p class='p-herbs'>"+'Peppermint'+"</p>"+
                                "</div>"+
                                "<div class='div-herbs'>"+
                                "<img class='inner-images-herbs' src='./images/herbs/Sage.png' alt='Swiss'>"+
                                    "<p class='p-herbs'>"+'Sage'+"</p>"+
                                "</div>"+
                                "<div class='div-herbs'>"+
                                "<img class='inner-images-herbs' src='./images/herbs/Yarrow.png' alt='Swiss'>"+
                                    "<p class='p-herbs'>"+'Yarrow'+"</p>"+
                                "</div>"+
                                "<div class='div-herbs'>"+
                                "<img class='inner-images-herbs' src='./images/herbs/Plantain.png' alt='Swiss'>"+
                                    "<p class='p-herbs'>"+'Plantain'+"</p>"+
                                "</div>"+
                                "<div class='div-herbs'>"+
                                "<img class='inner-images-herbs' src='./images/herbs/Thyme.png' alt='Swiss'>"+
                                    "<p class='p-herbs'>"+'Thyme'+"</p>"+
                                "</div>"+
                                "<div class='div-herbs'>"+
                                "<img class='inner-images-herbs' src='./images/herbs/Marshmallow.png' alt='Swiss'>"+
                                    "<p class='p-herbs'>"+'Marshmallow'+"</p>"+
                                "</div>"+
                                "</div>";

});

horehound.addEventListener("click", () => {
    popupImgHerbs.src = "./images/horehound.jpg";
    introHerbs.classList.remove("popup-menu-underline");
    horehound.classList.add("popup-menu-underline");
    burnet.classList.remove("popup-menu-underline");
    popupInfoHerbs.innerHTML = "<h1 class='popup-h1'>"+'Horehound'+"</h1>"+
                            "<h2 class='popup-h2'>"+'ETYMOLOGY'+"</h2>"+
                                "<p class='popup-paragraph'>"+'The Latin name, marrubium vulgare, is derived from two Hebrew terms: mar, meaning “bitter”, and rob, meaning “much”. The taste of horehound also contributes to the name, with vulgare meaning “simple” or “common”.'+"</p>"+
                                "<h2 class='popup-h2'>"+'MYTHOLOGY'+"</h2>"+
                                "<p class='popup-paragraph'>"+'In Germanic mythology, the horehound symbolizes a plant struck by lightning. The thunder god Thor is said to have sent the lightning bolt down to Earth. The Germanic people believed that the horehound prevented lightning from striking a person with no faith in god and has carried its power inside it ever since, as evidenced by the herb’s white floral crown.'+"</p>"+
                                "<h2 class='popup-h2'>"+'CHARACTERISTICS<br><br>'+"</h2>"+
                                "<h2 class='popup-h2'>"+'PLANT FAMILY'+"</h2>"+
                                "<p class='popup-paragraph'>"+'Lamiaceae (labiate)'+"</p>"+
                                "<h2 class='popup-h2'>"+'FLOWERING SEASON'+"</h2>"+
                                "<p class='popup-paragraph'>"+'September'+"</p>"+
                                "<h2 class='popup-h2'>"+'HARVEST'+"</h2>"+
                                "<p class='popup-paragraph'>"+'Upper shoots when blooming'+"</p>"+
                                "<h2 class='popup-h2'>"+'SIGNATURE PROPERTIES'+"</h2>"+
                                "<p class='popup-paragraph'>"+'Square stems covered in downy hairs, rhythmic leaf formation.'+"</p>"+
                                "<h2 class='popup-h2'>"+'VEGETATION'+"</h2>"+
                                "<p class='popup-paragraph'>"+'Grassland, uncultivated land, landfill sites…'+"</p>";
});

burnet.addEventListener("click", () => {
    popupImgHerbs.src = "./images/herb_burnet.png";
    introHerbs.classList.remove("popup-menu-underline");
    horehound.classList.remove("popup-menu-underline");
    burnet.classList.add("popup-menu-underline");
    popupInfoHerbs.innerHTML = "<h1 class='popup-h1'>"+'Burnet'+"</h1>"+
                            "<h2 class='popup-h2'>"+'ETYMOLOGY'+"</h2>"+
                                "<p class='popup-paragraph'>"+'The Latin plant genus pimpinella saxifraga may come from the word bipinula, which roughly means “double p  innate” and describes the shape of the leaves. Saxifraga means “stone-breaker” and refers to the herb’s special power or cultivation site.'+"</p>"+
                                "<h2 class='popup-h2'>"+'MYTHOLOGY'+"</h2>"+
                                "<p class='popup-paragraph'>"+'Burnet, a cure for the plague?<br><br>Like ginseng for the Chinese or eleuthero for the Russians, burnet was an elixir and essential tonic for the Native Americans. “Eat garlic and burnet to preserve your health,” was the advice that our forefathers lived by in the Middle Ages – they believed that by purifying the air they breathed, they would be protected against the plague.'+"</p>"+
                                "<h2 class='popup-h2'>"+'CHARACTERISTICS<br><br>'+"</h2>"+
                                "<h2 class='popup-h2'>"+'PLANT FAMILY'+"</h2>"+
                                "<p class='popup-paragraph'>"+'Umbelliferae'+"</p>"+
                                "<h2 class='popup-h2'>"+'FLOWERING SEASON'+"</h2>"+
                                "<p class='popup-paragraph'>"+'May to August'+"</p>"+
                                "<h2 class='popup-h2'>"+'HARVEST ROOTS'+"</h2>"+
                                "<p class='popup-paragraph'>"+'March to April and September to October'+"</p>"+
                                "<h2 class='popup-h2'>"+'SIGNATURE PROPERTIES'+"</h2>"+
                                "<p class='popup-paragraph'>"+'Strong odour of billy goat.'+"</p>"+
                                "<h2 class='popup-h2'>"+'VEGETATION'+"</h2>"+
                                "<p class='popup-paragraph'>"+'Grassland, sparse forests, rocky mountain slopes up to 2000 m above sea level.'+"</p>";
});

// ------------------------------------SECTION 4------------------------------------


factory.addEventListener("click", () => {
    popUpFactory.classList.add("bg-active");
    smallHeader.style.padding = "0.5em 3em";
    logoTransform.style.width = "4.5em";
    linkIntroFactory.classList.add("popup-menu-underline");
});

exitFactory.addEventListener("click", () => {
    popUpFactory.classList.remove("bg-active");
    smallHeader.style.padding = "1.2em 3em";
    logoTransform.style.width = "6em";
});

linkIntroFactory.addEventListener("click", () => {
    factoryImages.src = "./images/Factory_Background.jpg";
    linkIntroFactory.classList.add("popup-menu-underline");
    linkProcessing.classList.remove("popup-menu-underline");
    linkProduction.classList.remove("popup-menu-underline");
    popUpTextFactory.innerHTML = "<h1 class='popup-h1'>"+'From alpine soil to cough drop'+"</h1>"+
                                "<h2 class='popup-h2'>"+'“We should treat both our employees and our raw materials with care”'+"</h2>"+
                                "<p class='popup-paragraph'>"+'Ricola has a long and rich history, they way we care for our ingredients and people are part of our culture. But that doesn’t mean that we aren’t continuously innovating in how to do what we do best, with a sustainable future in mind.'+"</p>"+
                                "<img class='img-factory-friend' src='./images/Factory_bubble.png' alt='Ricola Friend'>"+
                                "<p class='popup-paragraph'>"+'The recipe for our 10-herb mixture has been tested to perfection. Since 1940 it has remained virtually unchanged. Other ingredients are added to the highly concentrated extract depending on the flavor of the herb drop. We use selected aromatic herbs and sugar or sugar substitutes to enhance our recipes. Ricola is committed to ensuring that all ingredients are natural and of a high quality, and we exclusively use natural coloring agents and flavorings.'+"</p>"+
                                "<p class='popup-paragraph'>"+'For us, sustainability is, on the one hand, about eliminating as much waste as possible. We do this by using the Lean approach. On the other hand, sustainability is also about being aware of the resources we use. This means that we are careful with our raw materials as well as the energy of our employees.'+"</p>"+
                                "<p class='popup-paragraph'>"+'Greatness can come in small steps that have a big impact. Such as the use of aluminum-free bags, and reducing the use of polyethylene in the factory process.'+"</p>"+
                                "<p class='popup-paragraph'>"+'Currently we are at a X% emission target. Every year since 20XX we’ve managed to decrease our emission from our factories by X%.'+"</p>";
});

linkProcessing.addEventListener("click", () => {
    factoryImages.src = "./images/Processing_background.png";
    linkIntroFactory.classList.remove("popup-menu-underline");
    linkProcessing.classList.add("popup-menu-underline");
    linkProduction.classList.remove("popup-menu-underline");
    popUpTextFactory.innerHTML = "<h1 class='popup-h1'>"+'Processing the fresh herbs'+"</h1>"+
                            "<h2 class='popup-h2'>"+'At Ricola, production is a matter of strictly controlled operations. This preserves the natural ingredients and aromas.<br><br>'+"</h2>"+
                                "<p class='popup-paragraph'>"+'Taking the herbs from the field and turning them into the end product is a long process. Even so, some steps are extremely quick. For example, we use short transport routes to deliver the freshly harvested herbs to our herb center in Laufen. Over 1,400 tons of fresh herbs are processed at the center each year. After drying, they are cleaned, cut and stored. Mixing is the final step. These herbs are used to create the unique 10-herb mixture which serves as the basis for all Ricola products.'+"</p>"+
                                "<img class='img-factory-friend' src='./images/Processing_bubble.png' alt='Ricola Friend'>"+
                                "<p class='popup-paragraph'>"+'The herbs are transferred from the herb center to the production facility via an underground route. The valuable ingredients are extracted from the herbs at this facility. The extraction process itself was designed by Ricola and is top secret. It was developed to ensure that the intensive aromas of the herbs are fully preserved.'+"</p>";
});

linkProduction.addEventListener("click", () => {
    factoryImages.src = "./images/Production_background.png";
    linkIntroFactory.classList.remove("popup-menu-underline");
    linkProcessing.classList.remove("popup-menu-underline");
    linkProduction.classList.add("popup-menu-underline");
    popUpTextFactory.innerHTML = "<h1 class='popup-h1'>"+'From alpine soil to cough drop'+"</h1>"+
                            "<h2 class='popup-h2'>"+'“We should treat both our employees and our raw materials with care”'+"</h2>"+
                                "<p class='popup-paragraph'>"+'Ricola has a long and rich history, they way we care for our ingredients and people are part of our culture. But that doesn’t mean that we aren’t continuously innovating in how to do what we do best, with a sustainable future in mind.'+"</p>"+
                                "<div class='bubble-production'>"+
                                "<img class='img-production-flex' src='./images/Production_bubble.png' alt='Ricola Friend'>"+
                                "<img class='img-production-flex' src='./images/candy+wecare.png' alt='Ricola Friend'>"+
                                "<img class='img-production-flex' src='./images/Production_bubble (1).png' alt='Ricola Friend'>"+
                                "</div>"+
                                "<p class='popup-paragraph'>"+'The recipe for our 10-herb mixture has been tested to perfection. Since 1940 it has remained virtually unchanged. Other ingredients are added to the highly concentrated extract depending on the flavor of the herb drop. We use selected aromatic herbs and sugar or sugar substitutes to enhance our recipes. Ricola is committed to ensuring that all ingredients are natural and of a high quality, and we exclusively use natural coloring agents and flavorings.'+"</p>"+
                                "<p class='popup-paragraph'>"+'For us, sustainability is, on the one hand, about eliminating as much waste as possible. We do this by using the Lean approach. On the other hand, sustainability is also about being aware of the resources we use. This means that we are careful with our raw materials as well as the energy of our employees.'+"</p>"+
                                "<p class='popup-paragraph'>"+'Greatness can come in small steps that have a big impact. Such as the use of aluminum-free bags, and reducing the use of polyethylene in the factory process.'+"</p>"+
                                "<p class='popup-paragraph'>"+'Currently we are at a X% emission target. Every year since 20XX we’ve managed to decrease our emission from our factories by X%.'+"</p>";
});

// People

peopleBtn.addEventListener("click", () => {
    popUpPeople.classList.add("bg-active");
    smallHeader.style.padding = "0.5em 3em";
    logoTransform.style.width = "4.5em";
    linkPeople.classList.add("popup-menu-underline");
});

exitPeople.addEventListener("click", () => {
    popUpPeople.classList.remove("bg-active");
    smallHeader.style.padding = "1.2em 3em";
    logoTransform.style.width = "6em";
});

// Truck

truckBtn.addEventListener("click", () => {
    popupAirplane.classList.add("bg-active");
    smallHeader.style.padding = "0.5em 3em";
    logoTransform.style.width = "4.5em";
});

closePopupAirplane.addEventListener("click", () => {
    popupAirplane.classList.remove("bg-active");
    smallHeader.style.padding = "1.2em 3em";
    logoTransform.style.width = "6em";
});

exportMenu.addEventListener("click", () => {
    popupImgAirplane.src = "./images/export.png";
    popupImgAirplane.src = "./images/export.png";
    exportMenu.classList.add("popup-menu-underline");
    importMenu.classList.remove("popup-menu-underline");
    popupInfoAirplane.innerHTML = "<h1 class='popup-h1'>"+'Export'+"</h1>"+
                            "<h2 class='popup-h2'>"+'Providing Fresh Alpine Herbs'+"</h2>"+
                                "<p class='popup-paragraph'>"+'Ricola is a global family company. We provide fresh alpine herbs in the form of cough drops on a worldwide scale. Our mission is to bring freshness and health of the swiss alps to anyone, anywhere.'+"</p>"+
                                "<h2 class='popup-h2'>"+'Sustainable Supply Chain'+"</h2>"+
                                "<p class='popup-paragraph'>"+'Since all of Ricola’s production takes place in Switzerland we export all of our product from there. We ship out around X tons of product every year to Y countries. To do this in the most sustainable way we follow our sustainable supply chain footsteps to carry out this operation.'+"</p>";
});

importMenu.addEventListener("click", () => {
    popupImgAirplane.src = "./images/Import.png";
    popupImgAirplane.src = "./images/Import.png";
    importMenu.classList.add("popup-menu-underline");
    exportMenu.classList.remove("popup-menu-underline");
    popupInfoAirplane.innerHTML = "<h1 class='popup-h1'>"+'Imported herbs'+"</h1>"+
                            "<h2 class='popup-h2'>"+'Established Ecosystem'+"</h2>"+
                                "<p class='popup-paragraph'>"+'Here at Ricola we pride ourselves on growing 97% of all our herbs right here in the swiss alps. With the help of over 100 amazing farmers we have established an ecosystem of fresh near produced raw materials.'+"</p>"+
                                "<h2 class='popup-h2'>"+'We are not yet perfect'+"</h2>"+
                                "<p class='popup-paragraph'>"+'Although we are not perfect it would be impossible to find all the herbs we require for our healthy fresh products in Switzerland. Especially since we are a global company.<br><br>Therefore we import 3% of our herbs from the awesome, hard working farmers in India and other locations around the world.'+"</p>";
});