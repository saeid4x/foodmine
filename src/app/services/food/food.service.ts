import { Injectable } from '@angular/core';
import { Food } from './../../shared/models/Food';
import { Tag } from './../../shared/models/tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  
  getFoodByID(id:number):Food{
    // use '!' sign for ensure find() return value with type of 'Food' and not 'undefined'
    return this.getAll().find(food => food.id == id)!
  }



  getAllFoodsByTags(tag:string):Food[]{
    if(tag == 'All')
    return this.getAll();
    else return this.getAll().filter(food =>food.tags?.includes(tag))

  }
  getAllTag():Tag[]{
    return [
      {name:'All'  ,count:14},
      {name:'fastfood'  ,count:8},
      {name:'hamberger'  ,count:3},
      {name:'irani'  ,count:2},
      {name:'sonati'  ,count:5},
      {name:'arabi'  ,count:2},
      {name:'dubai'  ,count:6},
      {name:'japanese'  ,count:13},
      {name:'oman'  ,count:1},
      {name:'korean'  ,count:23},
      {name:'Ash'  ,count:17},
      {name:'asian'  ,count:16},
      {name:'sandwich'  ,count:14},
      
    ]

  }
  getAll():Food[]{
    return[
      {
        id:1,
        name:'arabi 1',
        price:5,
        cookTime:'10-15',
        favorite:false,
        origins:['arabi','dubai'],
        stars:3.5,
        imageUrl:'/assets/images/foods/arabi/arabi.jpeg',
        tags:['arabi','dubai']
      },
      {
        id:2,
        name:'arabi 2',
        price:10,
        cookTime:'20-30',
        favorite:true,
        origins:['arabi','dubai'],
        stars:5.0,
        imageUrl:'/assets/images/foods/arabi/arabi2.jpeg',
        tags:['arabi','dubai']
      },
      {
        id:3,
        name:'arabi 3',
        price:6,
        cookTime:'12-15',
        favorite:false,
        origins:['arabi','dubai'],
        stars:4.2,
        imageUrl:'/assets/images/foods/arabi/arabi3.jpeg',
        tags:['arabi','dubai']
      },
      {
        id:4,
        name:'arabi 4',
        price:11,
        cookTime:'35-40',
        favorite:true,
        origins:['arabi','dubai'],
        stars:3.4,
        imageUrl:'/assets/images/foods/arabi/arabi3.jpg',
        tags:['arabi','dubai']
      },
      {
        id:5,
        name:'arabi 5',
        price:9,
        cookTime:'14-18',
        favorite:false,
        origins:['arabi','dubai'],
        stars:2.4,
        imageUrl:'/assets/images/foods/arabi/arabi7',
        tags:['arabi','dubai']
      },
      {
        id:6,
        name:'Ash',
        price:10,
        cookTime:'24-36',
        favorite:true,
        origins:['irani','Ash','sonati'],
        stars:4.1,
        imageUrl:'/assets/images/foods/ash/ash.jpeg',
        tags:['irani','Ash','sonati']
      },
      {
        id:7,
        name:'ash 2',
        price:13,
        cookTime:'16-18',
        favorite:false,
        origins:['irani','Ash','sonati'],
        stars:5.0,
        imageUrl:'/assets/images/foods/ash/ash (1).jpg',
        tags:['irani','Ash','sonati']
      },
      {
        id:8,
        name:'ash 3',
        price:12,
        cookTime:'17-21',
        favorite:true,
        origins:['irani','Ash','sonati'],
        stars:2.3,
        imageUrl:'/assets/images/foods/ash/ash (2).jpg',
        tags:['irani','Ash','sonati']
      },
      {
        id:9,
        name:'ash 4',
        price:12,
        cookTime:'17-21',
        favorite:true,
        origins:['irani','Ash','sonati'],
        stars:2.3,
        imageUrl:'/assets/images/foods/ash/ash (3).jpg',
        tags:['irani','Ash','sonati']
      },
      {
        id:10,
        name:'ash 5',
        price:12,
        cookTime:'17-21',
        favorite:true,
        origins:['irani','Ash','sonati'],
        stars:2.3,
        imageUrl:'/assets/images/foods/ash/ash (4).jpg',
        tags:['irani','Ash','sonati']
      },
      {
        id:11,
        name:'ash 6',
        price:11,
        cookTime:'17-21',
        favorite:true,
        origins:['irani','Ash','sonati'],
        stars:2.3,
        imageUrl:'/assets/images/foods/ash/ash (5).jpg',
        tags:['irani','Ash','sonati']
      },
      {
        id:12,
        name:'dubai 1',
        price:12,
        cookTime:'17-21',
        favorite:true,
        origins:['arabi','dubai'],
        stars:2.3,
        imageUrl:'/assets/images/foods/dubai/dubai (1).jpg',
        tags:['arabi','dubai']
      },
      {
        id:13,
        name:'dubai 1',
        price:12,
        cookTime:'17-21',
        favorite:true,
        origins:['arabi','dubai'],
        stars:2.3,
        imageUrl:'/assets/images/foods/dubai/dubai (2).jpg',
        tags:['arabi','dubai']
      },
      {
        id:14,
        name:'dubai 1',
        price:12,
        cookTime:'17-21',
        favorite:true,
        origins:['arabi','dubai'],
        stars:2.3,
        imageUrl:'/assets/images/foods/dubai/dubai.jpeg',
        tags:['arabi','dubai']
      },
    
      {
        id:15,
        name:'korea 1',
        price:12,
        cookTime:'17-21',
        favorite:true,
        origins:['korean','asian'],
        stars:2.3,
        imageUrl:'/assets/images/foods/korea/korea (1).jpeg',
        tags:['korean','asian']
      },
      {
        id:16,
        name:'korea 2',
        price:12,
        cookTime:'17-21',
        favorite:true,
        origins:['korean','asian'],
        stars:2.3,
        imageUrl:'/assets/images/foods/korea/korea (1).jpg',
        tags:['korean','asian']
      },
      {
        id:17,
        name:'korea 3',
        price:12,
        cookTime:'17-21',
        favorite:true,
        origins:['korean','asian'],
        stars:2.3,
        imageUrl:'/assets/images/foods/korea/korea (2).jpeg',
        tags:['korean','asian']
      },
      {
        id:18,
        name:'korea 4',
        price:12,
        cookTime:'17-21',
        favorite:true,
        origins:['korean','asian'],
        stars:2.3,
        imageUrl:'/assets/images/foods/korea/korea (2).jpg',
        tags:['korean','asian']
      },
      {
        id:19,
        name:'korea 5',
        price:12,
        cookTime:'17-21',
        favorite:true,
        origins:['korean','asian'],
        stars:2.3,
        imageUrl:'/assets/images/foods/korea/korea (3).jpeg',
        tags:['korean','asian']
      },
    
      {
        id:20,
        name:'korea 6',
        price:12,
        cookTime:'17-21',
        favorite:true,
        origins:['korean','asian'],
        stars:2.3,
        imageUrl:'/assets/images/foods/korea/korea (4).jpeg',
        tags:['korean','asian']
      },
      {
        id:21,
        name:'korea 7',
        price:12,
        cookTime:'17-21',
        favorite:true,
        origins:['korean','asian'],
        stars:2.3,
        imageUrl:'/assets/images/foods/korea/korea (5).jpeg',
        tags:['korean','asian']
      },
    
      {
        id:22,
        name:'japan 1',
        price:12,
        cookTime:'17-21',
        favorite:true,
        origins:['japanese','asian'],
        stars:2.3,
        imageUrl:'/assets/images/foods/japan/japan (1).jpg',
        tags:['japanese','asian']
      },
      {
        id:23,
        name:'japan 2',
        price:12,
        cookTime:'17-21',
        favorite:true,
        origins:['japanese','asian'],
        stars:2.3,
        imageUrl:'/assets/images/foods/japan/japan (2).jpg',
        tags:['japanese','asian']
      },
      {
        id:24,
        name:'japan 3',
        price:12,
        cookTime:'17-21',
        favorite:true,
        origins:['japanese','asian'],
        stars:2.3,
        imageUrl:'/assets/images/foods/japan/japan (3).jpg',
        tags:['japanese','asian']
      },
      {
        id:25,
        name:'omani 1',
        price:12,
        cookTime:'17-21',
        favorite:true,
        origins:['oman','arabi','dubai'],
        stars:2.3,
        imageUrl:'/assets/images/foods/oman/oman (1).jpeg',
        tags:['oman','arabi','dubai']
      },
      {
        id:26,
        name:'omani 2',
        price:12,
        cookTime:'17-21',
        favorite:true,
        origins:['oman','arabi','dubai'],
        stars:2.3,
        imageUrl:'/assets/images/foods/oman/oman (1).jpg',
        tags:['oman','arabi','dubai']
      },
      {
        id:27,
        name:'omani 3',
        price:12,
        cookTime:'17-21',
        favorite:true,
        origins:['oman','arabi','dubai'],
        stars:2.3,
        imageUrl:'/assets/images/foods/oman/oman (2).jpeg',
        tags:['oman','arabi','dubai']
      },
      {
        id:28,
        name:'omani 4',
        price:12,
        cookTime:'17-21',
        favorite:true,
        origins:['oman','arabi','dubai'],
        stars:2.3,
        imageUrl:'/assets/images/foods/oman/oman (2).jpg',
        tags:['oman','arabi','dubai']
      },
      {
        id:29,
        name:'omani 5',
        price:12,
        cookTime:'17-21',
        favorite:true,
        origins:['oman','arabi','dubai'],
        stars:2.3,
        imageUrl:'/assets/images/foods/oman/oman (3).jpg',
        tags:['oman','arabi','dubai']
      },
      {
        id:30,
        name:'Sonati 1',
        price:12,
        cookTime:'17-21',
        favorite:true,
        origins:['sonati'],
        stars:2.3,
        imageUrl:'/assets/images/foods/sonati/sonati.jpeg',
        tags:['sonati']
      },
      {
        id:31,
        name:'Sonati 2',
        price:12,
        cookTime:'17-21',
        favorite:true,
        origins:['sonati'],
        stars:2.3,
        imageUrl:'/assets/images/foods/sonati/sonati2.jpg',
        tags:['sonati']
      },
      {
        id:32,
        name:'Sonati  3',
        price:12,
        cookTime:'17-21',
        favorite:true,
        origins:['sonati'],
        stars:2.3,
        imageUrl:'/assets/images/foods/sonati/sonati3.jpg',
        tags:['sonati']
      },
      {
        id:33,
        name:'Sonati 4',
        price:12,
        cookTime:'17-21',
        favorite:true,
        origins:['sonati'],
        stars:2.3,
        imageUrl:'/assets/images/foods/sonati/sonati4.jpeg',
        tags:['sonati']
      },
      {
        id:34,
        name:'Sonati 5',
        price:12,
        cookTime:'17-21',
        favorite:true,
        origins:['sonati'],
        stars:2.3,
        imageUrl:'/assets/images/foods/sonati/sonati5.jpg',
        tags:['sonati']
      },
      {
        id:35,
        name:'irani 1',
        price:12,
        cookTime:'17-21',
        favorite:true,
        origins:['irani','kebab','sonati'],
        stars:2.3,
        imageUrl:'/assets/images/foods/irani/irani (1).jpg',
        tags:['irani','kebab','sonati']
      },
      {
        id:36,
        name:'irani 2',
        price:12,
        cookTime:'17-21',
        favorite:true,
        origins:['irani','kebab','sonati'],
        stars:2.3,
        imageUrl:'/assets/images/foods/irani/irani (2).jpg',
        tags:['irani','kebab','sonati']
      },
      {
        id:37,
        name:'irani 3',
        price:12,
        cookTime:'17-21',
        favorite:true,
        origins:['irani','kebab','sonati'],
        stars:2.3,
        imageUrl:'/assets/images/foods/irani/irani (3).jpg',
        tags:['irani','kebab','sonati']
      },
      {
        id:38,
        name:'irani 4',
        price:12,
        cookTime:'17-21',
        favorite:true,
        origins:['irani','kebab','sonati'],
        stars:2.3,
        imageUrl:'/assets/images/foods/irani/irani (1).png',
        tags:['irani','kebab','sonati']
      },
      {
        id:39,
        name:'irani 5',
        price:12,
        cookTime:'17-21',
        favorite:true,
        origins:['irani','kebab','sonati'],
        stars:2.3,
        imageUrl:'/assets/images/foods/irani/irani (1).jpeg',
        tags:['irani','kebab','sonati']
      },
      {
        id:40,
        name:'hamber 1 ',
        price:12,
        cookTime:'17-21',
        favorite:true,
        origins:['hamberger','fastfood'],
        stars:2.3,
        imageUrl:'/assets/images/foods/hamber/hamber (1).jpeg',
        tags:['hamberger','fastfood']
      },
      {
        id:41,
        name:'hamber 2',
        price:12,
        cookTime:'17-21',
        favorite:true,
        origins:['hamberger','fastfood'],
        stars:2.3,
        imageUrl:'/assets/images/foods/hamber/hamber (2).jpeg',
        tags:['hamberger','fastfood']
      },
      {
        id:42,
        name:'hamber 3',
        price:12,
        cookTime:'17-21',
        favorite:true,
        origins:['hamberger','fastfood'],
        stars:2.3,
        imageUrl:'/assets/images/foods/hamber/hamber (2).jpg',
        tags:['hamberger','fastfood']
      },
      {
        id:43,
        name:'hamber 4',
        price:12,
        cookTime:'17-21',
        favorite:true,
        origins:['hamberger','fastfood'],
        stars:2.3,
        imageUrl:'/assets/images/foods/hamber/hamber (3).jpg',
        tags:['hamberger','fastfood']
      },
      {
        id:44,
        name:'hamber 5',
        price:12,
        cookTime:'17-21',
        favorite:true,
        origins:['hamberger','fastfood'],
        stars:2.3,
        imageUrl:'/assets/images/foods/hamber/hamber (1).jpg',
        tags:['hamberger','fastfood']
      },
      {
        id:45,
        name:'Fast Food  1',
        price:12,
        cookTime:'17-21',
        favorite:true,
        origins:['singapore','malaysiaa'],
        stars:2.3,
        imageUrl:'/assets/images/foods/fastfood/fast (1).jpeg',
        tags:['fastfood','sandwich','hamberger']
      },
      {
        id:46,
        name:'Fast Food  2',
        price:12,
        cookTime:'17-21',
        favorite:true,
        origins:['singapore','malaysiaa'],
        stars:2.3,
        imageUrl:'/assets/images/foods/fastfood/fast (2).jpeg',
        tags:['fastfood','sandwich','hamberger']
      },
      {
        id:47,
        name:'Fast Food  3',
        price:12,
        cookTime:'17-21',
        favorite:true,
        origins:['singapore','malaysiaa'],
        stars:2.3,
        imageUrl:'/assets/images/foods/fastfood/fast (2).jpg',
        tags:['fastfood','sandwich','hamberger']
      },
      {
        id:48,
        name:'Fast Food  4',
        price:12,
        cookTime:'17-21',
        favorite:true,
        origins:['singapore','malaysiaa'],
        stars:2.3,
        imageUrl:'/assets/images/foods/fastfood/fast (1).jpg',
        tags:['fastfood','sandwich','hamberger']
      },
      
    
    ]
 
  }

}
