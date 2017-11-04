import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Post } from 'app/layout/models/Post';
import { PostService } from 'app/layout/services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  providers: [PostService]
})
export class PostComponent implements OnInit {

  @Input('post') post: Post;
  @Output()
  elementDeleted: EventEmitter<any> = new EventEmitter();
  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  Delete(id: string) {
console.log("post id:" +id);
    this.postService.deletePost(id);
    this.elementDeleted.emit();
  }
}
