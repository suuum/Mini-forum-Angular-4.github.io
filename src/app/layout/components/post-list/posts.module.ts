import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostListComponent } from './post-list.component';
import { PostComponent } from '../post/post.component';
import { PageHeaderModule } from '../../../shared';
import { OrderModule } from 'ngx-order-pipe';
import { CreatePostComponent } from 'app/layout/components/create-post/create-post.component';
import { CKEditorModule } from 'ng2-ckeditor';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        PostsRoutingModule,
        PageHeaderModule,
        OrderModule,CKEditorModule,FormsModule,ReactiveFormsModule
    ],
    declarations: [PostComponent,PostListComponent,CreatePostComponent]
})
export class PostsModule { }
