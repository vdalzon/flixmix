//FILE FOR MOVIE API TEMPLATES IS UNDER DOCUMENTS

// MOVIE ARRAYS

let movieImage = [
    `https://upload.wikimedia.org/wikipedia/en/thumb/f/ff/MI_%E2%80%93_Fallout.jpg/400px-MI_%E2%80%93_Fallout.jpg`,
    `https://upload.wikimedia.org/wikipedia/en/thumb/c/c1/The_Matrix_Poster.jpg/400px-The_Matrix_Poster.jpg`,
    `https://upload.wikimedia.org/wikipedia/en/thumb/8/8a/Dark_Knight.jpg/400px-Dark_Knight.jpg`,
    `https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/Star_Wars_The_Force_Awakens_Theatrical_Poster.jpg/136px-Star_Wars_The_Force_Awakens_Theatrical_Poster.jpg`,
];
let movieDesc = [
    `Mission: Impossible – Fallout is a 2018 American action spy film written, produced, and directed by Christopher McQuarrie. It is the sixth installment in the Mission: Impossible film series, and the second film to be directed by McQuarrie following the 2015 film Rogue Nation, making him the first director to direct more than one film in the franchise. The cast includes Tom Cruise, Ving Rhames, Simon Pegg, Rebecca Ferguson, Sean Harris, Michelle Monaghan, and Alec Baldwin, all of whom reprise their roles from the previous films, along with Henry Cavill, Vanessa Kirby, and Angela Bassett, who join the franchise. In the film, Ethan Hunt and his team must track down missing plutonium while being monitored by a CIA agent after a mission goes wrong.`,
    `The Matrix is a 1999 science fiction action film written and directed by the Wachowskis. It stars Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss, Hugo Weaving, and Joe Pantoliano and is the first installment in the Matrix franchise. It depicts a dystopian future in which humanity is unknowingly trapped inside a simulated reality, the Matrix, created by intelligent machines to distract humans while using their bodies as an energy source. When computer programmer Thomas Anderson, under the hacker alias "Neo", uncovers the truth, he "is drawn into a rebellion against the machines" along with other people who have been freed from the Matrix
    `,
    `The Dark Knight is a 2008 superhero film directed, co-produced, and co-written by Christopher Nolan. Based on the DC Comics character Batman, the film is the second installment of Nolan's The Dark Knight Trilogy and a sequel to 2005's Batman Begins, starring Christian Bale and supported by Michael Caine, Heath Ledger, Gary Oldman, Aaron Eckhart, Maggie Gyllenhaal, and Morgan Freeman. In the film, Bruce Wayne / Batman (Bale), Police Lieutenant James Gordon (Oldman) and District Attorney Harvey Dent (Eckhart) form an alliance to dismantle organized crime in Gotham City, but are menaced by an anarchistic mastermind known as the Joker (Ledger), who seeks to undermine Batman's influence and turn the city to chaos.The Dark Knight is a 2008 superhero film directed, co-produced, and co-written by Christopher Nolan. Based on the DC Comics character Batman, the film is the second installment of Nolan's The Dark Knight Trilogy and a sequel to 2005's Batman Begins, starring Christian Bale and supported by Michael Caine, Heath Ledger, Gary Oldman, Aaron Eckhart, Maggie Gyllenhaal, and Morgan Freeman. In the film, Bruce Wayne / Batman (Bale), Police Lieutenant James Gordon (Oldman) and District Attorney Harvey Dent (Eckhart) form an alliance to dismantle organized crime in Gotham City, but are menaced by an anarchistic mastermind known as the Joker (Ledger), who seeks to undermine Batman's influence and turn the city to chaos.`,
    `Star Wars: The Force Awakens (also known as Star Wars: Episode VII – The Force Awakens) is a 2015 American space opera film produced, co-written and directed by J. J. Abrams. It is the first installment in the Star Wars sequel trilogy, following the story of Return of the Jedi (1983), and is the seventh episode of the nine-part "Skywalker saga". It was produced by Lucasfilm and Abrams's production company Bad Robot Productions, and was distributed by Walt Disney Studios Motion Pictures. The film's ensemble cast includes Harrison Ford, Mark Hamill, Carrie Fisher, Adam Driver, Daisy Ridley, John Boyega, Oscar Isaac, Lupita Nyong'o, Andy Serkis, Domhnall Gleeson, Anthony Daniels, Peter Mayhew, and Max von Sydow. Set 30 years after Return of the Jedi, The Force Awakens follows Rey, Finn, Poe Dameron, and Han Solo's search for Luke Skywalker and their fight in the Resistance, led by General Leia Organa and veterans of the Rebel Alliance, against Kylo Ren and the First Order, a successor to the Galactic Empire.`,
];

// DRINK ARRAYS

let drinkImage = [
    `https://www.thecocktaildb.com/images/media/drink/ec2jtz1504350429.jpg`,
    ` https://www.thecocktaildb.com/images/media/drink/71t8581504353095.jpg`,
    `https://www.thecocktaildb.com/images/media/drink/4qnyty1504368615.jpg`,
    `https://www.thecocktaildb.com/images/media/drink/nl89tf1518947401.jpg`,
];

