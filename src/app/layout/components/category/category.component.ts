import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Category } from 'app/layout/models/Category';
import { CategoryService } from 'app/layout/services/category.service';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  @Input('category') category: Category;
  @Output('elementDeleted') elementDeleted: EventEmitter<any> = new EventEmitter();
  constructor(private categoryService: CategoryService) {
    console.log(this.category);
  }

  ngOnInit() {
  }

  Delete(id: string) {

    this.categoryService.deleteCategory(id);
    this.elementDeleted.emit();
  }
}
