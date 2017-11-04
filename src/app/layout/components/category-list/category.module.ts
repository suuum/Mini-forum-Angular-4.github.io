import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { PageHeaderModule } from '../../../shared';
//import { Category } from 'app/layout/models/Category';
import { OrderModule } from 'ngx-order-pipe';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        CategoryRoutingModule,
        PageHeaderModule,OrderModule, FormsModule, ReactiveFormsModule
    ],
    declarations: []
})
export class CategoryModule { }
