import {Gender, HealthStatus } from "./enums";
import { Enclosure } from "./enclosure";


// Class interface of Animal --- use to define operations for class Animal
export interface IAnimal{

    getIdAnimal(): string;
    getNameAnimal(): string;
    getAgeAnimal(): number;
    getSpeciesAnimal(): string;
    getGenderAnimal(): Gender;
    getWeightAnimal(): number;
    getHealthStatus(): HealthStatus;
    getEnclosureId(): string;
    getCreateAt(): Date;
    getUpdateAt(): Date;

    setIdAnimal(newId: string): Boolean;
    setNameAnimal(newName: string): Boolean;
    setAgeAnimal(newAge: number): Boolean;
    setSpeciesAnimal(newSpecies: string): Boolean;
    setGenderAnimal(newGender: Gender): Boolean;
    setWeightAnimal(newWeight: number): Boolean;
    setHealthStatus(newHealthStatus: HealthStatus): Boolean;
    setEnclosureId(newEnclosureId: string): Boolean;
    setCreateAt(newCreateAt: Date): Boolean;
    setUpdateAt(newUpdateAt: Date): Boolean;
    
    Validate(): Boolean;
    displayInfoAnimal(): void;

}


// CLASS ANIMAL ===========================================================================================================
export class Animal implements IAnimal{
    private id: string = "";
    private name: string = "";
    private age: number = 0;
    private species: string = "";
    private gender: Gender;
    private weight: number = 0;
    private healthStatus: HealthStatus;
    private enclosureId: string = "";
    private createAt: Date;
    private updateAt: Date;
    public static infoAnimals: Animal[] = [];
    public static infoRecycleAnimals: Animal[] = [];
    //public static AnimalsForEnclosure: Animal[] = [];

    constructor(_id: string, _name: string, _age: number, _species: string, _gender: Gender, _weight: number,
        _healthStatus: HealthStatus, _enclosureId: string, _createAt: Date,
         _updateAt: Date){
        this.id = _id ;
        this.name = _name;
        this.age = _age;
        this.species = _species;
        this.gender = _gender;
        this.weight = _weight;
        this.healthStatus = _healthStatus;
        this.enclosureId = _enclosureId;
        this.createAt = _createAt;
        this.updateAt = _updateAt;

    }

    //GET ==================================================================================================================
    public getIdAnimal(): string{ // Function to return id of animal
        return this.id;
    }

    public getNameAnimal(): string{ // Function to return name of animal
        return this.name;
    }

    public getAgeAnimal(): number{ // Function to return age of animal
        return this.age;
    }

    public getSpeciesAnimal(){ // Function to return species of animal
        return this.species;
    }

    public getGenderAnimal(): Gender{ // Function to return gender(Male or Female) of animal
        return this.gender;
    }

    public getWeightAnimal(): number{ // Function to return weight of animal
        return this.weight;
    }

    public getHealthStatus(): HealthStatus{ // Function to return healthStatus of animal
        return this.healthStatus;
    }

    public getEnclosureId(): string{ // Function to return enclosureId of animal
        return this.enclosureId;
    }

    public getCreateAt(): Date{ // Function to return date of create animal
        return this.createAt;
    }

    public getUpdateAt(): Date{ // Function to return date of update animal
        return this.updateAt;
    }

    // SET ====================================================================================================================
    
    public setIdAnimal(newId: string): Boolean{ // Function to change id of animal
        // New id must satisfy 3 codination (string --- not undefined --- not same id)
        
        // Check if newId was exist => return false
        let checkIdExist = -1;
        for (let i = 0; i < Animal.infoAnimals.length; i++){
            if (Animal.infoAnimals[i].getIdAnimal() === newId){
                checkIdExist = i;
                break;
            }
        }
        if (typeof newId != 'string' && newId === undefined || checkIdExist !== -1){
            console.log(`New id must is STRING, NOT UNDEFINED and NOT SAME ID!`);
            return false;
        }
        this.id = newId;
        console.log("Set id was successed!");
        return true;
    }

    public setNameAnimal(newName: string): Boolean{ // Function to change name of animal

        // New name must satisdy 2 codinations (string --- not undefined)
        if (typeof newName != 'string' && typeof newName == undefined){
            console.log(`New name must is STRING and NOT UNDEFINED!`);
            return false;
        }
        this.name = newName;
        console.log("Set name was successed!");
        return true;
        
    }

