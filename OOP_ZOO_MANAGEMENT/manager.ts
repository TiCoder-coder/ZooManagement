import { Enclosure } from "./enclosure";
import { Animal } from "./animal";
import { Food } from "./food";
import { FeedRecord } from "./feedRecord";
import { Staff } from "./staff";


export class Manager extends Staff{

    private role: 'Manager'; // Attribute to distinguish between Staff and Manager
    public static saveManagers: Manager[] = [];
    public static recycleManagers: Manager[] = [];
    constructor(_role: 'Manager', _managerId: string, _managerName: string){
        super(_managerId, _managerName);
        this.role = _role;
    }
    

    addNewStaff(staff: Staff){ // Function to add the new staff
        //Check if id staff was existed => false
        let checkIdExist = -1;
        for (let i = 0; i < Staff.saveStaffs.length;i++){
            if (Staff.saveStaffs[i].getId() === staff.getId()){
                checkIdExist = i;
                break;
            }
        }

        if (checkIdExist !== -1){
            console.log(`The staff ${staff.getId()} was exist in saveStaffs!`);
            return Staff.saveStaffs;
        }
        Staff.saveStaffs.push(staff);
        console.log(`Added new staff ${staff.getId()} was successed!`);
        return Staff.saveStaffs;
    }

    deleteStaff(idStaffToDel: string){ //Function to delete the staff
        //Check if id staff exist => move staff to trash
        let checkStaffExist = -1;
        for (let i = 0; i < Staff.saveStaffs.length; i++){
            if (Staff.saveStaffs[i].getId() === idStaffToDel){
                Staff.recycleStaffs.push(Staff.recycleStaffs[i]);
                Staff.saveStaffs.splice(i, 1)
                console.log(`Delete the staff ${idStaffToDel} was successed!`)
                checkStaffExist = i;
                return Staff.saveStaffs;
            }
        }
        if (checkStaffExist === -1){
            console.log(`No search have information of staff ${idStaffToDel} to delete!`)
            return Staff.saveStaffs;
        }
    }
    
    searchInfoManager(idToSearch: string){
        //Check if id manager was existed => print information
        let checkIdExist = -1;
        for (let i = 0; i < Manager.saveManagers.length;i++){
            if (Staff.saveStaffs[i].getId() === idToSearch){
                checkIdExist = i;
                break;
            }
        }

        if (checkIdExist !== -1){
            console.log(`Infomation of manager - Id: ${idToSearch}, Name: ${this.getName()}, Role: "Manager"`);
            return true;
        }

        console.log(`No search have id ${idToSearch} of manager!`);
        return false;
    }

    addNewManager(manager: Manager){ // Function to add the new manager
        //Check if id manager was existed => false
        let checkIdExist = -1;
        for (let i = 0; i < Manager.saveManagers.length;i++){
            if (Staff.saveStaffs[i].getId() === manager.getId()){
                checkIdExist = i;
                break;
            }
        }

        if (checkIdExist !== -1){
            console.log(`The manager ${manager.getId()} was exist in saveManagers!`);
            return Manager.saveManagers;
        }
        Manager.saveManagers.push(manager);
        console.log(`Added new manager ${manager.getId()} was successed!`);
        return Manager.saveManagers;
    }

    deleteManager(idManagerToDel: string){ //Function to delete the manager
        //Check if id manager exist => move manager to trash
        let checkManagerExist = -1;
        for (let i = 0; i < Manager.saveManagers.length; i++){
            if (Manager.saveManagers[i].getId() === idManagerToDel){
                Manager.recycleManagers.push(Manager.saveManagers[i]);
                Manager.saveManagers.splice(i, 1)
                console.log(`Delete the manager ${idManagerToDel} was successed!`)
                checkManagerExist = i;
                return Manager.saveManagers;
            }
        }
        if (checkManagerExist === -1){
            console.log(`No search have information of manager ${idManagerToDel} to delete!`)
            return Manager.saveManagers;
        }
    }

