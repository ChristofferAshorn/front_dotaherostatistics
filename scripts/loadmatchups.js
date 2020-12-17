const matchupTableBody = document.querySelector(".matchup-table > tbody");
const numberOfHeroes = 118;

function loadMatchups() {
    for (i = 0; i < numberOfHeroes; i++) {
        currentHero = getHero(i);

        populateMatchups(currentHero);

    }
}

// Populate the table, importing the API and hero data.
function populateMatchups(hero) {
    // create new table row
    const tr = document.createElement("tr");

    // HERO AVATAR IMAGES
    const heroImagePath = getHeroImage(hero);
    const heroName = hero;

    // create new table cell / data, which the Img goes too.
    const td = document.createElement("td");

    // load the table cell with a img tag and the heroImagePath
    td.innerHTML = '<div class="heroRow"><img src="' + heroImagePath + '">' + '<a href="#">' +  hero + '</a></div>';
    tr.appendChild(td);

    // GAMES PLAYED
    const games = Math.floor(Math.random() * 100);
    const td2 = document.createElement("td");
    td2.textContent = games;
    td2.innerHTML = games + '<div class="progress-bar"></div><div class="filled-progress-bar"></div>';
    tr.appendChild(td2);


    // HERO WIN RATES
    winrate = Math.floor(Math.random() * 100); 
    const td3 = document.createElement("td");
    td3.textContent = winrate;
    td3.innerHTML = winrate + '<div class="progress-bar"></div><div class="filled-progress-bar"></div>';
    tr.appendChild(td3);

    // ADVANTAGES
    advantage = Math.floor(Math.random() * 100); 
    const td4 = document.createElement("td");
    td4.textContent = advantage;
    td4.innerHTML = advantage + '<div class="progress-bar"></div><div class="filled-progress-bar"></div>';

    tr.appendChild(td4);

    matchupTableBody.appendChild(tr);
}



document.addEventListener("DOMContentLoaded", () => { loadMatchups(); });