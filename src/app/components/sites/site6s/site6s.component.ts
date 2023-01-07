import { Component } from '@angular/core';
import {interval, Subject, takeUntil, timer} from "rxjs";
import {animateNGIf} from "../../../animations/ngIfAnimation";

@Component({
  selector: 'app-site6s',
  templateUrl: './site6s.component.html',
  styleUrls: ['./site6s.component.scss'],
  animations: [
    animateNGIf(2, {
      opacity: 0
    }, {
      opacity: 1
    })
  ]
})
export class Site6sComponent {
  private destroy$: Subject<void> = new Subject<void>();

  public step: number = 0;
  public init: number = 0;

  public triggerActive() {
    interval(1000).pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.init++;
    });
  }

  public onStep(step: number) {
    if (step === 2) {
      timer(5000).pipe(takeUntil(this.destroy$)).subscribe(() => {
        window.location.reload();
      });
    }
  }

  public destroy() {
    this.destroy$.next();
  }

  public ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
