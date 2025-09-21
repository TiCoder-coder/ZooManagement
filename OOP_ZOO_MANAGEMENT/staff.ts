import { Enclosure } from "./enclosure";
import { Animal } from "./animal";
import { Food } from "./food";
import { FeedRecord } from "./feedRecord";


// CLASS STAFF ==============================================================================================================================================
export class Staff{
    protected id: string;
    protected name: string;
    public static saveStaffs: Staff[] = [];
    public static recycleStaffs: Staff[] = [];

    constructor(_staffId: string, _staffName: string){
        this.id = _staffId;
        this.name = _staffName;
    }

    public getId(): string { // Function to return id
        return this.id;
    }

    public getName(): string { // Function to return name
        return this.name;
    }

    public setId(newId: string): Boolean { // Function to change the id 
        // Check new id if exist => return false
        let checkIdExist = -1;
        for (let i = 0; i < Staff.saveStaffs.length; i++){
            if (Staff.recycleStaffs[i].getId() === newId){
                checkIdExist = i;
                break;
            }
        }

        if (typeof newId !== 'string' || newId === undefined || checkIdExist !== -1){
            console.log("New id must is STRING, NOT NULL and NOT SAME ID!");
            return false;
        }

        this.id = newId;
        console.log(`Set new id ${newId} was successed!`);
        return true;
    }

    setName(newName: string): Boolean { // Function to change the name

        //Check type of new name 
        if (typeof newName !== 'string' || newName === undefined){
            console.log("New id must is STRING and NOT NULL!");
            return false;
        }
        this.name = newName;
        console.log(`Set new name ${newName} was successed!`);
        return true;
    }


    searchInfoMyself(){ //Function to staff can search information myself if forgot (The reason not search by id => use this => employees can only access their own information)
        let checkIdExist = -1;
        for (let i = 0; i < Staff.saveStaffs.length; i++){
            if (Staff.saveStaffs[i].getId() === this.getId()){
                checkIdExist = i;
                break;
            }
        }
        if (checkIdExist !== -1){
            console.log(`Your infomation - Id: ${this.getId()}, name: ${this.getName()}`)
            return true;
        }
        console.log(`No search have information of staff ${this.getId()}`);
        return false;
    }

    feedAnimal(animalId: string, foodId: string, quantity: number): Boolean { // Function to feed animal 

        // Check animal was existed in the Zoo
        let checkExistAnimal = -1;
        for (let i = 0; i < Animal.infoAnimals.length; i++){
            if (Animal.infoAnimals[i].getIdAnimal() === animalId){
                checkExistAnimal = i;
                break;
            }
        }
        //Check if animal exist, food exist, enough quantity => check = True => can feed
        let check = false;
        for (let j = 0; j < Food.infoFoods.length; j++){
            if (checkExistAnimal !== -1 && Food.infoFoods[j].getIdFood() === foodId && FeedRecord.saveRecords[j].getQuantity() >= quantity){
                check = true;
                FeedRecord.saveRecords[j].setQuantity(FeedRecord.saveRecords[j].getQuantity() - 1); // Id check === true => can feed => decrease quatity
                break;
            }
        }
        if (check === true){
            console.log("Staff can feed to animal!");
            return true;
        }
        console.log("Invalid. Can not feed to animal!");
        return false;

    }



    // CREATE FEED RECORD ===============================================================================================================

    createFeedRecord(feedRecord: FeedRecord){ // Function to create report feed animal

        console.log("============================================ create feed record====================================================")
        
        //Check report by idFeedRecord, if exist => false
        let checkFoodExist = -1;
        for (let i = 0; i < FeedRecord.saveRecords.length; i++){
            if (FeedRecord.saveRecords[i].getIdFeedRecord() === feedRecord.getIdFeedRecord()){
                checkFoodExist = i;
                break;
            }
        }
        if (checkFoodExist !== -1){
            console.log(`The feedRecord ${feedRecord.getIdFeedRecord()} was exist!`);
            return FeedRecord.saveRecords;
        }

        // Check Id Animal if exist => true (beacause if no have animal => can not create report)
        let checkIdAnimalExist = -1;
        for (let j = 0; j < Animal.infoAnimals.length; j++){
            if (Animal.infoAnimals[j].getIdAnimal() === feedRecord.getAnimalIdFeedRecord()){
                checkIdAnimalExist = j;
                break;
            }
        }

        if (checkIdAnimalExist === -1){
        console.log("The id of animal no has in infoAnimal => no create feed record!");
            return FeedRecord.saveRecords;
        }

        //Check Food by id (if exist => true (can feed animal))
        let checkIdFood = -1;
        for(let k = 0; k < Food.infoFoods.length; k++){
            if (Food.infoFoods[k].getIdFood() === feedRecord.getFoodId()){
                checkIdFood = k;
                break;
            }
        }

        // If record exist and type false => not add
        if (checkIdFood === -1 || !feedRecord.ValidateTypeFeedRecord()){
            console.log("The id food to create record not exist");
            return FeedRecord.saveRecords;
        }
        
        FeedRecord.saveRecords.push(feedRecord);
        console.log(`The new feedRecord was created successfully!`);
        return FeedRecord.saveRecords;
    }
    