    addEnclosure(enclosure: Enclosure){ // Function to add the enclosure for Zoo
        console.log("============================================ add enclosure ============================================")
        
        //Check if enclosure exist => not need add enclosure
        let checkExistEnclosure = -1
        for (let i = 0; i < Enclosure.infoEnclosures.length; i++){
            if (Enclosure.infoEnclosures[i].getIdEnclosure() === enclosure.getIdEnclosure()){
                checkExistEnclosure = i;
                break;
            }
        }
        if (checkExistEnclosure !== -1){
            console.log(`The enclosure id ${enclosure.getIdEnclosure()} was existed!`);
            return Enclosure.infoEnclosures;
        }
        Enclosure.infoEnclosures.push(enclosure);
        console.log(`Added new enclosure id ${enclosure.getIdEnclosure()} was successed!`);
        return Enclosure.infoEnclosures;
    }

    deleteEnclosure(idToRemove: string) { // Function to remove the enclosure 
        console.log("============================================ delete enclosure ============================================")
        
        //If want to delete => id exist => move to recycle (if want to catch again => recycle)
        let checkExistEnclosure = -1
        for (let i = 0; i < Enclosure.infoEnclosures.length; i++){
            if (Enclosure.infoEnclosures[i].getIdEnclosure() === idToRemove){
                checkExistEnclosure = i;
                Enclosure.recycleEnclosure.push(Enclosure.infoEnclosures[i]);
                Enclosure.infoEnclosures.splice(i, 1);
                console.log(`Was delete enclosure ${idToRemove} was successed!`);
                return Enclosure.infoEnclosures;
            }
        }

        // for (let j = 0; j < Animal.infoAnimals.length; j++){
        //     if (Animal.infoAnimals[j].getEnclosureId() === idToRemove){
        //         Animal.infoRecycleAnimals.push(Animal.infoAnimals[j]);
        //         Animal.infoAnimals.splice(j, 1);
        //     }
        // }

        if (checkExistEnclosure !== -1){
            console.log(`The enclosure id ${idToRemove} not found to remove!`);
            return Enclosure.infoEnclosures;
        }
    }


    // ADD ANIMAL=============================================================================================================
    addAnimal(animal: Animal){ // Function to add the animal 
        console.log("============================================ add animal =======================================================")
        //Check if id animal exist in the infoAnimals => can not add
        let checkExistId = -1;
        for(let i = 0; i < Animal.infoAnimals.length; i++){
            if (Animal.infoAnimals[i].getIdAnimal() === animal.getIdAnimal()){
                checkExistId = i;
                break;
            }
        }
        if (checkExistId !== -1){
            console.log(`The animal ${animal.getIdAnimal()} was existed in the zoo => can not add.`);
            return Animal.infoAnimals;
        }

        //Check foreign key id enclosre of class Enclousre same id enclosure of class Animal
        let checkForeignKey = -1
        for (let e = 0; e < Enclosure.infoEnclosures.length; e++){
            if (Enclosure.infoEnclosures[e].getIdEnclosure() === animal.getEnclosureId()){
                checkForeignKey = e;
                break
            }
        }
        if (checkForeignKey === -1){
            console.log(`The enclosure of animal ${animal.getEnclosureId()} was not existed in the zoo => can not add.`);
            return Animal.infoAnimals;
        }

        Animal.infoAnimals.push(animal);
        console.log(`Added animal has id ${animal.getIdAnimal()} was successed!`);
        return Animal.infoAnimals;
    }

