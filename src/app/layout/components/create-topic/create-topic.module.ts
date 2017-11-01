import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateTopicRoutingModule } from './create-topic-routing.module';
import { CreateTopicComponent } from './create-topic.component';
import { PageHeaderModule } from '../../../shared';
import { Topic } from 'app/layout/models/Topic';
import { OrderModule } from 'ngx-order-pipe';

@NgModule({
    imports: [
        CommonModule,
        CreateTopicRoutingModule,
        PageHeaderModule,Topic,OrderModule
    ],
    declarations: [CreateTopicComponent]
})
export class CreateTopicModule { }
