import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import { Employee } from '../models/employee';
import { filter, map, take } from 'rxjs/operators';

@Injectable()
export class ReferenceService {

    constructor(private http: Http) { }

    getAllEmployees(): Observable<any> {
        try {
            return this.http.get('https://jsonplaceholder.typicode.com/photos').
                map(this.extractData).map(res => res.slice(0, 10))
                .catch(this.handleError);
        } catch (error) { console.log(error); }
    }
    extractData(res: any) {
        const body = res.json();
        console.log(body);
        return body || {};
    }
    handleError(error: any) {
        const errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server   error';
        return Observable.throw(error);
    }

}
