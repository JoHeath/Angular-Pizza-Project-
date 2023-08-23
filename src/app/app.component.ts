import { Component } from '@angular/core';
import { MenuItem } from './models/menu-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'menu';
  allMenuItems:MenuItem[] = [{
    Name: "Pizza Slice",
    Category: "Snack",
    Price: 2.50
  },
{
  Name: "Liter of Cola",
  Category: "Drinks",
  Price: 3.99
},
{
  Name: "Wings",
  Category: "Snack",
  Price: 8.99
},
{
  Name: "Baja Blast",
  Category: "Drinks",
  Price: 1.49
},
{
  Name: "Large Pizza",
  Category: "Dinner",
  Price: 3.99
},
{
  Name: "50 Wings Special",
  Category: "Dinner",
  Price: 38.99
}];


getByCategory(Cat:string):MenuItem[]{
  let result:MenuItem [] = [];
  this.allMenuItems.forEach((i:MenuItem) =>{
    
    if(Cat == i.Category)
    {
      result.push(i);      
    }
  });
  
    return result;  
  }
    
  
}





