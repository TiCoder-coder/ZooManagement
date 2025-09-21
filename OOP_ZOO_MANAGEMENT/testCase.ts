import { Enclosure } from "./enclosure";
import { Animal } from "./animal";
import { Food } from "./food";
import { FeedRecord } from "./feedRecord";
import { Staff } from "./staff";
import { Manager } from "./manager";
import { Gender } from "./enums";
import { HealthStatus } from "./enums";
import { Climate } from "./enums";
import { TypeFood } from "./enums";


// TEST CLASS MANAGER ===================================================================================================

//Create manager --- true
const manager = new Manager("Manager", "manager123", "NguyenVanA");
manager.addNewManager(manager); // Add new manager --- true

// TEST CLASS STAFF ===================================================================================================

//Create staff1 --- true
const staff1 = new Staff("staff123", "LeVanTeo");
manager.addNewStaff(staff1); // Add new staff --- true

//Create staff 2 --- false
const staff2 = new Staff("staff123", "LeVanTi");
manager.addNewStaff(staff2); // Add new staff --- false (because the id was same)

//Create staff 3 --- true
const staff3 = new Staff ("staff345", "ToThiA");
manager.addNewStaff(staff3); // Add new staff --- true


// TEST CLASS ENCLOSURE ===================================================================================================
console.log("\n");
console.log("===================================RESULT TEST CLASS ENCLOSURE===============================================")
console.log("\n");

// Create enclosure 1 -- true
const enclosure1 = new Enclosure("1234abc", "Stool", "2m^2", Climate.Aquatic, 320);
manager.addEnclosure(enclosure1); // Add new enclosure --- true
enclosure1.Validate();// True
enclosure1.ValidateEnclosure(); // True

// Create enclosure 2 -- true
const enclosure2 = new Enclosure("12345abc", "Wood enclosure", "4m^2", Climate.Desert, 100);
manager.addEnclosure(enclosure2); // Add new enclosure --- true
enclosure2.Validate(); // False (because capacity < 0)
enclosure2.ValidateEnclosure(); // True (different id)

// Create enclosure 3 --- fasle (because same id)
const enclosure3 = new Enclosure("1234abc", "Soil enclosure", "5m^2", Climate.Temperate, 10);
manager.addEnclosure(enclosure3); // Fasle
enclosure3.Validate(); // True (because full type of atribute is true)
enclosure3.ValidateEnclosure(); // False (because same id)

//Create enclosure 4 --- true
const enclosure4 = new Enclosure("125534abc", "Plant enclosure", "10m^2", Climate.Tropical, 100);
manager.addEnclosure(enclosure4);// True
// Test validate
enclosure4.Validate(); // True

// Test ValidateEnclosure
enclosure4.ValidateEnclosure(); // True

// Test get
enclosure4.getIdEnclosure(); // True
enclosure2.getNameEnclosure(); // True
enclosure4.getClimate(); // True
enclosure2.getAreaSize(); // True
enclosure4.getCapacity(); // True

// Test set
enclosure2.setIdEnclosure("1234abc"); // False (because same id)
enclosure2.setNameEnclosure("Life enclosure"); // True
enclosure2.setAreaSize("4m^2"); // True
enclosure2.setClimate(Climate.Temperate); // True
enclosure2.setCapacity(123); // True


//Test delete
manager.deleteEnclosure("125534abc");

//Test display
enclosure1.displayinfoEnclosure(); // True
enclosure2.displayinfoEnclosure(); // True
enclosure4.displayinfoEnclosure();// False (because remove above)


// TEST CLASS ANIMAL============================================================================================================
console.log(`\n`);
console.log(`=======================================RESULT TEST CLASS ANIMAL==============================================`)
console.log("\n");

// Test constructer

//Create animal 1 --- true
const animal1 = new Animal('123ab', 'Lion', 1, "eat meat", Gender.Female, 100, HealthStatus.Healthy, "1234abc", new Date(2025, 12, 20), new Date(2026, 12, 20));
manager.addAnimal(animal1); // True
animal1.displayInfoAnimal(); // True

//Create animal 2 -- true
const animal2 = new Animal('123ab', 'Lion', 1, "animal eat meat", Gender.Male, 100, HealthStatus.Quarantined, "1234abc", new Date(2025, 12, 20), new Date(2026, 12, 20));
manager.addAnimal(animal2); // True
animal2.displayInfoAnimal(); // True

//Create animal 3 -- false (beacause no have id enclosure "1232288884abc")
const animal3 = new Animal('121ab', 'Black Bear', 10, "animal eat meat", Gender.Female, 100, HealthStatus.Sick, "1232288884abc", new Date(2025, 1, 20), new Date(2026, 2, 2));
manager.addAnimal(animal3); // False

