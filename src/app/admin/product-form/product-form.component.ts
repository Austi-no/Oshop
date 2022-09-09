import { Observable } from 'rxjs';
import { ProductService } from './../../service/product.service';
import { CategoryService } from './../../service/category.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  categories$;
  constructor(private categoryService: CategoryService, private productService:ProductService) { 
    this.categories$ = this.categoryService.getCategories().snapshotChanges()
  }

  ngOnInit(): void {
    
  }

  save(product:Product){
    console.log(product);
    this.productService.create(product)
  }




}
