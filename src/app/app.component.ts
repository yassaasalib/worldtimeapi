import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  apiResult: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.callApi();
  }

  callApi() {
    setInterval(() => {
      this.getData().subscribe(
        (result) => {
          this.apiResult = result;
        },
        (error) => {
          console.error(error);
        }
      );
    }, 4000);
  }

  getData(): Observable<any> {
    return this.http.get('http://worldtimeapi.org/api/timezone/Africa/Abidjan').pipe(
      switchMap((result) => {
        return of(result);
      }),
      catchError((error: any) => {
        console.error(error);
        return of(null);
      })
    );
  }
}