let drinkIngredient = [
    [
        `<span>1. Sweet Vermouth </span><span>2. Bourbon </span><span>3. Angostura </span><span>1. Sweet Vermouth </span><span>2. Bourbon </span><span>3. Angostura </span><span>1. Sweet Vermouth </span><span>2. Bourbon </span><span>3. Angostura </span>`,
    ],
    [
        `<span>1. DRINK INGREDIENT 2  </span><span>2. Bourbon </span><span>3. Angostura </span><span>1. Sweet Vermouth </span><span>2. Bourbon </span><span>3. Angostura </span><span>1. Sweet Vermouth </span><span>2. Bourbon </span><span>3. Angostura </span>`,
    ],
    [
        `<span>1. DRINK INGREDIENT 3 </span><span>2. Bourbon </span><span>3. Angostura </span><span>1. Sweet Vermouth </span><span>2. Bourbon </span><span>3. Angostura </span><span>1. Sweet Vermouth </span><span>2. Bourbon </span><span>3. Angostura </span>`,
    ],
    [
        `<span>1. DRINK INGREDIENT 4</span><span>2. Bourbon </span><span>3. Angostura </span><span>1. Sweet Vermouth </span><span>2. Bourbon </span><span>3. Angostura </span><span>1. Sweet Vermouth </span><span>2. Bourbon </span><span>3. Angostura </span>`,
    ],
];

// TEMP MOVIE LIST ARRAY
let movieAPI = [
    "Flash: Flashpoint ",
    "Harry Potter: Sorcerers Stone",
    "Harry Potter: Chamber of Secrets",
    "Harry Potter: Prisoner of Azkaban",
    "Harry Potter: Goblet of Fire",
    "Harry Potter: Order of the Phoenix",
    "Harry Potter: The Half Blood Prince",
    "Harry Potter: Deathly Hollows",
    "John Wick",
    "Spiderman into the spiderverse",
    "Up",
    "Robin Hood man in tights",
];

// ALL DOCUMENT SELECTORS

const movieDetail = document.getElementById("card-movie-desc");

const movieImg = document.getElementById("movie-image");

const drinkDetail = document.getElementById("card-drink-desc");

const drinkImg = document.getElementById("drink-image");

const movies = document.getElementById("test");

const searchMovies = document.getElementById("search-movies");

const dataList = document.querySelector(".movie-api-data-list");

// const movieSelected = document.querySelector("datalist option");

// EVENT LISTENERS

movies.addEventListener("click", createPairs);

searchMovies.addEventListener("keyup", (e) => {
    // get input text
    if (e.target.value.length >= 3) {
        dataList.setAttribute("id", "movie-api");
    } else {
        dataList.setAttribute("id", "");
    }
});

movieAPI.forEach(function (item) {
    var options = document.createElement("option");
    options.value = item;
    options.setAttribute("class", "movie-options");
    dataList.appendChild(options);
});

//create list of movies to search automatically

//EVENT HANDLER

//CREATE PAIR FUNCTION
function createMovieCard(i) {
    i = i;

    let movieCard = ` <div class="content-movie">
<div class="card-movie">
    <img
        class="content-image"
        id="movie-image"
        alt="Picture of movie poster"
        src="${movieImage[i]}"
    />
    <div class="movie-detail-container">
        <h3 class="detail-title">
            Movie detail
        </h3>

        <p
            id="card-movie-desc"
            class="card-desc"
        >
        ${movieDesc[i]}
        </p>
        <button class="read-more">
            READ MORE
        </button>
    </div>
</div>
</div>`;

    return movieCard;
}
// let movieCard = createMovieCard();

// DRINK FUNCTION

function createDrinkCard(i) {
    i = i;

    let drinkCard = ` <div class="content-drink">
<div class="card-drink">
    <img
        class="content-image"
        id="drink-image"
        alt="Picture of cocktail"
        src="${drinkImage[i]}"
    />

    <div class="drink-detail-container">
        <h3>Drink Ingredients</h3>
        <p
            id="card-drink-desc"
            class="card-desc card-drink-desc"
        >
            ${drinkIngredient[i]}
        </p>
        <button class="read-more">
            READ MORE
        </button>
    </div>
</div>
</div>`;

    return drinkCard;
}
// let drinkCard = createDrinkCard();
//loop through array
function cardPairs(i) {
    i = i;
    let paircard = ` ${createMovieCard(i)}  ${createDrinkCard(i)}`;
    return paircard;
}

//ITERATE THROUGH PAIRS

function allPairs() {
    let results = "";
    for (i = 0; i < movieDesc.length; i++) {
        results += cardPairs(i);
    }
    return results;
}
//CREATE CONTENTS WHEN ACTIVATED
function createPairs(i) {
    i = 0;
    console.log("ran");
    let contentCont = document.createElement("div");
    let MainBottomCont = document.getElementById("bottom-main-container");
    contentCont.className = "content-container";
    // <div class="pairing-results-container"> removed because of cardPair creation
    contentCont.innerHTML = `<div class="content-container">
    
    
        <h1 class="movie-drink-title">MOVIES AND DRINKS</h1>
        
        <div class="pairing-results-container">
        <div id="pairs-container">
     ${allPairs()}
        </div>
         
            
          
            

           
            
   
       
    </div>
</div> `;

    MainBottomCont.appendChild(contentCont);
}