    // SEARCH INFO FOR ENCLOSURE============================================================================================
    
    searchInfoEnclosure(idToSearch: string){ // Function to search information of enclosure
        console.log("============================================ searching information enclosure============================================");
        let checkInfoEnclusre = -1;
        for (let i = 0; i < Enclosure.infoEnclosures.length; i++){
            if (Enclosure.infoEnclosures[i].getIdEnclosure() === idToSearch){
                checkInfoEnclusre = i;
                console.log(`ID\t\tNAME\t\tAREASIZE\t\tCLIMATE\t\tCAPACITY`)

                console.log(`${Enclosure.infoEnclosures[i].getIdEnclosure()}\t${Enclosure.infoEnclosures[i].getNameEnclosure()}\t${Enclosure.infoEnclosures[i].getAreaSize()}\t\t\t${Enclosure.infoEnclosures[i].getClimate()}\t${Enclosure.infoEnclosures[i].getCapacity()}`);
                return true;
            }
        }
        console.log(`No search have information of enclosure ${idToSearch}`);
        return false;
    }


    // SEARCH ANIMAL ===============================================================================================================
    
    searchInfoAnimal(idAnimalToSearch: string): Boolean { // Function to search the information of animal by id

        // If id exist => print information 
        for (let i = 0; i < Animal.infoAnimals.length; i++){
            if (Animal.infoAnimals[i].getIdAnimal() === idAnimalToSearch){
                console.log(`ID\tNAME\tAGE\tSPECIES\t\tGENDER\tWEIGHT\t\tHEALTH_STATUS\t\tENCLOSURE_ID\t\tCREATE_AT\t\tUPDATE_AT`)
       
                console.log(`${Animal.infoAnimals[i].getIdAnimal()}\t${Animal.infoAnimals[i].getNameAnimal()}\t${Animal.infoAnimals[i].getAgeAnimal()}\t${Animal.infoAnimals[i].getSpeciesAnimal()}\t${Animal.infoAnimals[i].getGenderAnimal()}\t${Animal.infoAnimals[i].getWeightAnimal()}\t\t${Animal.infoAnimals[i].getHealthStatus()}\t\t\t${Animal.infoAnimals[i].getEnclosureId()}\t\t${Animal.infoAnimals[i].getCreateAt()}\t\t${Animal.infoAnimals[i].getUpdateAt()}`);
                return true;
            }
        }

        console.log(`The animal ${idAnimalToSearch} was not exist in infoAnimals!`);
        return false;
    }

    // SEARCH FOOD ===============================================================================================================
    
    searchFood(idToSearch: string){ // Function to search the food
        console.log("============================================ search food============================================")

     for (let i = 0; i < Food.infoFoods.length; i++){
            if (Food.infoFoods[i].getIdFood() === idToSearch){
                console.log(`ID\t\tNAME\t\tTYPE\t\tCALORIES_PER_UNIT`)
                console.log(`${Food.infoFoods[i].getIdFood()}\t${Food.infoFoods[i].getNameFood()}\t\t${Food.infoFoods[i].getTypeFood()}\t\t${Food.infoFoods[i].getCaloriesPerUnit()}`);

                return true;
            }
        }

        console.log(`The food ${idToSearch} was not exist in warehouse!`)
        return false;
    }

    // SEARCH FEED RECORD ===============================================================================================================

    searchFeedRecord(idToSearch: string){ // Function to search feed record
        console.log("============================================ search feed record ============================================")
        
        //Check record exist by id was saved in saveRecord
        let checkFeedExist = -1;
        for (let i = 0; i < FeedRecord.saveRecords.length; i++){
            if (FeedRecord.saveRecords[i].getIdFeedRecord() === idToSearch){
                checkFeedExist = i;
                console.log(`ID\t\tANIMAL_ID\t\tFOOD_ID\t\tQUANTITY\t\tFEED_AT`)
                console.log(`${FeedRecord.saveRecords[i].getAnimalIdFeedRecord()}\t${FeedRecord.saveRecords[i].getAnimalIdFeedRecord()}\t${FeedRecord.saveRecords[i].getFoodId()}\t${FeedRecord.saveRecords[i].getQuantity()}\t${FeedRecord.saveRecords[i].getFeedAt()}`);
                return true;
            }
        }
        console.log(`The food ${idToSearch} was not exist in saveRecords!`);
        return false;
    }
}
