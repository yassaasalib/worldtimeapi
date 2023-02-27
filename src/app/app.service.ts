import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable({
    providedIn: 'root', 
})
export class UserService {
    // checkdata() {
    //   throw new Error('Method not implemented.');
    // }
    constructor(private http: HttpClient){}

    getData() {
        let url='http://worldtimeapi.org/api/timezone/Africa/Abidjan'
        return this.http.get(url)
    }
}