class CockTail {
    constructor() {
        this.drinkReq =
            "https://www.thecocktaildb.com/api/json/v1/1/random.php";
    }

    get() {
        let drinkCardArray = [];
        let getDrinks = () => {
            Promise.all([
                fetch(this.drinkReq),
                fetch(this.drinkReq),
                fetch(this.drinkReq),
                fetch(this.drinkReq),
            ])
                .then((res) => {
                    console.log(res);
                    return res.map((resArray) => {
                        return resArray.json();
                    });
                })
                .then((res) => {
                    class drinkCardInfo {
                        constructor(name, detail, imgUrl) {
                            this.name = name;
                            this.detail = detail;
                            this.imgUrl = imgUrl;
                        }
                    }
                    for (let i = 0; i < 4; i++) {
                        res[i].then((res) => {
                            let drinkObj = res.drinks[0];
                            let drinkName = drinkObj.strDrink;
                            let drinkImg = drinkObj.strDrinkThumb;
                            let drinkIngr = [
                                drinkObj.strIngredient1,
                                drinkObj.strIngredient2,
                                drinkObj.strIngredient3,
                                drinkObj.strIngredient4,
                                drinkObj.strIngredient5,
                            ];
                            // let drinkIngr = drinkObj.strIngredient1;
                            // let drinkIngr = checkIngr();

                            // function checkIngr() {
                            //     for (let i = 1; i <= 8; i++) {
                            //         let ingrArray = [];

                            //         if (drinkObj.drinktest !== null) {
                            //             ingrArray.push(
                            //                 drinkObj.strIngredient + [i]
                            //             );
                            //         }
                            //         console.log(ingrArray);
                            //         return ingrArray;
                            //     }
                            // }
                            function pushCardInfo() {
                                drinkCardArray.push(
                                    new drinkCardInfo(
                                        drinkName,
                                        drinkIngr,
                                        drinkImg
                                    )
                                );
                            }
                            pushCardInfo();
                        });
                    }

                    // console.log(drinks.drinks[0].strDrink);
                });
        };
        getDrinks();
        return drinkCardArray;
    }
}
