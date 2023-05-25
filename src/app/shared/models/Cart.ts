import {CartItem} from './CartItem'


// this class hold list of all items
export class Cart{
    items:CartItem[] = [];

    get totalPrice():number{
        let totalPrice=0 ;
        this.items.forEach(item =>{
            totalPrice +=item.price;
        })
        return totalPrice;
    }

}