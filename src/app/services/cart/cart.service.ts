import { Injectable } from '@angular/core';
import { Cart } from 'src/app/shared/models/Cart';
import { Food } from 'src/app/shared/models/Food';
import { CartItem } from './../../shared/models/CartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  constructor() { }

  private cart:Cart = new Cart();

  addToCart(food:Food):void{
    let cartItem=this.cart.items.find(item =>item.food.id === food.id);
    if(cartItem){
      this.changeQuantity(food.id,cartItem.quantity +1);
      return;   //exit from current block
    }
    this.cart.items.push(new CartItem(food))
  }

  removeFromCart(foodId:number):void{

    // create new items[] with all items[] elements except foodId
    this.cart.items= this.cart.items.filter(item =>item.food.id != foodId);
  }

  changeQuantity(foodId:number, quantity:number){
    let cartItem = this.cart.items.find(item => item.food.id === foodId);
    if(!cartItem) return;
    cartItem.quantity = quantity;
  }

  getCart():Cart{
    return this.cart;
  }

}
