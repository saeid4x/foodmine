import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../services/cart/cart.service';
import { FoodService } from '../services/food/food.service';
import { Food } from '../shared/models/Food';

@Component({
  selector: 'app-foodpage',
  templateUrl: './foodpage.component.html',
  styleUrls: ['./foodpage.component.css']
})
export class FoodpageComponent implements OnInit {

  food!:Food;
  constructor(private activatedRoute:ActivatedRoute,foodService:FoodService,
    private cartService:CartService,private router:Router) {
    activatedRoute.params.subscribe((params)=>{
      if(params['id']){
        this.food= foodService.getFoodByID(params['id'])
      }
    })
   }

   addToCart(){
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page')
  }


  ngOnInit(): void {
  }

}
