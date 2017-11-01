import { Component, OnInit, Input } from '@angular/core';
import { Category } from 'app/layout/models/Category';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  @Input('category') category:Category;
  constructor() { 
    console.log(this.category);
  }

  ngOnInit() {
  }

}
