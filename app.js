let movieDetail = document.getElementById("card-movie-desc");

let movieImg = document.getElementById("movie-image");

let drinkDetail = document.getElementById("card-drink-desc");

let drinkImg = document.getElementById("drink-image");

let movieImage = [
    `https://upload.wikimedia.org/wikipedia/en/thumb/f/ff/MI_%E2%80%93_Fallout.jpg/400px-MI_%E2%80%93_Fallout.jpg`,
    `https://upload.wikimedia.org/wikipedia/en/thumb/c/c1/The_Matrix_Poster.jpg/400px-The_Matrix_Poster.jpg`,
    `https://upload.wikimedia.org/wikipedia/en/thumb/8/8a/Dark_Knight.jpg/400px-Dark_Knight.jpg`,
    `https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/Star_Wars_The_Force_Awakens_Theatrical_Poster.jpg/136px-Star_Wars_The_Force_Awakens_Theatrical_Poster.jpg`,
];

let movieDesc = [
    `Mission: Impossible – Fallout is a 2018 American action spy film written, produced, and directed by Christopher McQuarrie. It is the sixth installment in the Mission: Impossible film series, and the second film to be directed by McQuarrie following the 2015 film Rogue Nation, making him the first director to direct more than one film in the franchise. The cast includes Tom Cruise, Ving Rhames, Simon Pegg, Rebecca Ferguson, Sean Harris, Michelle Monaghan, and Alec Baldwin, all of whom reprise their roles from the previous films, along with Henry Cavill, Vanessa Kirby, and Angela Bassett, who join the franchise. In the film, Ethan Hunt and his team must track down missing plutonium while being monitored by a CIA agent after a mission goes wrong.`,
    `The Matrix is a 1999 science fiction action film written and directed by the Wachowskis. It stars Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss, Hugo Weaving, and Joe Pantoliano and is the first installment in the Matrix franchise. It depicts a dystopian future in which humanity is unknowingly trapped inside a simulated reality, the Matrix, created by intelligent machines to distract humans while using their bodies as an energy source. When computer programmer Thomas Anderson, under the hacker alias "Neo", uncovers the truth, he "is drawn into a rebellion against the machines" along with other people who have been freed from the Matrix
    `,
    `The Dark Knight is a 2008 superhero film directed, co-produced, and co-written by Christopher Nolan. Based on the DC Comics character Batman, the film is the second installment of Nolan's The Dark Knight Trilogy and a sequel to 2005's Batman Begins, starring Christian Bale and supported by Michael Caine, Heath Ledger, Gary Oldman, Aaron Eckhart, Maggie Gyllenhaal, and Morgan Freeman. In the film, Bruce Wayne / Batman (Bale), Police Lieutenant James Gordon (Oldman) and District Attorney Harvey Dent (Eckhart) form an alliance to dismantle organized crime in Gotham City, but are menaced by an anarchistic mastermind known as the Joker (Ledger), who seeks to undermine Batman's influence and turn the city to chaos.The Dark Knight is a 2008 superhero film directed, co-produced, and co-written by Christopher Nolan. Based on the DC Comics character Batman, the film is the second installment of Nolan's The Dark Knight Trilogy and a sequel to 2005's Batman Begins, starring Christian Bale and supported by Michael Caine, Heath Ledger, Gary Oldman, Aaron Eckhart, Maggie Gyllenhaal, and Morgan Freeman. In the film, Bruce Wayne / Batman (Bale), Police Lieutenant James Gordon (Oldman) and District Attorney Harvey Dent (Eckhart) form an alliance to dismantle organized crime in Gotham City, but are menaced by an anarchistic mastermind known as the Joker (Ledger), who seeks to undermine Batman's influence and turn the city to chaos.`,
    `Star Wars: The Force Awakens (also known as Star Wars: Episode VII – The Force Awakens) is a 2015 American space opera film produced, co-written and directed by J. J. Abrams. It is the first installment in the Star Wars sequel trilogy, following the story of Return of the Jedi (1983), and is the seventh episode of the nine-part "Skywalker saga". It was produced by Lucasfilm and Abrams's production company Bad Robot Productions, and was distributed by Walt Disney Studios Motion Pictures. The film's ensemble cast includes Harrison Ford, Mark Hamill, Carrie Fisher, Adam Driver, Daisy Ridley, John Boyega, Oscar Isaac, Lupita Nyong'o, Andy Serkis, Domhnall Gleeson, Anthony Daniels, Peter Mayhew, and Max von Sydow. Set 30 years after Return of the Jedi, The Force Awakens follows Rey, Finn, Poe Dameron, and Han Solo's search for Luke Skywalker and their fight in the Resistance, led by General Leia Organa and veterans of the Rebel Alliance, against Kylo Ren and the First Order, a successor to the Galactic Empire.`,
];

let drinkImage = [
    `https://www.thecocktaildb.com/images/media/drink/ec2jtz1504350429.jpg`,
];

let drinkIngredient = [
    [
        `<span>1. Sweet Vermouth </span><span>2. Bourbon </span><span>3. Angostura </span><span>1. Sweet Vermouth </span><span>2. Bourbon </span><span>3. Angostura </span><span>1. Sweet Vermouth </span><span>2. Bourbon </span><span>3. Angostura </span>`,
    ],
];
// movieDetail.innerHTML = trunText(movieDesc[2]);

movieImg.src = movieImage[0];
movieDetail.innerHTML = movieDesc[0];

drinkImg.src = drinkImage[0];
drinkDetail.innerHTML = drinkIngredient[0];
