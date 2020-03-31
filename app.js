let movieDetail = document.getElementById("card-movie-desc");

let limitChar = function() {
    movieDetail.innerHTML =
        movieDetail.innerHTML.substring(0, 1200) +
        "...  <a class='read-more' href='#'>READ MORE</a>  ";
};
limitChar();
