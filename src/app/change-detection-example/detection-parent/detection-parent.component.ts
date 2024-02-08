import { Component, OnInit } from '@angular/core';
import { GetProductsService } from '../services/get-products.service';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ChangeDetectionComponent } from '../change-detection/change-detection.component';
import { FormsModule } from '@angular/forms';
import { MatProgressSpinner } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-detection-parent',
  standalone: true,
  host: {ngSkipHydration: 'true'},
  imports: [CommonModule, HttpClientModule,ChangeDetectionComponent,FormsModule,MatProgressSpinner],
  templateUrl: './detection-parent.component.html',
  styleUrl: './detection-parent.component.css',
})
export class DetectionParentComponent implements OnInit {
  productList : Product[] = [];
  isDataLoaded = false;
  removeProductID =  '';
  constructor(private getProductsService: GetProductsService) {}
  ngOnInit(): void {
    this.getProductsService.LoadData().subscribe(
      (response: Product[]) => {
         this.productList = response;
         this.isDataLoaded = true
      } 
    );
  }

  removeProduct(){
    this.removeProductID
    let index = this.productList.findIndex(x => x.id ===  Number(this.removeProductID));
    debugger
    this.productList.splice(index,1)
  }
  resetTolatest(){
    let temp  = [...this.productList];
    this.productList =temp;
  }
  
}


export interface Product {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: Rating
}

export interface Rating {
  rate: number
  count: number
}