//Create animal 4 -- false (beacause no have id enclosure "125588834abc")
const animal4 = new Animal('1222ab', 'Black Bear', 10, "animal eat meat", Gender.Male, 100, HealthStatus.Healthy, "125588834abc", new Date(2025, 3, 20), new Date(2026, 4, 2));
manager.addAnimal(animal4); // False
animal4.displayInfoAnimal(); // False

// Test validate
animal4.Validate(); // True (beacuse all types of object were true)
animal2.Validate(); // True (beacuse all types of object were true)
animal3.Validate(); // True (beacuse all types of object were true)

// Test get
animal4.getIdAnimal();
animal2.getNameAnimal();
animal3.getAgeAnimal();
animal2.getSpeciesAnimal();
animal3.getGenderAnimal();
animal3.getWeightAnimal();
animal3.getHealthStatus();
animal3.getCreateAt();
animal4.getUpdateAt();


//Test set
animal4.setIdAnimal("123ab"); // False (beacuse same id)
animal4.setNameAnimal("Shark"); // True
animal2.setAgeAnimal(12); //True
animal2.setSpeciesAnimal("animal eat human"); //True
animal4.setGenderAnimal(Gender.Female); // True
animal4.setWeightAnimal(12000); //True
animal3.setHealthStatus(HealthStatus.Sick); // True

animal3.setCreateAt(new Date(2028, 12, 12)); // False (because larger than createAt)
animal4.setUpdateAt(new Date(2026, 12, 3)); // True

//Test display
animal1.displayInfoAnimal(); //True



//TEST CLASS FOOD ==========================================================================================================
console.log("\n");
console.log("=====================================RESULT TEST CLASS FOOD===================================================")
console.log("\n");

// Create food 1 - true
const food1 = new Food("doan1123", "Pog", TypeFood.Insect, 100); // True
manager.addFood(food1); // True
//Test validate
food1.Validate(); // True

// Create food2 - Fasle
const food2 = new Food("doan1123", "Fish", TypeFood.Fish, 140); // False (because same id)
manager.addFood(food2); // False
food2.Validate(); // True (because type of all attribute were true)

// Create food3 - True
const food3 = new Food("doan3345", "Plant", TypeFood.Meat, 110); // True
manager.addFood(food3); // True
food3.Validate(); // True

// Create food4 --- True
const food4 = new Food("doan7789", "Pog", TypeFood.Plant, 40); // True
manager.addFood(food4); //True
food4.Validate(); // True

//Test search
manager.searchFood("doan1123"); // True

//Test get
food2.getIdFood();
food2.getNameFood();
food2.getTypeFood();
food2.getCaloriesPerUnit();

//Test set
food2.setIdFood("789abc") // True
food2.setNameFood("Cow meat"); // True
food2.setTypeFood(TypeFood.Meat); // True
food2.setCaloriPerUnit(40); // True

//Test display
food1.displayInfoFood(); // True

//TEST CLASS FEEDRECORD=====================================================================================================
console.log("\n");
console.log("========================================RESULT TEST CLASS FEEDRECORD=========================================");
console.log("\n");

//Test constructor

//Create feedRecord1 --- True
const feedRecord1 = new FeedRecord("rec1", "123ab", "doan1123", 50, new Date(2025, 3, 12)); // True
staff1.createFeedRecord(feedRecord1); // True
feedRecord1.ValidateTypeFeedRecord(); // True
feedRecord1.ValidateIdAnimal(); // True
feedRecord1.displayFeedRecord(); // True

// Create feedRecord2 --- False
const feedRecord2 = new FeedRecord("1234abcdefgh", "100ab", "doan1123", 123, new Date(2025, 1, 12));// False (no have id animal 100ab)
staff1.createFeedRecord(feedRecord2); // False
feedRecord2.ValidateTypeFeedRecord(); // True 
feedRecord2.ValidateIdAnimal(); // False



//Test get
feedRecord1.getIdFeedRecord(); // True 
feedRecord1.getAnimalIdFeedRecord(); // True 
feedRecord1.getQuantity(); // True 
feedRecord1.getFeedAt(); // True 

//Test set
feedRecord2.setIdFeedRecord("qwertyuio");  // True 
feedRecord2.setAnimalIdRecord("121ab");  // True 
feedRecord2.setQuantity(12); // True 
feedRecord2.setFeedAt(new Date(2023, 10, 10)); // True 

//Test display
feedRecord1.displayFeedRecord(); // True 

// Test delete record
manager.deleteFeedRecord("rec1");
feedRecord1.displayFeedRecord(); // No print informaton (beacause feedRecord empty)


