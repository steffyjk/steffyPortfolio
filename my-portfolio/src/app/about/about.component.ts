import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  products:any;
  ngOnInit() {
    this.products = [
      {
        name: "John",
        rating: 4,
        inventoryStatus: "INSTOCK",
        category: "Java Developer",
        price: 120000
      },
      {
        name: "Alice",
        rating: 3,
        inventoryStatus: "LOWSTOCK",
        category: "Frontend Developer",
        price: 100000
      },
      {
        name: "Bob",
        rating: 2,
        inventoryStatus: "OUTOFSTOCK",
        category: "Backend Developer",
        price: 80000
      },
      {
        name: "Emma",
        rating: 4,
        inventoryStatus: "INSTOCK",
        category: "Data Scientist",
        price: 150000
      },
      {
        name: "Michael",
        rating: 5,
        inventoryStatus: "INSTOCK",
        category: "DevOps Engineer",
        price: 130000
      }
    ];
    
    // this.products = [
    //   {
    //     name:"steffy",
    //     rating:5,
    //     inventoryStatus:"INSTOCK",
    //     category:"python developer",
    //     price:152000
    //   },
    // ]
  }

  getSeverity(product: any): string | undefined {
    switch (product.inventoryStatus) {
      case 'INSTOCK':
        return 'success';
  
      case 'LOWSTOCK':
        return 'warning';
  
      case 'OUTOFSTOCK':
        return 'danger';
  
      default:
        return undefined; 
    }
  }
  
}
