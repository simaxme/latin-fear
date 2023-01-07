import { Component } from '@angular/core';
import {interval, Subject, takeUntil} from "rxjs";
import {animateNGIf} from "../../../animations/ngIfAnimation";

@Component({
  selector: 'app-site4s',
  templateUrl: './site4s.component.html',
  styleUrls: ['./site4s.component.scss'],
  animations: [
    animateNGIf(2, {
      opacity: 0
    }, {
      opacity: 1
    })
  ]
})
export class Site4sComponent {
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
