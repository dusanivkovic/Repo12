// Only change code beloew this line
var myPetsArray = [
    {
        animalType: "Dog",
        name: "Pujdo"
    },
    {
        animalType: "Cat",
        name: "Maca"
    },
    {
        animalType: "Bird",
        name: "Tweety"
    }
];
function myPetsFunction(pets) {
    return myPetsArray[pets].name;
};
// Only change code above this line
console.log(myPetsFunction(1));

module.exportS = myPetsFunction;
module.exportS.myPets = myPetsArray;