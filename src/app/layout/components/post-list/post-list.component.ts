import { Component, OnInit } from "@angular/core";
import { PostService } from "app/layout/services/post.service";
import { Post } from "app/layout/models/Post";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

@Component({
  selector: "app-post-list",
  templateUrl: "./post-list.component.html",
  styleUrls: ["./post-list.component.scss"],
  providers: [PostService]
})
export class PostListComponent implements OnInit {
  id: string;
  posts: Array<Post>;
  constructor(
    private postService: PostService,
    private route: ActivatedRoute,
    private _location: Location
  ) {
    this.route.params.subscribe(params => {
      this.id = params["id"];
      console.log("To jest id ktore powinno iść" + this.id);
    });
    this.postService.getAllPost(this.id).subscribe(
      success => {
        this.posts = success as Array<Post>;
        console.log(this.posts);
        for (let i = 0; i < this.posts.length; i++) {
          this.postService
            .getPostUser(this.posts[i].author)
            .subscribe(user => (this.posts[i].user = user));
        }

        for (let i = 0; i < this.posts.length; i++) {
          console.log(this.posts[i].user);
        }
      },
      error => console.log("login did not work!")
    );
  }

  backClicked() {
    this._location.back();
  }

  ngOnInit() {}

  onElementDeleted(element) {
    const index = this.posts.findIndex(elt => elt === element);
    if (index !== -1) {
      this.posts.splice(index, 1);
    }
  }
}
