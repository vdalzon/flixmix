class CockTail {
    constructor() {
        this.drinkReq =
            "https://www.thecocktaildb.com/api/json/v1/1/random.php";
    }

    get() {
        let getDrinks = () => {
            return Promise.all([
                fetch(this.drinkReq).then((res) => res.json()),
                fetch(this.drinkReq).then((res) => res.json()),
                fetch(this.drinkReq).then((res) => res.json()),
                fetch(this.drinkReq).then((res) => res.json()),
            ]).then((res) => {
                class drinkCardInfo {
                    constructor(name, ingr, img) {
                        (this.name = name),
                            (this.ingr = ingr),
                            (this.img = img);
                    }
                }

                let drinks = [];
                for (let i = 0; i < res.length; i++) {
                    let drinkData = res[i].drinks[0];

                    let drinkName = drinkData.strDrink;
                    let drinkImg = drinkData.strDrinkThumb;
                    let drinkIngrList = [
                        drinkData.strIngredient1,
                        drinkData.strIngredient2,
                        drinkData.strIngredient3,
                        drinkData.strIngredient4,
                        drinkData.strIngredient5,
                    ];
                    let drinkIngrAll = drinkIngrList.filter(
                        (drink) => (drink != null) | ""
                    );
                    let drinkIngrMost = drinkIngrAll.map((drink) => {
                        let drinks = `<li>${drink}</li>`;
                        return drinks;
                    });
                    let drinkIngr = drinkIngrMost.join(" ");

                    // console.log(drinkIngr);
                    function pushCardInfo() {
                        drinks.push(
                            new drinkCardInfo(drinkName, drinkIngr, drinkImg)
                        );
                    }
                    pushCardInfo();
                }
                return drinks;
            });
        };
        return getDrinks();
    }
}
