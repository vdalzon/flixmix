class WikiMedia {
    constructor() {
        this.imgReq =
            "https://en.wikipedia.org/w/api.php?action=query&prop=pageimages&&pilicense=any&format=json&piprop=original&titles=";
        this.proxyurl = "https://cors-anywhere.herokuapp.com/";
    }
    //live get request.
    get(url) {
        let data = url;
        let parseMovieUrl = () => {
            //WHEN IT IS TIME TO USE THE FOREACH REMOVE THE [0] AND JUST DO .
            let nameOnly = data[3].wUrl.split("/")[4];
            return nameOnly;
        };

        let movieName = parseMovieUrl();
        // console.log(movieName());

        fetch(this.proxyurl + this.imgReq + movieName)
            .then((res) => res.json())
            .then((img) => console.log(img));
    }

    //test get request
    // get(url) {
    //     let data = url;
    //     let movieName = () => {
    //         return data.wUrl.split("/")[4];
    //     };
    //     fetch("wikiMedia.json")
    //         .then((res) => res.json())
    //         .then((img) => console.log(img));
    // }
}
