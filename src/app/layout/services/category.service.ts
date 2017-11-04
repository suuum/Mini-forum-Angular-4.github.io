import { Injectable } from '@angular/core';

import { Category } from '../models/Category';
import { CATEGORIES } from '../mocks/mock-category';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import { Router } from '@angular/router';
@Injectable()
export class CategoryService {
    apiLink = 'https://gamersoc-backend.herokuapp.com/';

    constructor(private http: Http, private router: Router) {
        this.router = router;
    }
    getCategories(): Promise<Category[]> {
        return Promise.resolve(CATEGORIES);
    }
    logout() {
        this.http.get('https://gamersoc-backend.herokuapp.com/logout').subscribe(data => {
        });

    }
    getAllCategories(): Observable<Category[]> {
        let options = new RequestOptions({ withCredentials: true });
        return this.http.get(this.apiLink + 'messaging/sections', options)
            .map((response: Response) => <Category[]>response.json())
            .catch(this.handleError);
    }

    createCategory(category: Category): void {

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers, withCredentials: true });
        let body = JSON.stringify(category);
        console.log(body);
        this.http.post(this.apiLink + 'messaging/sections', body, options)
            .catch(this.handleError)
            .subscribe();

    }

    deleteCategory(id: string): void {
        console.log(id);
        let options = new RequestOptions({ withCredentials: true });
        this.http.delete(this.apiLink + 'messaging/sections?sectionId=' + id, options)
            .catch(this.handleError).subscribe();
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        console.log(error.status);
        if (error.status == "401") { window.location.href = "/login"; }
        return Promise.reject(error.message || error);
    }
}