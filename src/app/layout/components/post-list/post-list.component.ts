import { Component, OnInit } from '@angular/core';
import { PostService } from 'app/layout/services/post.service';
import { Post } from 'app/layout/models/Post';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
  providers: [PostService]
})
export class PostListComponent implements OnInit {
  id: string;
  posts: Array<Post>;
  constructor(private postService: PostService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      console.log(this.id);
    });
    this.postService.getAllPost(this.id).subscribe(posts => this.posts = posts);

  }

  ngOnInit() {
  }

}
