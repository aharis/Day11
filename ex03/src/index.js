// Create a myPetsArray array here

var myPetsArray = ["Dog", "Cat"];

// End of my petsArray array

function myArrayFunction(myPets) {

    var myNewPets = [...myPets];

    // only change code below this line

    myNewPets.push("Bird", "Fish");
    
    firstPet = myNewPets[0];

    lastPet = myNewPets[3];

    myNewPets.unshift("Lion");

     myNewPets.splice(1,1,);    
     
     myNewPets.pop();

    return myNewPets;

    // Only change code above this line
}

console.log(myArrayFunction(myPetsArray));

module.exports = myArrayFunction;