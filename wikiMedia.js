class WikiMedia {
    constructor() {
        this.imgReq =
            "https://en.wikipedia.org/w/api.php?action=query&prop=pageimages&&pilicense=any&format=json&piprop=original&titles=";

        //do not currently need proxy url, replaced by adding "&origin=*" at the end of the request
        this.proxyurl = "https://cors-anywhere.herokuapp.com/";
    }

    get(url) {
        let data = url;
        let movieName = data[0].Name;

        // let parseMovieUrl = () => {
        //     //WHEN IT IS TIME TO USE THE FOREACH REMOVE THE [0] AND JUST DO .
        //     let nameOnly = data[3].wUrl.split("/")[4];
        //     return nameOnly;
        // };

        // let movieName = parseMovieUrl();
        // console.log(movieName());

        return fetch(this.imgReq + movieName + "&origin=*")
            .then((res) => res.json())
            .then((img) => {
                class movieCardInfo {
                    constructor(name, detail, imgUrl) {
                        this.name = name;
                        this.detail = detail;
                        this.imgUrl = imgUrl;
                    }
                }
                let movieCardArray = [];

                let title = img.query.pages;
                //when forEach is added removed [0] from everything except imgUrl
                let name = data[0].Name;
                let detail = data[0].wTeaser;
                let imgUrl = Object.values(title)[0].original.source;
                function pushCardInfo() {
                    movieCardArray.push(
                        new movieCardInfo(name, detail, imgUrl)
                    );
                }
                pushCardInfo();
                console.log(movieCardArray);

                // console.log(test);
                return imgUrl;
            });
    }
}
