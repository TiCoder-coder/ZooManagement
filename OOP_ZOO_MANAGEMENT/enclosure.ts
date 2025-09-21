import { Climate } from "./enums";
import { Animal } from "./animal";


// Class interface of Enclosure --- use to define operations for class Enclosure
// The reason of attribute should not define in interface is: interface default public, class default private => conflict or not define one attribute is private
export interface IEnclosure{
    getIdEnclosure(): string;
    getNameEnclosure(): string;
    getAreaSize(): string;
    getClimate(): Climate;
    getCapacity(): number;

    setIdEnclosure(newNameEnclosure: string): Boolean;
    setNameEnclosure(newNameEnclosure: string): Boolean;
    setAreaSize(newAreaSize: string): Boolean;
    setClimate(newClimate: Climate): Boolean;
    setCapacity(newCapacity: number): Boolean;
    
    Validate(): Boolean;
    ValidateEnclosure(): Boolean;
    displayinfoEnclosure(): void;

}


//CLASS ENCLOSURE======================================================================================================================================
export class Enclosure implements IEnclosure{
    private idEnclosure: string = "";
    private nameEnclosure: string = "";
    private areaSize: string = "";
    private climate: Climate;
    private capacity: number = 0; // Suc chua toi da
    public static infoEnclosures: Enclosure[] = []; // Save information of Enclosure
    public static recycleEnclosure: Enclosure[] = []; // Save data enclosure when delete (Can rest if wanting)

    constructor(_id: string, _name: string, _areaSize: string, _climate: Climate,
         _capacity: number){
        this.idEnclosure = _id;
        this.nameEnclosure = _name;
        this.areaSize = _areaSize;
        this.climate = _climate;
        this.capacity = _capacity;
    }

    // VALIDATE INFOAMATION OF ENCLOSURE===============================================================================================================
    
    public Validate(): Boolean{ // Validate full attribute when iniatilize
        
        // Check type idEnclosure
        if (typeof this.idEnclosure !== 'string' || this.idEnclosure === undefined){
            throw Error(`The id enclosure ${this.idEnclosure} must is STRING and NOT UDEFINED!`);
        }

        // Check type nameEnclosure
        if (typeof this.nameEnclosure !== 'string' || this.nameEnclosure === undefined){
            throw Error(`The name closure '${this.nameEnclosure} must is STRING and NOT UNDEFINED!'`);
        }

        // Check type areaSize
        if (typeof this.areaSize !== 'string' || this.areaSize === undefined){
            throw Error(`The area size for enclosure ${this.areaSize} must is STRING and NOT UNDEFINED!`);
        }

        // Check type climate
        if (typeof this.climate !== 'string' && this.climate === undefined || this.climate !== Climate.Aquatic &&
            this.climate !== Climate.Desert && this.climate !== Climate.Temperate && this.climate !== Climate.Tropical){
            throw Error(`The climate for enclosure ${this.climate} must is STRING('Tropical' | 'Desert' | 'Aquatic' | 'Temperate') and NOT UNDEFINED!`);
        }

        // Check type capacity
        if (typeof this.capacity !== 'number' && this.capacity === undefined || this.capacity < 0){
            throw Error(`The capacity for enclosure ${this.capacity} must is NUMBER, NOT UNDEFINED and LARGER OR EQUAL THAN 0!`);
        }

        console.log("Validate successed. No find error in type of enclousre!");
        return true;
    }

    //VALIDATE ENCLOSURE===============================================================================================================================
    public ValidateEnclosure (): Boolean{ // Function to check idEnclosure (PK ) of class Enclosure was matched with 
                                    // idEnclousure (FK) of class Animal       
        let checkSameEnclosure = false;
        for (let i = 0; i < Animal.infoAnimals.length; i++){
            for (let j = 0; j < Enclosure.infoEnclosures.length; j++){
                if (Animal.infoAnimals[i].getEnclosureId() === Enclosure.infoEnclosures[j].getIdEnclosure()){
                    checkSameEnclosure = true;
                    break;
                }
            }
        }

        if (checkSameEnclosure === true){
            console.log("True enclosure for animal!");
            return true;
        }
        console.log(`The enclosure no have in the zoo!`);
        return false;
    }

    // GET ===============================================================================================================

    public getIdEnclosure(): string{ // Function to return id of enclosure
        return this.idEnclosure;
    }

    public getNameEnclosure(): string{ // Function to return name of enclosure
        return this.nameEnclosure;
    }

    public getAreaSize(): string{ // Function to return areaSize (m^2) of enclosure
        return this.areaSize;
    }

