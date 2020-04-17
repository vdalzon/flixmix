class TasteDive {
    constructor() {
        this.access_key = "361760-Flixmix-940QY3AP";
        this.proxyurl = "https://cors-anywhere.herokuapp.com/";
    }

    get(url) {
        return new Promise((resolve, reject) => {
            fetch(this.proxyurl + url)
                .then((res) => res.json())
                .then((data) => resolve(data.Similar.Results))
                .catch((err) => reject(err));
        });
    }
}
