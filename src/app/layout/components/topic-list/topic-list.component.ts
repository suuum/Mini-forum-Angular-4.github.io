import { Component, OnInit } from '@angular/core';
import { TopicService } from 'app/layout/services/topic.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Topic } from 'app/layout/models/Topic';

@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.scss'],
  providers: [TopicService]
})
export class TopicListComponent implements OnInit {
  id: string;
  topics: Array<Topic>;
  order: string = 'sticky';
  constructor(private topicService: TopicService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    
    this.topicService.getTopicsByCategoryID(this.id).subscribe(topics => {
      this.topics= topics.sort(function (a, b) {
        let first:number = a.sticky==true?1:0;
        let second:number = b.sticky==true?1:0;
          if((first>second) )
         {
           return 1;
        }
         if(first<second){
           return -1;
         }
        
         return 0;
        });
      
     // this.topics = topics;    console.log(this.topics);
    });
  
  }

  onElementDeleted(element) {
    var index = this.topics.findIndex((elt) => (elt === element));
    if (index != -1) {
      this.topics.splice(index, 1);
    }

  }

  ngOnInit() {
  }

}
