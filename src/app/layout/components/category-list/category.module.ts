import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { CategoryListComponent } from './category-list.component';
import { PageHeaderModule } from '../../../shared';
import { Category } from 'app/layout/models/Category';
import { OrderModule } from 'ngx-order-pipe';

@NgModule({
    imports: [
        CommonModule,
        CategoryRoutingModule,
        PageHeaderModule,Category,OrderModule
    ],
    declarations: [CategoryListComponent]
})
export class CategoryModule { }
