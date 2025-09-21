import { Animal } from "./animal";
import { Food } from "./food";


// Class interface of FeedRecord --- use to define operations for class FeedRecord
export interface IFeedRecord{

    getIdFeedRecord(): string;
    getAnimalIdFeedRecord(): string;
    getFoodId(): string;
    getQuantity(): number;
    getFeedAt(): Date;

    setIdFeedRecord(newIdFeedRecord: string): Boolean;
    setAnimalIdRecord(newAnimalIdRecord: string): Boolean;
    setFoodId(newIdFood: string): Boolean;
    setQuantity(newQuantity: number): Boolean;
    setFeedAt(newFeedAt: Date): Boolean;

    ValidateTypeFeedRecord(): Boolean;
    ValidateIdAnimal(): Boolean;
    ValidateIdFood(): Boolean;

    displayFeedRecord(): void;
}


// FEED RECORD ===============================================================================================================
export class FeedRecord implements IFeedRecord{ // Lich su cho an
    private idFeedRecord: string;
    private animalIdFeedRecord: string;
    private foodId: string;
    private quantity: number;
    private feedAt: Date;
    public static saveRecords: FeedRecord[] = [];
    public static recycleFeedRecord: FeedRecord[] = [];

    constructor(_idFeedRecord: string, _animalIdFeedRecord: string, _foodId: string, _quantity: number, _feetAt: Date){
        this.idFeedRecord = _idFeedRecord;
        this.animalIdFeedRecord = _animalIdFeedRecord;
        this.foodId = _foodId;
        this.quantity = _quantity;
        this.feedAt = _feetAt;
    }

    // VALIATE FEED RECORD ===============================================================================================================

        //Vilidate Feed Record
    public ValidateTypeFeedRecord() : Boolean{ // Function to validate the type of attribute in the feed record when initilize        
        // Check type of idFeedRecord
        if (typeof this.idFeedRecord !== 'string' || this.idFeedRecord === undefined){
            throw Error(`IdFeedRecord must is STRING and NOT UNDEFINED!`);
        }

        // Check type of animalIdFeedRecord
        if (typeof this.animalIdFeedRecord !== 'string' || this.animalIdFeedRecord === undefined){
            throw Error(`AnimalIdRecord must is STRING and NOT UNDEFINED!`);
        }

        // Check type of quanity combine with clories must smaller than 300
        if (typeof this.quantity !== 'number' || this.quantity === undefined || this.quantity < 0 || this.quantity > 300){
            throw Error(`Quantity must is NUMBER, NOT UNDEFINED and (LARGER THAN 0, SMALLER THAN 300)!`);
        }

        // Check type of feedAt
        if (this.feedAt === undefined){
            throw Error(`FeedAt must is DATE and NOT UNDEFINED!`)
        }
        console.log("Validate type of FeedRecord successed. No explore error!");
        return true;
    }

        //Validate id animal in feeed record with id animal in class animal
    public ValidateIdAnimal(): Boolean{
        console.log("============================================ Validate Id Animal ============================================")
        for (let i = 0; i < FeedRecord.saveRecords.length; i++){
            for (let j = 0; j < Animal.infoAnimals.length; j++){
                if (this.getAnimalIdFeedRecord() === Animal.infoAnimals[j].getIdAnimal()){
                    console.log("The id animal was true (had in infoAnimals!)");
                    return true;
                }
            }
        }
        console.log("The id animal no search have (no had in infoAnimals!)");
        return false;
    }

        // Validate id food in record had/had not in c;ass Food
    public ValidateIdFood(): Boolean{
        let checkIdFoodExist = -1;
        for (let i = 0; i < Food.infoFoods.length; i++){
            if (Food.infoFoods[i].getIdFood() === this.getFoodId()){
                console.log("The id food has in class food!");
                return true;
            }
        }
        return false;
    }
    // GET ===============================================================================================================

    public getIdFeedRecord(): string{ // Function to return id of feedRecord
        return this.idFeedRecord;
    }

    public getAnimalIdFeedRecord(): string{ // Function to return id of animal was eatten 
        return this.animalIdFeedRecord;
    }

