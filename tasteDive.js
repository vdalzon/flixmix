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
// tastdive url= https://tastedive.com/api/similar?info=1&type=movie&limit=4&q=movie:matrix&k=361760-Flixmix-JVYDSEIN
class TasteDive {
    constructor() {
        this.access_key = "361760-Flixmix-940QY3AP";
        this.proxyurl = "https://cors-anywhere.herokuapp.com/";
    }

    get(url) {
        return fetch(url)
            .then((res) => res.json())
            .then((data) => data.Similar.Results)
            .catch((err) =>
                alert("API is currently unavailable. Please try again later")
            );
    }
}
