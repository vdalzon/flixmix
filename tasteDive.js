//testing url
// tastdive url= https://tastedive.com/api/similar?info=1&type=movie&limit=4&q=movie:matrix&k=361760-Flixmix-JVYDSEIN
class TasteDive {
    constructor() {
        this.access_key = "361760-Flixmix-940QY3AP";
        this.proxyurl = "https://cors-anywhere.herokuapp.com/";
    }

    get(url) {
        return fetch(url, {
            method: "GET",
            headers: [["Content-Type", "application/json"]],
        })
            .then((res) => res.json())
            .then((data) => data.Similar.Results)
            .catch((err) =>
                alert("API is currently unavailable. Please try again later")
            );
    }
}
