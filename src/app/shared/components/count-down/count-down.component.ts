import { Component, Input, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { map, takeWhile,tap } from 'rxjs/operators'

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.css']
})
export class CountDownComponent implements OnInit {
  @Input() startDate: Date = new Date();
  @Input() futureDate: Date;
  private _MS_PER_SECOND = 1000;

  countDown$: Observable<string>;

  constructor() { }

  ngOnInit() {
    this.countDown$ = this.getCountDownObservable(this.startDate, this.futureDate);
  }

  private diffInSec(start: Date, future: Date): number {
    const diff = future.getTime() - start.getTime();
    return Math.floor(diff / this._MS_PER_SECOND);
  }

  private getCountDownObservable(start:Date,future:Date){
   return interval(1000).pipe(
      map(elapse => this.diffInSec(start, future) - elapse),
      takeWhile(gap => gap >= 0),
      tap(val=>console.log(val)),
      map(sec => ({
        day: Math.floor(sec / 3600 / 24),
        hour: Math.floor(sec / 3600 % 24),
        minute: Math.floor((sec / 60) % 60),
        second: Math.floor(sec % 60)
      })),
      map(({day,hour,minute,second}) => `${day}:${hour}:${minute}:${second}`)
      );
  }


}
