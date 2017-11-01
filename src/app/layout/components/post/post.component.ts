import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'app/layout/models/Post';
import { PostService } from 'app/layout/services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  providers: [PostService]
})
export class PostComponent implements OnInit {

  @Input('post') post:Post;
  constructor() { }

  ngOnInit() {
  }

}