    public getClimate(): Climate{ // Function to return cliamte of enclosure can be ('Tropical', 'Desert', 'Aquatic', 'Temperate')
        return this.climate;
    }

    public getCapacity(): number{ // Function to return capacity of Enclosure (maximum capacity)
        return this.capacity;
    }

    // SET ===============================================================================================================

    public setIdEnclosure(newIdEnclosure: string): Boolean{ // Function to change id of enclosure

        //newIdEnclosure must satisfy 4 codination (string --- not undefined --- not same id --- exist in the Zoo)

        // Checkid was existed
        let checkIdExist = -1;
        for (let i = 0; i < Enclosure.infoEnclosures.length ;i++){
            if (Enclosure.infoEnclosures[i].getIdEnclosure() === newIdEnclosure){
                checkIdExist = i;
                break;
            }
        }

        if (typeof newIdEnclosure !== 'string' || newIdEnclosure === undefined || checkIdExist !== -1 || this.ValidateEnclosure() === false){
            console.log(`The new id enclosure ${newIdEnclosure} must is STRING, NOT UNDIFINED and HAD IN ZOO!`);
            return false;
        }
        this.idEnclosure = newIdEnclosure;
        console.log(`Set new id closure was successed!`);
        return true;
    }

    public setNameEnclosure(newNameEnclosure: string): Boolean{ // Function to change name of enclosure

        // New name must satisdy 2 codinations (string --- not undefined)
        if (typeof newNameEnclosure !== 'string' || newNameEnclosure === undefined){
            console.log(`The new name closure ${newNameEnclosure} must is STRING and NOT UNDEFINED!`);
            return false;
        }
        this.nameEnclosure = newNameEnclosure;
        console.log(`Set new name closure was successed!`);
        return true;

    }

    public setAreaSize(newAreaSize: string): Boolean{ // Function to change AreaSize (m^2) of enclosure
        if (typeof newAreaSize !== 'string' || newAreaSize === undefined){

            // New area size must satisdy 2 codinations (string --- not undefined)
            console.log(`The new area size for enclosure ${newAreaSize} must is STRING and NOT UNDEFINED!`);
            return false;
        }

        this.areaSize = newAreaSize;
        console.log(`Set new area size for enclosure was successed!`);
        return true;
    }

    public setClimate(newClimate: Climate): Boolean{ // Function to change climate('Tropical' | 'Desert' | 'Aquatic' | 'Temperate') of enclosure
        
        // New climate must satisdy 2 codinations (string ('Tropical', 'Desert', 'Aquatic', 'Temperate') --- not undefined)
        if (typeof newClimate !== 'string' && newClimate === undefined || newClimate !== Climate.Tropical &&
            newClimate !== Climate.Desert && newClimate !== Climate.Aquatic  && newClimate !== Climate.Temperate){
            console.log(`The new area size for enclosure ${newClimate} must is STRING('Tropical' | 'Desert' | 'Aquatic' | 'Temperate') and NOT UNDEFINED!`);
            return false;
        }
        this.climate = newClimate;
        console.log(`Set new climate for enclosure was successed!`);
        return true;
    }

    public setCapacity(newCapacity: number): Boolean{ // Function to change capacity of enclosure

        // New capacity must satisdy 3 codinations (number --- not undefined --- better than 0)
        if (typeof newCapacity !== 'number' && newCapacity === undefined || newCapacity < 0){
            console.log(`The new capacity for enclosure ${newCapacity} must is NUMBER, NOT UNDEFINED and LARGER OR EQUAL THAN 0!`);
            return false;
        }
        this.capacity = newCapacity;
        console.log(`Set new capacity for enclosure was successed!`);
        return true;
    }


    public displayinfoEnclosure(): void{ // Function to display information of enclosure

        // If you want to print, idEnclosure must exist in the Zoo
        for (let i = 0; i < Enclosure.infoEnclosures.length; i++){
            if (Enclosure.infoEnclosures[i].getIdEnclosure() === this.getIdEnclosure()){
                console.log("============================================ FULL INFORMATION OF ENCLOSURE ============================================")
        
                console.log(`ID\t\tNAME\t\tAREASIZE\t\tCLIMATE\t\tCAPACITY`)

                console.log(`${this.getIdEnclosure()}\t${this.getNameEnclosure()}\t${this.getAreaSize()}\t\t\t${this.getClimate()}\t${this.getCapacity()}`);
 

                console.log("--------------------------------------END-------------------------------------------------");
                break;
            }
        }
        console.log("No have information of enclosure!");
    }

}