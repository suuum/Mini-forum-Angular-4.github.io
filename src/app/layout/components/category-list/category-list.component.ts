import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../services/category.service';
import {Category} from '../../models/Category';
import { CategoryComponent } from '../category/category.component';
@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss'],
  providers: [CategoryService]
})
export class CategoryListComponent implements OnInit {

  public categories: Array<Category> =[];
  constructor(private categoryService: CategoryService) { 
    this.categoryService.getAllCategories().subscribe(categories => this.categories = categories);

  }
  Click(){
    console.log("dupa");
    let category:Category;
    category=new Category();
    category.description="dupa2";
    category.title="dupa 3";
    this.categoryService.logout();
  }
  ngOnInit() {
  }
}
