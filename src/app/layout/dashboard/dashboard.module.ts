import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    NgbCarouselModule,
    NgbAlertModule
} from '@ng-bootstrap/ng-bootstrap';


import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import {
    TimelineComponent,
    NotificationComponent,
    ChatComponent
} from './components';
import { StatModule } from '../../shared';
import { CategoryListComponent } from '../components/category-list/category-list.component';
import { CategoryComponent } from '../components/category/category.component';
import { PostComponent } from '../components/post/post.component';
import { PostListComponent } from '../components/post-list/post-list.component';
import { FormsModule } from '@angular/forms';
import {CKEditorModule} from 'ng2-ckeditor';
import { TopicComponent } from 'app/layout/components/topic/topic.component';
import { TopicListComponent } from 'app/layout/components/topic-list/topic-list.component';
import { CreateCategoryComponent } from 'app/layout/components/create-category/create-category.component';

@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        DashboardRoutingModule,
        StatModule,FormsModule,CKEditorModule
    ],
    declarations: [
        DashboardComponent,
        TimelineComponent,
        NotificationComponent,
        ChatComponent, 
        CategoryListComponent,
        CategoryComponent,CreateCategoryComponent
    ]
})
export class DashboardModule { }