    // // DELETE ANIMAL ==============================================================================================================
    deleteAnimal(idToDel: string){ // Function to delete the animal
        console.log("============================================ delete animal ============================================")
        //Check if id of animal exist => move animal to trasb
        let checkExistId = -1;
        for(let i = 0; i < Animal.infoAnimals.length; i++){
            if (Animal.infoAnimals[i].getIdAnimal() === idToDel){
                checkExistId = i;
                Animal.infoRecycleAnimals.push(Animal.infoAnimals[i])
                Animal.infoAnimals.splice(i, 1);
                //let deleteCount = 0;
                for (let r = 0; r < FeedRecord.saveRecords.length; r++){
                    if (FeedRecord.saveRecords[r].getIdFeedRecord() === idToDel){
                        FeedRecord.recycleFeedRecord.push(FeedRecord.saveRecords[i]);
                        FeedRecord.saveRecords.splice(r, 1);
                        break;
                    }
                }
                console.log(`Delete animal has id ${idToDel} was successed!`);
                return Animal.infoAnimals;
            }

        }
        console.log(`The animal ${idToDel} was not existed in the zoo => can not delete.`);
        return Animal.infoAnimals;

    }

    

    // ADD NEW FOOD ===============================================================================================================

    addFood(food: Food){ // Function to add food
        console.log("============================================Add food ============================================")
        
        // Check if id food exist => not need add
        let checkFoodExist = -1;
        for (let i = 0; i < Food.infoFoods.length; i++){
            if (Food.infoFoods[i].getIdFood() === food.getIdFood()){
                checkFoodExist = i;
                break;
            }
        }

        // Check if food not have and validate === true => add
        if (checkFoodExist === -1 && food.Validate() === true){
            Food.infoFoods.push(food);
            console.log(`The new food was added successfully in warehouse!`);
            return Food.infoFoods;
        }
        console.log(`The food ${food.getIdFood()} was exist in warehouse!`);
        return Food.infoFoods;
    }

    // DELETE EXIST FOOD ===============================================================================================================

    deleteFood(idToDel: string){ // Function to add the Food
        console.log("=========================================================Delete food======================================================")
        //Check if id Food exist => not need add
        let checkFoodExist = -1;
        for (let i = 0; i < Food.infoFoods.length; i++){
            if (Food.infoFoods[i].getIdFood() === idToDel){
                checkFoodExist = i;
                Food.recycleFoods.push(Food.infoFoods[i]);
                Food.infoFoods.splice(i, 1);
                console.log(`The food was deleted successfully in warehouse!`);
                return Food.infoFoods;
            }
        }
        if (checkFoodExist === -1){
            console.log(`The food ${idToDel} was not exist in warehouse!`);
            return Food.infoFoods;
        }
    }

    
    deleteFeedRecord(idToDelRecord: string){ // Function to delete record
        console.log("============================================ Delete feed record ============================================")
        //Check if id exist => move feed record to trash
        let checkFeedRecrodExist = -1;
        for (let i = 0; i < FeedRecord.saveRecords.length; i++){
            if (FeedRecord.saveRecords[i].getIdFeedRecord() === idToDelRecord){
                checkFeedRecrodExist = i;
                FeedRecord.recycleFeedRecord.push(FeedRecord.saveRecords[i]);
                FeedRecord.saveRecords.splice(i, 1);
                console.log(`Delete record has id ${idToDelRecord} was successed!`)
                return FeedRecord.saveRecords;
            }
        }
        
        if (checkFeedRecrodExist === -1){
            console.log(`The food report ${idToDelRecord} not found to delete!`);
            return FeedRecord.saveRecords;
        }

        // let checkForeignKey = -1;
        // for (let j = 0; j < Animal.infoRecycleAnimals.length; j++){
        //     for (let k = 0; k < FeedRecord.saveRecords.length; k++){
        //         if (Animal.infoRecycleAnimals[j].getIdAnimal() === FeedRecord.saveRecords[k].getAnimalIdFeedRecord()){
        //             checkForeignKey = k;
        //             FeedRecord.recycleFeedRecord.push(FeedRecord.saveRecords[k]);
        //             FeedRecord.saveRecords.splice(k, 1);
        //             console.log(`The feedRecord ${idToDelRecord} was deleted successfully!`);
        //             break;
        //         }
        //     }
        // }
        return FeedRecord.saveRecords;

    }
    
}