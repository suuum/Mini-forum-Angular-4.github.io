import { Injectable } from '@angular/core';

import { Post } from '../models/Post';

import { Http, Response, RequestOptions,Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import { Router } from '@angular/router';
@Injectable()
export class PostService {
    apiLink = 'https://gamersoc-backend.herokuapp.com/';

    constructor(private http: Http,private router: Router) {
        this.router = router;
    }

    getAllPost(id:string): Observable<Post[]> {
        let options = new RequestOptions({ withCredentials: true });
        return this.http.get(this.apiLink + 'messaging/posts?threadId='+id,options)
            .map((response: Response) => <Post[]>response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    createPost(post:Post): void {
   
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers,withCredentials: true });
    let body = JSON.stringify(post);
    console.log(body);
    this.http.post(this.apiLink + 'messaging/posts', body, options )
   .subscribe(  );

        this.http.post(this.apiLink + 'messaging/posts',post)            
            .catch(this.handleError);
    }

    deletePost(id:string): Observable<Post[]> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers,withCredentials: true });
        return this.http.delete(this.apiLink + 'messaging/posts?postId='+id)
            .map((response: Response) => <Post[]>response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }


    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        console.log(error.status);
      //  window.location.href = "/login";
      if(error.status=="401") {window.location.href = "/login";}
      return Promise.reject(error.message || error);
    }
}