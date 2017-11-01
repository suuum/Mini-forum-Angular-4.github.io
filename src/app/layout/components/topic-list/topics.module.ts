import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopicsRoutingModule } from './topics-routing.module';
import { TopicListComponent } from './topic-list.component';
import { TopicComponent } from '../topic/topic.component';
import { PageHeaderModule } from '../../../shared';
import { OrderModule } from 'ngx-order-pipe';
import { CreateTopicComponent } from 'app/layout/components/create-topic/create-topic.component';

@NgModule({
    imports: [
        CommonModule,
        TopicsRoutingModule,
        PageHeaderModule,OrderModule
    ],
    declarations: [TopicComponent,TopicListComponent,CreateTopicComponent]
})
export class TopicsModule { }