    public getFoodId(): string{ // Function to return id of food of animal was eatten
        return this.foodId;
    }

    public getQuantity(): number{ // Function to return quantity of feedRecord
        return this.quantity;
    }

    public getFeedAt(): Date{ // Function to return date of create feedRecord
        return this.feedAt;
    }

    // SET ===============================================================================================================
    public setIdFeedRecord(newIdFeedRecord: string): Boolean{ // Function to change the value id of feedRecord

        // New if must satisfy 3 codination('string' --- not undefined --- khong duoc trung voi nhung id da co)
        
        //Check id exist
        let checkExistId = -1;
        for (let i = 0; i < FeedRecord.saveRecords.length; i++){
            if (FeedRecord.saveRecords[i].getIdFeedRecord() === newIdFeedRecord){
                checkExistId = i;
                break;
            }
        }
        if (typeof newIdFeedRecord !== 'string' || newIdFeedRecord === undefined || checkExistId !== -1){
            console.log(`New idFeedRecord must is STRING, NOT UNDEFINED and NOT SAME ID Feedrecord in the past!`);
            return false;
        }
        this.idFeedRecord = newIdFeedRecord;
        console.log("Set new idFeedRecord was successed!");
        return true;
    }

    public setAnimalIdRecord(newAnimalIdRecord: string): Boolean{ // Function to change the animal id was eatten in the feedRecord

        // New id animal must satisfy 3 codination ('string' --- not undefined --- have in the animal)
        if (typeof newAnimalIdRecord !== 'string' || newAnimalIdRecord === undefined || this.ValidateIdAnimal() === false){
            console.log(`New AnimalIdRecord must is STRING, NOT UNDEFINED and MUST HAVE IN THE ZOO!`);
            return false;
        }
        this.animalIdFeedRecord = newAnimalIdRecord;
        console.log("Set new idAnimalFeedRecord was successed!");
        return true;
    }

    public setFoodId(newFoodId: string): Boolean{ // Function to change the food id, animal was eatten in the feedRecord

    // New id food must satisfy 3 codination ('string' --- not undefined --- have in the food)
    if (typeof newFoodId !== 'string' || newFoodId === undefined || this.ValidateIdFood() === false){
        console.log(`New food id ${newFoodId} must is STRING, NOT UNDIFINED and MUST HAVE IN THE FOODS!`);
        return false;
    }
    this.foodId = newFoodId;
    console.log("Set new FoodId was successed!");
    return true;
    }

    public setQuantity(newQuantity: number): Boolean{ // Function to change the quantity in the feedRecord
        if (typeof newQuantity !== 'number' || newQuantity === undefined || newQuantity < 0){
            console.log(`New quantity must is NUMBER, NOT UNDEFINED and LARGER THAN 0!`);
            return false;
        }
        this.quantity = newQuantity;
        console.log("Set new idQuantity was successed!");
        return true;
    }

    public setFeedAt(newFeedAt: Date): Boolean{ // Function to change the date feedAt in the feedRecord
        if (newFeedAt === undefined){
            console.log(`New feedAt must is DATE and NOT UNDEFINED!`);
            return false;
        }
        this.feedAt = newFeedAt;
        console.log("Set new feedAt was successed!");
        return true;
    }

    

    //DISPLAY FEED RECORD ===============================================================================================================
    public displayFeedRecord(): void{ // Funcition to display full feed record in the Zoo
        console.log("============================================FULL FEED RECORED ============================================\n");
        console.log(`ID\t\tANIMAL_ID\t\tFOOD_ID\t\tQUANTITY\t\tFEED_AT`)
        for (let i = 0; i < FeedRecord.saveRecords.length; i++){
            console.log(`${FeedRecord.saveRecords[i].getIdFeedRecord()}\t\t${FeedRecord.saveRecords[i].getAnimalIdFeedRecord()}\t\t\t${FeedRecord.saveRecords[i].getFoodId()}\t${FeedRecord.saveRecords[i].getQuantity()}\t\t\t\t${FeedRecord.saveRecords[i].getFeedAt()}`);
        }
        console.log("---------------------------------------end--------------------------------------------------")
    }

}