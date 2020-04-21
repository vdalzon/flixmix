//LIVE TASTEDIVE CLASS
// class TasteDive {
//     constructor() {
//         this.access_key = "361760-Flixmix-JVYDSEIN";
//         this.proxyurl = "https://cors-anywhere.herokuapp.com/";
//     }

//     get(url) {
//         return fetch(this.proxyurl + url)
//             .then((res) => res.json())
//             .then((data) => data.Similar)
//             .catch((err) => err);
//     }
// }

//FAKE TASTEDIVE CLASS

class TasteDive {
    constructor() {
        this.access_key = "361760-Flixmix-940QY3AP";
        this.proxyurl = "https://cors-anywhere.herokuapp.com/";
    }

    get(url) {
        return fetch(url)
            .then((res) => res.json())
            .then((data) => data.Similar.Results)
            .catch((err) => err);
    }
}
