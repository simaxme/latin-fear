import {Component, OnDestroy, OnInit} from '@angular/core';
import {interval, Subject, takeUntil, timer} from "rxjs";
import {animateNGIf} from "../../../animations/ngIfAnimation";

@Component({
  selector: 'app-site1s',
  templateUrl: './site1s.component.html',
  styleUrls: ['./site1s.component.scss'],
  animations: [
    animateNGIf(1, {
      opacity: 0
    }, {
      opacity: 1
    })
  ]
})
export class Site1sComponent implements OnInit, OnDestroy {
  public destroy$: Subject<void> = new Subject<void>();

  public init = 0;

  public step = 0;

  public ngOnInit() {
    interval(1000).pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.init++;
    });
  }

  public ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
