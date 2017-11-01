import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreatePostRoutingModule } from './create-post-routing.module';
import { CreatePostComponent } from './create-post.component';
import { PageHeaderModule } from '../../../shared';
import { Post } from 'app/layout/models/Post';
import { OrderModule } from 'ngx-order-pipe';

@NgModule({
    imports: [
        CommonModule,
        CreatePostRoutingModule,
        PageHeaderModule,Post,OrderModule
    ],
    declarations: [CreatePostComponent]
})
export class CreatePostModule { }
