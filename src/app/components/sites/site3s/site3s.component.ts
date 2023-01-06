import {Component, OnDestroy, OnInit} from '@angular/core';
import {interval, Subject, takeUntil} from "rxjs";
import {animateNGIf} from "../../../animations/ngIfAnimation";

@Component({
  selector: 'app-site3s',
  templateUrl: './site3s.component.html',
  styleUrls: ['./site3s.component.scss'],
  animations: [
    animateNGIf(1, {
      opacity: 0,
      transform: "translateY(-100%)"
    }, {
      opacity: 1,
      transform: "translateY(0%)"
    }, "animateWave")
  ]
})
export class Site3sComponent implements OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();

  public step: number = 0;
  public init: number = 0;

  public triggerActive() {
    interval(1000).pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.init++;
    });
  }

  public destroy() {
    this.destroy$.next();
  }

  public ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