    public setAgeAnimal(newAge: number): Boolean{ // Function to change age of animal

        // New age must satisdy 3 codinations (number --- not undefined --- better than 0)
        if (typeof newAge != 'number' && newAge == undefined || newAge < 0){
            console.log(`New age must is NUMBER, NOT UNDEFINED and LARGER OR EQUAL THAN 0!`);
            return false;
        }

        this.age = newAge;
        console.log("Set age was sucessed!");
        return true;
    }

    public setSpeciesAnimal(newSpecies: string): Boolean{ // Function to change species of animal

        // New species must satisdy 2 codinations (string --- not undefined)
        if (typeof newSpecies != 'string' || newSpecies === undefined){
            console.log(`New species must is STRING and NOT UNDEFINEND!`);
            return false;
        }
        this.species = newSpecies;
        console.log("Set species was successed!");
        return true;
    }

    public setGenderAnimal(newGender: Gender): Boolean{ // Function to change gender of animal

        // New gender must satisdy 2 codinations (string('Male' or 'Female') --- not undefined)
        if (newGender !== Gender.Male && newGender !== Gender.Female || newGender === undefined){
            console.log("New gender MUST IS 'MALE! OR 'FEMALE' and not undefinedl");
            return false;
        }
        this.gender = newGender;
        console.log("Set gender was successed!");
        return true;
    }

    public setWeightAnimal(newWeight: number): Boolean{ // Function to change weight of animal

        // New weight must satisdy 3 codinations (number --- not undefined --- better than 0)
        if (typeof newWeight != 'number' || newWeight === undefined || newWeight < 0){
            console.log("New weight must is NUMBER, NOT UNDEFINED and LARGER OR EQUAL THAN 0!");
            return false;
        }
        this.weight = newWeight;
        console.log("Set weight was successed!");
        return true;
    }

    public setHealthStatus(newHealthStatus: HealthStatus): Boolean{ // Function to change healthStatus ('Healthy', 'Quarantined', 'Sick') for animal
        // Check type of new data

        // New healthStatus must satisdy 2 codinations (string('Heathy, 'Quarantined', 'Sick') --- not undefined)
        if (typeof newHealthStatus !== 'string' ||newHealthStatus !== HealthStatus.Healthy && newHealthStatus !== HealthStatus.Quarantined && newHealthStatus !== HealthStatus.Sick ||
            this.healthStatus === undefined){
                console.log("New health status MUST IS 'HEALTHY', 'SICK', or 'QUARANTINED' and NOT UNDEFINED!");
                return false;
            }
            this.healthStatus = newHealthStatus;
            console.log("Set health status was successed!");
        
        return true;
    }
    
    public setEnclosureId(newEnclosureId: string): Boolean{ // // Function to change enclosure for animal --- use when change animal to new enclosure

        // Check new id enclosure was existed in the Zoo, if exist => change
        let checkExistId = -1;
        for (let i = 0; i < Enclosure.infoEnclosures.length; i++){
            if (Enclosure.infoEnclosures[i].getIdEnclosure() === newEnclosureId){
                checkExistId = i;
                break;
            }
        }

        if (checkExistId === -1 || typeof newEnclosureId != 'string' || typeof newEnclosureId == undefined){
            console.log(`New id must is STRING, NOT UNDEFINED and MUST EXIST in the Zoo!`);
            return false;
        }

        this.enclosureId = newEnclosureId;
        console.log("Set new enclosureId was successed!");
        return true;
    }


    public compareAt(date1: Date, date2: Date){ // Function compare 2 day (true: day2 >= day1 --- false: day2 < day1)
        if (date2.getFullYear() > date1.getFullYear()){
            return true;
        }
        else if (date2.getFullYear() < date1.getFullYear()){
            return false;
        }
        else{
            if (date2.getMonth() > date1.getMonth()){
                return true;
            }
            else if (date2.getMonth() < date1.getMonth()){
                return false;
            }
            else{
                if (date2.getDate() >= date1.getDate()){
                    return true;
                }
                else {
                    return false
                }
            }
        }
    }
    public setCreateAt(newCreateAt: Date): Boolean{ // Function to change date of acreate nimal

        // New createAt must satisdy 2 codinations (not undefined - smaller than updateAt)
        if (newCreateAt == undefined || !this.compareAt(newCreateAt, this.getUpdateAt())){
            console.log("New createAt must is DATE , NOT UNDEFINED and MUST SMALLER OR EQUAL THAN UPDATE DATE!");
            return false;
        }
        this.createAt = newCreateAt;
        console.log("Set createAt was successed!");
        return true;
    }
    public setUpdateAt(newUpdateAt: Date): Boolean{ // Function to change update date of animal

        // New updateAt must satisdy 2 codinations (not undefined - larger or equal than createAt)
        if (newUpdateAt === undefined || !this.compareAt(this.getCreateAt(), newUpdateAt)){
            console.log("New updateAt must is DATE, NOT UNDEFINED and MUST LARGER OR EQUAL THAN CREATE DATE!");
            return false;
        }

        this.updateAt = newUpdateAt;
        console.log("Set updateAt was successed!");
        return true;
    }
    
