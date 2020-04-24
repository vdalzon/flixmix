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
                for (let i = 0; i < 4; i++) {
                    let drinkData = res[i].drinks[0];

                    let drinkName = drinkData.strDrink;
                    let drinkImg = drinkData.strDrinkThumb;
                    let drinkIngr = [
                        drinkData.strIngredient1,
                        drinkData.strIngredient2,
                        drinkData.strIngredient3,
                        drinkData.strIngredient4,
                        drinkData.strIngredient5,
                    ];
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
