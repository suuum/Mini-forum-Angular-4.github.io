import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TopicListComponent } from './topic-list.component';
import { CreateTopicComponent } from 'app/layout/components/create-topic/create-topic.component';


const routes: Routes = [
    { path: '', component: TopicListComponent },
    { path: 'createTopic/:id', component: CreateTopicComponent  },
    { path: ':id', component: TopicListComponent  }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TopicsRoutingModule { }
