import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, switchMap, timer } from 'rxjs';
import { UserService } from './app.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  subscription!: Subscription;
  // statusText: any;

  constructor(private myService: UserService){}

  ngOnInit(): void {
    this.subscription = timer(0, 4000).pipe(
      switchMap(() => this.myService.getData())
    ).subscribe(result => console.log(result));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
