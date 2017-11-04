import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../models/Category';
import { CategoryComponent } from '../category/category.component';
@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss'],
  providers: [CategoryService]
})
export class CategoryListComponent implements OnInit {

  public categories: Array<Category> = [];
  constructor(private categoryService: CategoryService) {
    this.categoryService.getAllCategories().subscribe(categories => this.categories = categories);

  }

  ngOnInit() {
  }

  onElementDeleted(element) {
    var index = this.categories.findIndex((elt) => (elt === element));
    if (index != -1) {
      this.categories.splice(index, 1);
    }

  }
}
