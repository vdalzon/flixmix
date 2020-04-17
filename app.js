const tstDive = new TasteDive();
const movieOptions = new MovieOptions();

// ALL DOCUMENT GET SELECTORS----------------------------------------------------------------------

const movieDetail = document.getElementById("card-movie-desc");

const movieImg = document.getElementById("movie-image");

const drinkDetail = document.getElementById("card-drink-desc");

const drinkImg = document.getElementById("drink-image");

const movies = document.getElementById("movie-api-data-list");

const searchMovies = document.getElementById("search-movies");

const movieList = document.querySelector(".movie-api-data-list");

const searchDropdown = document.getElementById("search-dropdown");
const instuct = document.getElementById("instruction");

// ALL EVENT LISTENERS--------------------------------------------------------------------------
searchDropdown.addEventListener("keyup", filterSearch);
movies.addEventListener("click", movieSelected);

function filterSearch(e) {
    let filter, li, i;
    filter = searchMovies.value.toUpperCase();
    li = searchDropdown.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        txtValue = li[i].textContent || li[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

function movieSelected(e) {
    searchMovies.value = "";
    instuct.textContent = `Movies and Drinks Based on ${e.target.textContent}`;
    movieList.setAttribute("style", "display:none");
    createPairs();
}

searchMovies.addEventListener("keyup", (e) => {
    // get input text
    if (e.target.value.length >= 3) {
        movieList.setAttribute("id", "movie-api");

        movieList.setAttribute("style", "display:");
    } else {
        movieList.setAttribute("id", "");
    }
});

searchMovies.addEventListener("keydown", (e) => {
    if (e.target.value.length <= 3) {
        movieList.setAttribute("style", "display:none");
    }
});

movieOptions.movies.forEach(function (item) {
    let options = document.createElement("li");
    options.className = "movie-options";
    options.innerText = item;

    movieList.appendChild(options);
});

//FETCH REQUESTS-----------------------------------------------------------------------------------
// tstDive.get("tasteDive.json").then((data) => console.log(data));
// tstDive
//     .get(
//         "https://tastedive.com/api/similar?info=1&limit=4&q=movie:harry potter&k=361760-Flixmix-940QY3AP"
//     )
//     .then((data) => {
//         let movies = data;
//         data.forEach((movies) => {
//             console.log(movies.wUrl);
//         });
//     });

//TASTEDIVE REQUESTS

//TESSSSSSTTTTTTTT
function creatCards() {
    for (i = 0; i < 4; i++) {
        console.log(tasteDive[i].Name);
        console.log(wikiVal[i].Link);
        movieCard += ` <div class="content-movie">
<div class="card-movie">
<img
class="content-image"
id="movie-image"
alt="Picture of movie poster"
src="${wikiVal[i].Link}"
/>
<div class="movie-detail-container">
<h3 class="detail-title">
${tasteDive[i].Name}
</h3>

<p
id="card-movie-desc"
class="card-desc"
>
${tasteDive[i].wTeaser}
</p>
<button class="read-more">
READ MORE
</button>
</div>
</div>
</div>`;
    }
}

//CREATE CARD FUNCTIONS----------------------------------------------------------------------------
//CREATE MOVIE CARDS
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
            ${details}
            </p>
            <button class="read-more">
                READ MORE
            </button>
        </div>
    </div>
    </div>`;

    return movieCard;
}

//CREATE DRINK CARDS

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
//CREATE MOVIE & DRINK CARD PAIR
function cardPairs(i) {
    i = i;
    let paircard = ` ${getTasteDive()}  ${createDrinkCard(i)}`;
    return paircard;
}

//ITERATE THROUGH PAIRS

// function allPairs() {
//     let results = "";
//     for (i = 0; i < movieDesc.length; i++) {
//         results += cardPairs(i);
//     }
//     return results;
// }
//APPEND CARDS TO DOM
function createPairs(i) {
    i = 0;
    let oldCont = document.getElementById("content-container");
    let newCont = document.createElement("div");
    let MainBottomCont = document.getElementById("bottom-main-container");
    newCont.className = "content-container";
    newCont.id = "content-container";

    // <div class="pairing-results-container"> removed because of cardPair creation
    newCont.innerHTML = `<div class="content-container">
    
    
        <h1 class="movie-drink-title">MOVIES AND DRINKS</h1>
        
        <div class="pairing-results-container">
        <div id="pairs-container">
     ${cardPairs()}
        </div>
         
            
          
            

           
            
   
       
    </div>
</div> `;

    MainBottomCont.replaceChild(newCont, oldCont);
}
