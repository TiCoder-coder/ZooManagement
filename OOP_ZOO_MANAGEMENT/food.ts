import { TypeFood } from "./enums";


// Class interface of Food --- use to define operations for class Food
export interface IFood{

    getIdFood(): string;
    getNameFood(): string;
    getTypeFood(): TypeFood;
    getCaloriesPerUnit(): number;

    setIdFood(newIdFood: string): Boolean;
    setNameFood(newNameFood: string): Boolean;
    setTypeFood(newTypeFood: TypeFood): Boolean;
    setCaloriPerUnit(newCaloriPerUnit: number): Boolean;

    Validate(): Boolean;
    displayInfoFood(): void;
}


// CLASS FOOD ===============================================================================================================
export class Food implements IFood{
    private idFood: string = "";
    private nameFood: string = "";
    private typeFood: TypeFood;
    private caloriesPerUnit: number = 0;
    public static infoFoods: Food[] = [];
    public static recycleFoods: Food[] = [];


    constructor(_idFood: string, _nameFood: string, _typeFood: TypeFood,
        _caloriesPerUnit: number){
        this.idFood = _idFood;
        this.nameFood = _nameFood;
        this.typeFood = _typeFood;
        this.caloriesPerUnit = _caloriesPerUnit;
    }

    // GET ===============================================================================================================

    public getIdFood(): string{ // Function to return id of food
        return this.idFood;
    }

    public getNameFood(): string{ // Function to return name of food
        return this.nameFood;
    }

    public getTypeFood(): TypeFood{ // Function to return type of food('Meat', 'Plant' 'Fish', 'Quarantined')
        return this.typeFood;
    }

    public getCaloriesPerUnit(){ // Function to return calories per unit of food
        return this.caloriesPerUnit;
    }

    // SET ===============================================================================================================
    public setIdFood(newIdFood: string): Boolean{ // Function to change the id of food

        // New id must satisfy 3 codinations (string --- not undefined --- not same id)
        let checkSameId = -1;
        for (let i = 0; i < Food.infoFoods.length ;i++){
            if (Food.infoFoods[i].getIdFood() === newIdFood){
                checkSameId = i;
                break;
            }
        }
        
        if (typeof newIdFood !== 'string' || newIdFood === undefined || checkSameId !== -1){
            console.log(`New id Food must is STRING, NOT UNDEFINED and NOT SAME ID!`);
            return false;
        }

        this.idFood = newIdFood;
        console.log("Set new id food was successed!");
        return true;
    }

    public setNameFood(newNameFood: string): Boolean{ // Function to change the name of food
        if (typeof newNameFood !== 'string' || newNameFood === undefined){
            console.log(`New name of food must is STRING and NOT UNDEFINED!`);
            return false;
        }
        this.nameFood = newNameFood;
        console.log("Set new name of food was successed!");
        return true;
    }

    public setTypeFood(newTypeFood: TypeFood): Boolean{ // Function to change the type of food
        if (typeof newTypeFood !== 'string' || newTypeFood !== 'Meat' && newTypeFood !== 'Plant' && newTypeFood !== 'Fish' &&
             newTypeFood != 'Insect' || newTypeFood === undefined){
                console.log("The new type of food must is STRING('Meat' | 'Plant' | 'Fish' | 'Insect') and NOT UNDEFINED!");
                return false;
        }
        this.typeFood = newTypeFood;
        console.log("Set new type of food was successed!");
        return true;
    }

    public setCaloriPerUnit(newCaloriPerUnit: number): Boolean{ // Function to change the calories per unit of food
        if (typeof newCaloriPerUnit !== 'number' || newCaloriPerUnit === undefined){
            console.log(`New caloriPerUnit of food must is NUMBER and NOT UDEFINED!`);
            return false;
        }
        this.caloriesPerUnit = newCaloriPerUnit;
        console.log("Set new caloriPerUnit of food was successed!");
        return true;
    }

    // VALIDATE ===============================================================================================================

    public Validate(): Boolean{ // Function to validate the type of attribute when intialize
        // Check type of idFood
        if (typeof this.idFood !== 'string' || this.idFood === undefined){
            throw Error(`Id Food must is STRING and NOT UNDEFINED!`);
        }

        //Check type of nameFood
        if (typeof this.nameFood !== 'string' || this.nameFood === undefined){
            throw Error(`Name of food must is STRING and NOT UNDEFINED!`);
        }

        // Check type of typeFood
        if (this.typeFood !== TypeFood.Fish && this.typeFood !== TypeFood.Insect && this.typeFood !== TypeFood.Meat &&
             this.typeFood != TypeFood.Plant || this.typeFood === undefined){
                throw Error("Type of food must is STRING('Meat' | 'Plant' | 'Fish' | 'Insect') and NOT UNDEFINED!");
        }

        //Check type of caloriesPerUnit
        if (typeof this.caloriesPerUnit !== 'number' || this.caloriesPerUnit === undefined || this.caloriesPerUnit > 300){
            throw Error(`CaloriPerUnit of food must is NUMBER, NOT UNDEFINED and SMAILLER THAN 300 CALORIES!`);
        }

        console.log("Validate type of food successed. No explore error!");
        return true;
    }


    // DISPLAY INFORMATION OF FOOD ===============================================================================================================

    public displayInfoFood(){ // Function to display full information of food in the Zoo
        console.log("===================================================FULL INFOMATION OF FOOD ===================================================");
        console.log(`ID\t\tNAME\t\tTYPE\t\tCALORIES_PER_UNIT`)
        for (let i = 0; i < Food.infoFoods.length; i++){
            console.log(`${Food.infoFoods[i].getIdFood()}\t${Food.infoFoods[i].getNameFood()}\t\t${Food.infoFoods[i].getTypeFood()}\t\t${Food.infoFoods[i].getCaloriesPerUnit()}`);
        }
    }

}