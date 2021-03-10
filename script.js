const climberBtn = document.querySelector(".climber-btn")
const popUpBg = document.querySelector(".popup-climber")
const closePopUp = document.getElementById("exit-climber")
const smallHeader = document.querySelector(".header-container")

const intro = document.querySelector(".link-intro")
const nature = document.querySelector(".link-nature")
const people = document.querySelector(".link-people")
const business = document.querySelector(".link-business")
const transparency = document.querySelector(".link-transparency")

const popupText = document.querySelector(".popup-text-climber")
const changeImg = document.querySelector(".popup-img-climber")
const linkIntro = document.querySelector(".link-intro")

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

const schutz = document.getElementById("link-schutz")
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


// ------------------------------------SECTION 1------------------------------------

// Airplane slides

airplaneBtn.addEventListener("click", () => {
    popupAirplane.classList.add("bg-active");
    smallHeader.style.padding = "0.5em 3em";
});

closePopupAirplane.addEventListener("click", () => {
    popupAirplane.classList.remove("bg-active");
    smallHeader.style.padding = "1.2em 3em";
});

exportMenu.addEventListener("click", () => {
    popupImgAirplane.src = "/images/export.png";
    popupInfoAirplane.innerHTML = "<h1 class='popup-h1'>"+'Export'+"</h1>"+
                            "<h2 class='popup-h2'>"+'Providing Fresh Alpine Herbs'+"</h2>"+
                                "<p class='popup-paragraph'>"+'Ricola is a global family company. We provide fresh alpine herbs in the form of cough drops on a worldwide scale. Our mission is to bring freshness and health of the swiss alps to anyone, anywhere.'+"</p>"+
                                "<h2 class='popup-h2'>"+'Sustainable Supply Chain'+"</h2>"+
                                "<p class='popup-paragraph'>"+'Since all of Ricola’s production takes place in Switzerland we export all of our product from there. We ship out around X tons of product every year to Y countries. To do this in the most sustainable way we follow our sustainable supply chain footsteps to carry out this operation.'+"</p>";
});

importMenu.addEventListener("click", () => {
    popupImgAirplane.src = "/images/Import.png";
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
});

closePopUp.addEventListener("click", () => {
    popUpBg.classList.remove("bg-active");
    smallHeader.style.padding = "1.2em 3em";
});

intro.addEventListener("click", () => {
    changeImg.src = "/images/footsteps.png";
    popupText.innerHTML = "<h1 class='popup-h1'>"+'Our Footsteps Approach'+"</h1>"+
                            "<h2 class='popup-h2'>"+'Sustainability strategy'+"</h2>"+
                                "<p class='popup-paragraph'>"+'Understand how we can apply our sourcing standards from Switzerland in our global supply chain. We have high standards in our herb farming sourcing.<br> This footstep aims to explore how we can leverage and transfer our best practices (a combination of Swiss standards and Thomas Aeschlimann’s good work) to our global supply chain, in order to promote biodiversity and sustainable farming practices, while reducing potential reputational risks.'+"</p>"+
                                "<h2 class='popup-h2'>"+'CURRENT STATE'+"</h2>"+
                                "<p class='popup-paragraph'>"+'At Ricola we believe in the actions we take in the here and now. We believe that every step towards a more sustainable way of operating and developing our global business matters. The belief is grounded in Lean methodology, tangibility, behavioural and mathematical science. <br><br>If we take relevant and constant sustainable footsteps, over time, the accumulated effect will benefit us and the world in ways we could not imagine. <br><br>We refer to measures and projects as: “Footsteps”.'+"</p>";
})

