import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostListComponent } from './post-list.component';
import { CreatePostComponent } from 'app/layout/components/create-post/create-post.component';


const routes: Routes = [
    { path: 'createPost/:id', component: CreatePostComponent },
    { path: ':id', component: PostListComponent  }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PostsRoutingModule { }
