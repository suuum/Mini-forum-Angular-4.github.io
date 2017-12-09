import { User } from './../models/User';
import { Injectable } from '@angular/core';

import { Post } from '../models/Post';

import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import { Router } from '@angular/router';
@Injectable()
export class PostService {
    apiLink = 'https://gamersoc-backend.herokuapp.com/';

    constructor(private http: Http, private router: Router) {
        this.router = router;
    }

    getAllPost(id: string): Observable<Post[]> {
        const options = new RequestOptions({ withCredentials: true });
        return this.http.get(this.apiLink + 'messaging/posts?threadId=' + id, options)
            .map((response: Response) => <Post[]>response.json())
            .catch(this.handleError);
    }

    getPostUser(id: string): Observable<User> {
        const options = new RequestOptions({ withCredentials: true });
        return this.http.get(this.apiLink + 'users/find/id?email=' + id, options)
            .map((response: Response) => <User>response.json())
            .catch(this.handleError);
    }

    createPost(post: Post, threadId: String): void {

        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers, withCredentials: true});
        const body = JSON.stringify(post);
        console.log(body);
        this.http.post(this.apiLink + 'messaging/posts?threadId=' + threadId, body, options)
            .subscribe();
    }

    deletePost(id: string): void {
        const options = new RequestOptions({ withCredentials: true });
        this.http.delete(this.apiLink + 'messaging/posts?postId=' + id, options)
            .catch(this.handleError).subscribe();
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        console.log(error.status);
        //  window.location.href = "/login";
        if (error.status === '401') { window.location.href = '/login'; }
        return Promise.reject(error.message || error);
    }
}
