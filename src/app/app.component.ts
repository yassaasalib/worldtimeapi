import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private http: HttpClient){}
  ngOnInit() {
    setInterval(() => this.callApi(), 4000);
  }
  data = []

  callApi() {
    this.http
      .get('http://worldtimeapi.org/api/timezone/Europe/Amsterdam')
      .subscribe((data) => {
        this.data = data
      });
  }
}
