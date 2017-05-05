import { Injectable } from '@angular/core';
import { Headers, Http, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Item } from './item';

@Injectable()
export class ItemsService {
    private API_ENDPOINT = 'https://sentiment-journal-backend-workshop-demo.mybluemix.net/api/items'; // TODO: set this to point to backend API http://<host>.mybluemix.net/api/items

    constructor(private http: Http) {
        if(this.API_ENDPOINT == '') {
            alert('API Endpoint in items.service.ts has not been set!');
        }
    }

    getItems(): Promise<Item[]> {
        return this.http.get(this.API_ENDPOINT)
            .toPromise()
            .then(response => response.json() as Item[])
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    addItem(item:string): Promise<Item> {
        const body = new URLSearchParams();
        body.set('text', item);

        return this.http.post(this.API_ENDPOINT, body, {headers: new Headers({'Content-Type': 'application/x-www-form-urlencoded'})})
        .toPromise()
        .then(response => response.json() as Item);
    }
}