nature.addEventListener("click", () => {
    changeImg.src = "/images/footsteps_nature_croped.jpg";
    popupText.innerHTML = "<h1 class='popup-h1'>"+'Beyond Zero Twards Positive Enviromental impact'+"</h1>"+
                            "<h2 class='popup-h2'>"+'INTENTION'+"</h2>"+
                                "<p class='popup-paragraph'>"+'Understand how we can apply our sourcing standards from Switzerland in our global supply chain. We have high standards in our herb farming sourcing.<br> This footstep aims to explore how we can leverage and transfer our best practices (a combination of Swiss standards and Thomas Aeschlimann’s good work) to our global supply chain, in order to promote biodiversity and sustainable farming practices, while reducing potential reputational risks.'+"</p>"+
                                "<h2 class='popup-h2'>"+'CURRENT STATE'+"</h2>"+
                                "<p class='popup-paragraph'>"+'We work close with farmers in Switzerland to ensure high biodiversity standards. A majority of supplier is certified according to “BioSuisse“ standards and farmers in Switzerland that produce for us are adhering to high sustainable farming standards. This is not necessarily the case in our global supply chain. Through Close the Gap we have identified areas that need improvement and we wish to conduct this improvement based on a set of Ricola Principles.'+"</p>";
})



// ------------------------------------SECTION 2------------------------------------

// Farm slides


farmBtn.addEventListener("click", () => {
    popUpFarm.classList.add("bg-active");
    smallHeader.style.padding = "0.5em 3em";
});

closePopUpFarm.addEventListener("click", () => {
    popUpFarm.classList.remove("bg-active");
    smallHeader.style.padding = "1.2em 3em";
});

linkIntroFarm.addEventListener("click", () => {
    popupImgFarm.src = "/images/Farm_Intro_Background.jpg";
    popupInfoFarm.innerHTML = "<h1 class='popup-h1'>"+'Our growing Regions'+"</h1>"+
                            "<h2 class='popup-h2'>"+'Robust and pure'+"</h2>"+
                                "<p class='popup-paragraph'>"+'Our herbs grow at sites in Valais, Emmental, Val Poschiavo, the southern foothills of the Jura mountains and Central Switzerland. Over one hundred highly experienced herb farmers attend to the small plants that thrive in the soil types that are unique to the Swiss mountains. This is where the energy in every Ricola sweet comes from.'+"</p>"+
                                "<img class='inner-images' src='/images/Swiss.svg' alt='Swiss'>"+
                                "<p class='popup-paragraph'>"+'Every herb has unique requirements that need to be met if it is to become healthy and strong. This is why our cultivation methods are aligned with the various climates, sites and soil conditions. In Emmental and the southern foothills of the Jura mountains, acidic soil and relatively high rainfall create the ideal environment in which to grow peppermint crops. Meanwhile, the warm, dry climate and light, stony soil in Valais and the Val Poschiavo valley – sometimes at altitudes of 1,000 metres above sea level – are ideal for the cultivation of sage and thyme. <br><br> The harsh mountain climate keeps the herbs used in Ricola’s products robust and pure. We use growing regions that are situated as far away from industrial areas and traffic as possible. This enables us to protect our herbs and prevent them from coming into contact with pollutants and other harmful substances.'+"</p>";
});

schutz.addEventListener("click", () => {
    popupImgFarm.src = "/images/Shutz_Background.png";
    popupInfoFarm.innerHTML = "<h1 class='popup-h1'>"+'The Schütz family'+"</h1>"+
                            "<h2 class='popup-h2'>"+'“Ricola shares my values and mindset. Pursuing a policy of natural cultivation suits me perfectly.”<br><br>'+"</h2>"+
                                "<p class='popup-paragraph'>"+'The Schütz family’s partnership with Ricola has been in place for over twenty years. Based in Emmental, the six members of the family are dedicated to looking after their herb fields.'+"</p>"+
                                "<div class='bubble-people'>"+
                                "<img class='bubble-man' src='/images/bubble_man.png' alt='peppermintman'>"+
                                "<img class='bubble-woman' src='/images/bubble_woman.png' alt='peppermintwoman'>"+
                                "</div>"+
                                "<p class='popup-paragraph'>"+'Eliane and Christian Schütz supply Ricola with over 2,000 kilograms of peppermint and 700 kilograms of lemon balm each year.<br><br>Natural cultivation goes hand in hand with natural labour. To that end, Eliane and Christian spend three to four hours a day weeding their fields. Sometimes the whole family – and even the neighbouring family – lends a helping hand. “We have a great time working together,” says eldest daughter Anina.'+"</p>";
});

