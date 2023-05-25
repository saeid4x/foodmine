import {Food} from './Food'

// holding data of each item or food
export class CartItem{

    constructor(food:Food){
        this.food=food;
    }
    food:Food;
    quantity:number=1

    /* 
    getter = 
    if we use get for a function(like below,price()), 
    then we can behaviuor that like a normal property
    . Ex:  this.price
    
    */
    get price():number{
        return this.food.price * this.quantity
    }
}