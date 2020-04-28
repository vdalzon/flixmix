class WikiMedia {
    constructor() {
        this.imgReq =
            "https://en.wikipedia.org/w/api.php?action=query&prop=pageimages&&pilicense=any&format=json&piprop=original&titles=";

        //do not currently need proxy url, replaced by adding "&origin=*" at the end of the request
        this.proxyurl = "https://cors-anywhere.herokuapp.com/";
    }

    get(url) {
        let data = url.sort((a, b) => (a.Name > b.Name ? 1 : -1));

        let parseMovieUrl = () => {
            let nameOnly = "";
            for (let i = 0; i < data.length; i++) {
                nameOnly += data[i].wUrl.split("/")[4] + "|";
            }

            return nameOnly.replace(/\|$/, "");
        };
        let movieName = parseMovieUrl();

        let getImg = () => {
            // fetch(this.imgReq + movieName + "&origin=*")
            return fetch(this.imgReq + movieName + "&origin=*")
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    let movieTitleArray = [];
                    let title = data.query.pages;
                    for (let i = 0; i < 4; i++) {
                        let name = Object.values(title)[i].title;
                        let img = checkImg();
                        function checkImg() {
                            if (!("original" in Object.values(title)[i])) {
                                let img =
                                    "./img/food-snack-popcorn-movie-theater-33129.jpg";
                                return img;
                            } else {
                                let img = Object.values(title)[i].original
                                    .source;
                                return img;
                            }
                        }

                        movieTitleArray.push({ Name: name, Url: img });
                    }

                    let results = movieTitleArray.sort((a, b) =>
                        a.Name > b.Name ? 1 : -1
                    );

                    return results;
                })
                .then((img) => {
                    class movieCardInfo {
                        constructor(name, detail, imgUrl) {
                            this.name = name;
                            this.detail = detail;
                            this.imgUrl = imgUrl;
                        }
                    }

                    let movieCardArray = [];
                    // img.forEach()

                    //when forEach is added removed [0] from everything except imgUrl
                    for (let i = 0; i < data.length; i++) {
                        let name = data[i].Name;
                        let detail = data[i].wTeaser;
                        let imgUrl = img[i].Url;

                        function pushCardInfo() {
                            movieCardArray.push(
                                new movieCardInfo(name, detail, imgUrl)
                            );
                        }

                        pushCardInfo();
                    }

                    return movieCardArray;
                });
        };

        return getImg();

        // console.log(getImg());
    }
}
