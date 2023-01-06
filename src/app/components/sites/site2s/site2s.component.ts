import {Component, OnDestroy, OnInit} from '@angular/core';
import {interval, Subject, takeUntil} from "rxjs";
import {animateNGIf, animateNGIf3Steps} from "../../../animations/ngIfAnimation";

@Component({
  selector: 'app-site2s',
  templateUrl: './site2s.component.html',
  styleUrls: ['./site2s.component.scss'],
  animations: [
    animateNGIf(4, {
      opacity: 0
    }, {
      opacity: 1
    }),
    animateNGIf(4, {
      opacity: 0
    }, {
      opacity: 0.3
    }, "imageAnimation"),
    animateNGIf3Steps(2, {
      opacity: 1
    }, {
      opacity: 1
    }, {
      opacity: 0
    }, "animateLabel")
  ]
})
export class Site2sComponent implements OnDestroy {
  public destroy$: Subject<void> = new Subject<void>();

  public init = 0;

  public step = 0;

  public triggerActive() {
    interval(1000).pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.init++;
    });
  }

  public ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