morard.addEventListener("click", () => {
    popupImgFarm.src = "/images/Morard_Background.png";
    popupInfoFarm.innerHTML = "<h1 class='popup-h1'>"+'The Morard family'+"</h1>"+
                            "<h2 class='popup-h2'>"+'“Mountain people have always used herbs. These habits were passed down to me from my parents.”<br><br>'+"</h2>"+
                                "<p class='popup-paragraph'>"+'Hailing from Grimisuat, the Morard family grows the mint used in Ricola Glacier Mints on the moraine soil that the canton of Valais is famous for.'+"</p>"+
                                "<div class='bubble-people'>"+
                                "<img class='bubble-man' src='/images/Morard_man.png' alt='peppermintman'>"+
                                "<img class='bubble-woman' src='/images/Morard_family.png' alt='peppermintwoman'>"+
                                "</div>"+
                                "<p class='popup-paragraph'>"+'Frédéric Morard, who took over the farm from his father Armand, helped out in the fields as a young boy. Before entering into a partnership with Ricola, the Morard family – like many other farmers in Valais – mainly cultivated potatoes and strawberries.<br><br>Despite using machines, up to 70% of the herbs are still cultivated by hand today. The Morard family routinely invests around 1,500 hours into each hectare of land per year. Ricola’s homegrown “glacier mint” starts its life in the Valais Alps before being made into drops and sent out around the world.'+"</p>";
});

// Herb slides

herbsBtn.addEventListener("click", () => {
    popupHerbs.classList.add("bg-active");
    smallHeader.style.padding = "0.5em 3em";
});

closePopupHerbs.addEventListener("click", () => {
    popupHerbs.classList.remove("bg-active");
    smallHeader.style.padding = "1.2em 3em";
});

introHerbs.addEventListener("click", () => {
    popupImgHerbs.src = "/images/herb_intro.png";
    popupInfoHerbs.innerHTML = "<h1 class='popup-h1'>"+'Intro'+"</h1>"+
                            "<h2 class='popup-h2'>"+'Herbs'+"</h2>"+
                                "<p class='popup-paragraph'>"+'In 1940, Emil Richter, pioneer and founder of Ricola, mixed the 13 herb blend for the first time. Based on this blend, he established Ricola’s most important product, the original herb.<br><br>Today we use the same herbs to produce our fresh cough drops in different mixes and flavors.'+"</p>"+
                                "<div class='herbs-images'>"+
                                "<div class='div-herbs'>"+
                                "<img class='inner-images-herbs' src='/images/herbs/Horehound.png' alt='Swiss'>"+
                                    "<p class='p-herbs'>"+'Horehound'+"</p>"+
                                "</div>"+
                                "<div class='div-herbs'>"+
                                "<img class='inner-images-herbs' src='/images/herbs/Burnet.png' alt='Swiss'>"+
                                    "<p class='p-herbs'>"+'Burnet'+"</p>"+
                                "</div>"+
                                "<div class='div-herbs'>"+
                                "<img class='inner-images-herbs' src='/images/herbs/Cowslip.png' alt='Swiss'>"+
                                    "<p class='p-herbs'>"+'Cowslip'+"</p>"+
                                "</div>"+
                                "<div class='div-herbs'>"+
                                "<img class='inner-images-herbs' src='/images/herbs/Seedwell.png' alt='Swiss'>"+
                                    "<p class='p-herbs'>"+'Seedwell'+"</p>"+
                                "</div>"+
                                "<div class='div-herbs'>"+
                                "<img class='inner-images-herbs' src='/images/herbs/Elder.png' alt='Swiss'>"+
                                    "<p class='p-herbs'>"+'Elder'+"</p>"+
                                "</div>"+
                                "<div class='div-herbs'>"+
                                "<img class='inner-images-herbs' src='/images/herbs/Ladys mantle.png' alt='Swiss'>"+
                                    "<p class='p-herbs'>"+'Ladys mantle'+"</p>"+
                                "</div>"+
                                "<div class='div-herbs'>"+
                                "<img class='inner-images-herbs' src='/images/herbs/Mallow.png' alt='Swiss'>"+
                                    "<p class='p-herbs'>"+'Mallow'+"</p>"+
                                "</div>"+
                                "<div class='div-herbs'>"+
                                "<img class='inner-images-herbs' src='/images/herbs/Peppermint.png' alt='Swiss'>"+
                                    "<p class='p-herbs'>"+'Peppermint'+"</p>"+
                                "</div>"+
                                "<div class='div-herbs'>"+
                                "<img class='inner-images-herbs' src='/images/herbs/Sage.png' alt='Swiss'>"+
                                    "<p class='p-herbs'>"+'Sage'+"</p>"+
                                "</div>"+
                                "<div class='div-herbs'>"+
                                "<img class='inner-images-herbs' src='/images/herbs/Yarrow.png' alt='Swiss'>"+
                                    "<p class='p-herbs'>"+'Yarrow'+"</p>"+
                                "</div>"+
                                "<div class='div-herbs'>"+
                                "<img class='inner-images-herbs' src='/images/herbs/Plantain.png' alt='Swiss'>"+
                                    "<p class='p-herbs'>"+'Plantain'+"</p>"+
                                "</div>"+
                                "<div class='div-herbs'>"+
                                "<img class='inner-images-herbs' src='/images/herbs/Thyme.png' alt='Swiss'>"+
                                    "<p class='p-herbs'>"+'Thyme'+"</p>"+
                                "</div>"+
                                "<div class='div-herbs'>"+
                                "<img class='inner-images-herbs' src='/images/herbs/Marshmallow.png' alt='Swiss'>"+
                                    "<p class='p-herbs'>"+'Marshmallow'+"</p>"+
                                "</div>"+
                                "</div>";

});

