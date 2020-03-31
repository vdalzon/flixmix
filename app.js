let movieDetail = document.querySelectorAll(".card-movie-desc");
let drinkDetail = document.getElementById("card-drink-desc");
let limitChar = function() {
    movieDetail.innerHTML =
        movieDetail.innerHTML.substring(0, 1200) +
        "...  <a class='read-more' href='#'>READ MORE</a>  ";

    drinkDetail.innerHTML =
        drinkDetail.innerHTML.substring(0, 1200) +
        "...  <a class='read-more drink-detail-shift' href='#'>READ MORE</a>  ";
};
limitChar();
