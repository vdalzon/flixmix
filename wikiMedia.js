class WikiMedia {
    constructor() {
        this.imgReq =
            "https://en.wikipedia.org/w/api.php?action=query&prop=pageimages&&pilicense=any&format=json&piprop=original&titles=";

        //do not currently need proxy url, replaced by adding "&origin=*" at the end of the request
        this.proxyurl = "https://cors-anywhere.herokuapp.com/";
    }

    get(url) {
        let data = url;
        let movieCardArray = [];

        let getImg = () => {
            for (let i = 0; i < 4; i++) {
                let movieName = data[i].Name;
                fetch(this.imgReq + movieName + "&origin=*")
                    .then((res) => res.json())
                    .then((img) => {
                        class movieCardInfo {
                            constructor(name, detail, imgUrl) {
                                this.name = name;
                                this.detail = detail;
                                this.imgUrl = imgUrl;
                            }
                        }

                        // img.forEach()
                        let title = img.query.pages;
                        //when forEach is added removed [0] from everything except imgUrl

                        let name = data[i].Name;
                        let detail = data[i].wTeaser;
                        let imgUrl = Object.values(title)[0].original.source;

                        function pushCardInfo() {
                            movieCardArray.push(
                                new movieCardInfo(name, detail, imgUrl)
                            );
                        }
                        pushCardInfo();

                        // return movieCardArray;
                    });
            }
        };
        getImg();

        return movieCardArray;
        // console.log(getImg());
    }
}
