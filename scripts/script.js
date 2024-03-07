document.addEventListener("DOMContentLoaded", function() {
    // Define an array to shelter your pets
var petShelter = [];

// Function to add a pet to the shelter - needs to have a param to add a name, type of animal, and age
function addPet(petName, petBreed, petAge) {
  let pet = {
    name: petName,
    breed: petBreed,
    age: petAge,
  };
  petShelter.push(pet);
  console.log(petShelter);
}

// Function to display pets in the shelter
function displayPets() {
  let petList = document.getElementById("pet-list");
  petList.innerHTML = ""; // Clear the previous pet list

  // Loop through each pet in the shelter and create a list item for each
  for (let i = 0; i < petShelter.length; i++) {
    let pet = petShelter[i];
    let petItem = document.createElement(`li`);
    petItem.textContent = `${pet.name}:${pet.breed}:${pet.age}`;
    petList.appendChild(petItem); //will assist with adding each pet item to be shown in the list on the browser
  }
}

// Add some sample pets to the shelter
addPet("Fido", "Dog", 3); //example
addPet("Syvia", "Cat", 7);
addPet("Rog", "Hamster", 6);
addPet("Andi", "Dog", 2);
addPet("Pugo", "Dog", 5);

// Display the pets in the shelter
displayPets();

    //STRETCH GOALS:
    // Function to check if the pet shelter has animals that need homes (based on how many animals are in the shelter)
    if  (pets=0){
      return "there are no pets"
    }
    else if (pets<=3){
      return "there are a few pets"
    }
    else {
      "there are many animals"
    }

   
   
  
  
    // Check if the pet shelter has animals that need homes by calling the previous function
    var i= 0
    if (i>0) {
      console.log (displayPets);
    } else {
      console.log ("No animals to display for adoption")
    }
  
    // Function to calculate the average age of pets in the shelter
   
  
    // Calculate the average age of pets in the shelter by calling the previous function



  });
  