horehound.addEventListener("click", () => {
    popupImgHerbs.src = "/images/horehound.jpg";
    popupInfoHerbs.innerHTML = "<h1 class='popup-h1'>"+'Horehound'+"</h1>"+
                            "<h2 class='popup-h2'>"+'ETYMOLOGY'+"</h2>"+
                                "<p class='popup-paragraph'>"+'The Latin name, marrubium vulgare, is derived from two Hebrew terms: mar, meaning “bitter”, and rob, meaning “much”. The taste of horehound also contributes to the name, with vulgare meaning “simple” or “common”.'+"</p>"+
                                "<h2 class='popup-h2'>"+'MYTHOLOGY'+"</h2>"+
                                "<p class='popup-paragraph'>"+'In Germanic mythology, the horehound symbolizes a plant struck by lightning. The thunder god Thor is said to have sent the lightning bolt down to Earth. The Germanic people believed that the horehound prevented lightning from striking a person with no faith in god and has carried its power inside it ever since, as evidenced by the herb’s white floral crown.'+"</p>"+
                                "<h2 class='popup-h2'>"+'CHARACTERISTICS'+"</h2>"+
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
    popupImgHerbs.src = "/images/herb_burnet.png";
    popupInfoHerbs.innerHTML = "<h1 class='popup-h1'>"+'Burnet'+"</h1>"+
                            "<h2 class='popup-h2'>"+'ETYMOLOGY'+"</h2>"+
                                "<p class='popup-paragraph'>"+'The Latin plant genus pimpinella saxifraga may come from the word bipinula, which roughly means “double p  innate” and describes the shape of the leaves. Saxifraga means “stone-breaker” and refers to the herb’s special power or cultivation site.'+"</p>"+
                                "<h2 class='popup-h2'>"+'MYTHOLOGY'+"</h2>"+
                                "<p class='popup-paragraph'>"+'Burnet, a cure for the plague?<br><br>Like ginseng for the Chinese or eleuthero for the Russians, burnet was an elixir and essential tonic for the Native Americans. “Eat garlic and burnet to preserve your health,” was the advice that our forefathers lived by in the Middle Ages – they believed that by purifying the air they breathed, they would be protected against the plague.'+"</p>"+
                                "<h2 class='popup-h2'>"+'CHARACTERISTICS'+"</h2>"+
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