    // VALIDATE ==============================================================================================================
    public Validate(): Boolean{ // Validate type of attribute of animal when intialize
        
        // Check type of id
        if (typeof this.id !== 'string' || this.id === undefined){
            throw Error("The id must is STRING and NOT UNDEFINED!");
        }

        // Check type of name
        if (typeof this.name !== 'string' || this.name === undefined){
            throw Error("The name must is STRING and NOT UNDEFINED!");
        }

        // Check type of age
        if (typeof this.age !== 'number' || this.age === undefined || this.age < 0){
            throw Error("The age must is NUMBER, NOT UNDEFINED and LARGER OR EQUAL THAN 0!");
        }

        // Check type of species
        if (typeof this.species !== 'string' || this.species === undefined){
            throw Error("The species must is STRING and NOT UNDEFINED!");
        }

        // Check type of gender
        if (this.gender!== Gender.Female && this.gender !== Gender.Male || this.gender === undefined){
            throw Error("The gender MUST IS 'MALE! or 'FEMALE' and NOT UNDEFINED!");
        }

        // Check type of weight
        if (typeof this.weight !== 'number' || this.weight === undefined || this.weight < 0){
            throw Error("The weight must is NUMBER, NOT UNDEFINED and LARGER OR EQUAL THAN 0!");
        }

        // Check type of healthStatus
        if (this.healthStatus !== HealthStatus.Healthy && this.healthStatus !== HealthStatus.Quarantined && this.healthStatus !== HealthStatus.Sick ||
            this.healthStatus === undefined){
                throw Error("The health status MUST IS 'HEALTH', 'SICK', or 'QUARANTINED' and NOT UNDEFINED!");
        }

        // Check type of enclosureId
        if (typeof this.enclosureId !== 'string' || this.enclosureId === undefined){
            throw Error("The enclosureId must is STRING and NOT UNDEFINED!");
        }

        // Check type of createAt and createAt much smaller than updateAt
        if (this.createAt === undefined || !this.compareAt(this.createAt, this.updateAt)){
            throw Error("The createAt must is date and not undefined!");
        }

        // Check type of updateAt much larger than createAt
        if (this.updateAt === undefined || !this.compareAt(this.createAt, this.updateAt)){
            throw Error("The createAt must is date and not undefined!");
        }
        console.log("Validate sucessed. No object of animal is invalided!");
        return true;
    }
    
    
    public displayInfoAnimal(): void{ // Display full information about animal in the Zoo
        for (let i = 0; i < Animal.infoAnimals.length; i++){
            if (Animal.infoAnimals[i].getIdAnimal() === this.getIdAnimal()){
                console.log("FULL ANIMAL IN ZOO:==================================================================================")
                console.log(`ID\tNAME\tAGE\tSPECIES\t\tGENDER\tWEIGHT\t\tHEALTH_STATUS\t\tENCLOSURE_ID\t\tCREATE_AT\t\tUPDATE_AT`)
       
                console.log(`${Animal.infoAnimals[i].getIdAnimal()}\t${Animal.infoAnimals[i].getNameAnimal()}\t${Animal.infoAnimals[i].getAgeAnimal()}\t${Animal.infoAnimals[i].getSpeciesAnimal()}\t${Animal.infoAnimals[i].getGenderAnimal()}\t${Animal.infoAnimals[i].getWeightAnimal()}\t\t${Animal.infoAnimals[i].getHealthStatus()}\t\t\t${Animal.infoAnimals[i].getEnclosureId()}\t\t${Animal.infoAnimals[i].getCreateAt()}\t\t${Animal.infoAnimals[i].getUpdateAt()}`);
            }
        }
    
        console.log("No search have information of animal!");
    }
    
}
