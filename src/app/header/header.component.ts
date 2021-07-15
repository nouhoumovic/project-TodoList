import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit , OnDestroy{
  secondesSubSub: Subscription;
  salutationSub: Subscription;
  secondes: number;
  constructor() { }

  ngOnInit(): void {
    const salutation = new Observable((observer) => {
      observer.next("hello ");
      observer.next("world !");
      observer.complete();
    });

   /*  const secondesSub = interval(1000)



     this.secondesSubSub = secondesSub.subscribe(
       (value: number) => {
         this.secondes = value;
        console.log(value);
      },
     ); */

  }
  ngOnDestroy():void {
    this.secondesSubSub.unsubscribe();


    }

}
