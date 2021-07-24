import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    url = 'http://localhost:3000/api/';

    constructor(private http: HttpClient) {
    }

    getAuthors(): Observable<any> {
        return this.http.get<any>(this.url + 'get-authors');
    }

    getBooks(): Observable<any> {
        return this.http.get<any>(this.url + 'get-books');
    }

    getEditorials(): Observable<any> {
        return this.http.get<any>(this.url + 'get-editorials');
    }

    // getClient(id: string): Observable<any> {
    //     return this.http.get<any>(this.url + 'client/id');
    // }

    // addClient(client: Client): Observable<any> {
    //     console.log(client);
    //     // const headers = { 'content-type': 'application/json'}  
    //     // const body=JSON.stringify(client);
    //     return this.http.post<Client>(this.url + 'add-client', client)
    // }
}

