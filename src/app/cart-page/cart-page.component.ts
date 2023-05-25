import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart/cart.service';
import { FoodService } from '../services/food/food.service';
import { Cart } from '../shared/models/Cart';
import { CartItem } from '../shared/models/CartItem';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {

  constructor(private cartService:CartService) { 
     

    this.setCart()
  }


  ngOnInit(): void {
  }

  //  '!' = allow cart to be nullable
  cart!:Cart;

  setCart(){
    this.cart=this.cartService.getCart()
  }

  removeFromCart(cartItem:CartItem){
    this.cartService.removeFromCart(cartItem.food.id);

    // refresh cart
    this.setCart();
  }
  
  changeQuantity(cartItem:CartItem,quantityInString:string){
    const quantity= parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.food.id,quantity);
    
    // refresh cart
    this.setCart()
  }
}
