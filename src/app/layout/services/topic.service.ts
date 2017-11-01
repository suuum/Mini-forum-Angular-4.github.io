import { Injectable } from '@angular/core';

import { Topic } from '../models/topic';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import { Router } from '@angular/router';

@Injectable()
export class TopicService {
    apiLink = 'https://gamersoc-backend.herokuapp.com/';

    constructor(private http: Http, private router: Router) {
        this.router = router;
    }

    getAllTopics(): Observable<Topic[]> {
        let options = new RequestOptions({ withCredentials: true });
        return this.http.get(this.apiLink + 'messaging/threads', options)
            .map((response: Response) => <Topic[]>response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }
    getTopicsByCategoryID(id: String): Observable<Topic[]> {
        let options = new RequestOptions({ withCredentials: true });
        return this.http.get(this.apiLink + 'messaging/threads?sectionId=' + id, options)
            .map((response: Response) => <Topic[]>response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    createTopic(topic: Topic): void {

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers, withCredentials: true });
        let body = JSON.stringify(topic);
        console.log(body);
        this.http.post(this.apiLink + 'messaging/threads', body, options)
            .catch(this.handleError)
            .subscribe();
    }

    deleteTopic(id: string): void {
        let options = new RequestOptions({ withCredentials: true });
        this.http.delete(this.apiLink + 'messaging/threads?threadId=' + id, options)
            .catch(this.handleError).subscribe();
    }


    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        console.log(error.status);
        if (error.status == "401") { window.location.href = "/login"; }
        return Promise.reject(error.message || error);
    }
}