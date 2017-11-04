import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopicsRoutingModule } from './topics-routing.module';
import { TopicListComponent } from './topic-list.component';
import { TopicComponent } from '../topic/topic.component';
import { PageHeaderModule } from '../../../shared';
import { OrderModule } from 'ngx-order-pipe';
import { CreateTopicComponent } from 'app/layout/components/create-topic/create-topic.component';
import {CKEditorModule} from 'ng2-ckeditor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        TopicsRoutingModule,
        PageHeaderModule,OrderModule, FormsModule, ReactiveFormsModule,CKEditorModule
    ],
    declarations: [TopicComponent,TopicListComponent,CreateTopicComponent]
})
export class TopicsModule { }
