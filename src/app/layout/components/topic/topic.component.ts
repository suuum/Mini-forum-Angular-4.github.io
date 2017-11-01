import { Component, OnInit, Input, Output } from '@angular/core';
import { Topic } from 'app/layout/models/Topic';
import { TopicService } from 'app/layout/services/topic.service';
import { EventEmitter } from "@angular/core";

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss'],
  providers: [TopicService]
})
export class TopicComponent implements OnInit {
  @Input('topic') topic: Topic;
  @Output()
  elementDeleted: EventEmitter<any> = new EventEmitter();

  deleteElement() {

  }
  constructor(private topicService: TopicService) {

  }

  ngOnInit() {
  }

  Delete(id: string) {

    this.topicService.deleteTopic(id);
    this.elementDeleted.emit();
  }

}
