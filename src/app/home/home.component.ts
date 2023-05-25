import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Food } from './../shared/models/Food';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private foodService:FoodService, private route:ActivatedRoute) {
   
   }
  foods:Food[]=[];
  


  ngOnInit():void{
    // 
    
    this.route.params.subscribe(params =>{
      this.foods=this.foodService.getAll()
      if(params['searchTerm']){
        this.foods=this.foodService.getAll().filter(food =>food.name.toLowerCase().includes(params['searchTerm'].toLowerCase()));
        
         
     
        // if(this.foods.length <=0 ){
        //   this.foods= this.foodService.getAll();
        // }
      } // end search-term
      else  if(params['tag']){
        this.foods= this.foodService.getAllFoodsByTags(params['tag'])
      }
       
     
       
    


     

    })

  }
}
