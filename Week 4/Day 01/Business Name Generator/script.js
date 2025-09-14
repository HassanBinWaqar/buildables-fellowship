//Create a Business Name Generator by combining adjectives and shop names witout using array
/*function generateBusinessName() {
    const adjectives = "Amazing,Brilliant,Clever,Dynamic,Excellent,Fabulous,Great,Happy,Innovative,Jovial,Kind,Lively,Magnificent,Novel,Outstanding,Perfect,Quick,Remarkable,Splendid,Terrific,Unique,Vibrant,Wondrous,Xtraordinary,Yummy,Zesty";
    const shopNames = "Bakery,Cafe,Deli,Eatery,Farmers Market,Grocery Store,Hardware Store,Ice Cream Parlor,Jewelers,Kiosk,Laundromat,Mall,Nursery,Optical Shop,Pizza Place,Quesadilla Stand,Retail Store,Spa,Toy Store,Upholstery Shop,Videogame Store,Wine Shop,Xerox Center,Yarn Shop,Zoo";
//why use split?
    // The split method is used to convert the string of adjectives and shop names into arrays
    // so that we can easily access individual elements and randomly select one from each category.
    const adjectivesArray = adjectives.split(",");
    const shopNamesArray = shopNames.split(",");

    const randomAdjective = adjectivesArray[Math.floor(Math.random() * adjectivesArray.length)];
    const randomShopName = shopNamesArray[Math.floor(Math.random() * shopNamesArray.length)];

    return `${randomAdjective} ${randomShopName}`;
}   
generateBusinessName(); // Call the function to generate a business name
console.log(generateBusinessName()); // Output the generated business name to the console
*/

//Solving by myslef
function generateBusinessNameWithoutArrays() {
    let adjectives = "Amazing/Code/Hub";
    let shopNames = "Bakery/Cafe/Store";
    let randomAdjectives = adjectives.split("/");
    console.log(randomAdjectives);
    let randomShopNames = shopNames.split("/");
    console.log(randomShopNames);
    //math.floor() is used to round down the result of the random number generation
    //math.random() generates a random number between 0 and 1, which is then
    //multiplied by the length of the array to get a random index within the bounds of the array.
    //The random index is then used to select a random adjective and shop name from the respective
    let randomAdjective = randomAdjectives[Math.floor(Math.random()* randomAdjectives.length)];
    //print the number to the console
    console.log(randomAdjective);
    let randomShopName = randomShopNames[Math.floor(Math.random()* randomShopNames.length)];
    console.log(randomShopName);

    return `${randomAdjective} ${randomShopName}`;
    // The function returns a string that combines the randomly selected adjective and shop name.
}
generateBusinessNameWithoutArrays(); // Call the function to generate a business name without arrays
console.log(generateBusinessNameWithoutArrays()); // Output the generated business name to the console