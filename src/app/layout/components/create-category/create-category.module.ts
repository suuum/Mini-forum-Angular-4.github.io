import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateCategoryRoutingModule } from './create-category-routing.module';
import { CreateCategoryComponent } from './create-category.component';
import { PageHeaderModule } from '../../../shared';
import { Category } from 'app/layout/models/category';
import { OrderModule } from 'ngx-order-pipe';

@NgModule({
    imports: [
        CommonModule,
        CreateCategoryRoutingModule,
        PageHeaderModule,Category,OrderModule
    ],
    declarations: [CreateCategoryComponent]
})
export class CreateCategoryModule { }
