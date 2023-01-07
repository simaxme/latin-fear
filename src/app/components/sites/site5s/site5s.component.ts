import { Component } from '@angular/core';
import {interval, Subject, takeUntil} from "rxjs";
import {animateNGIf} from "../../../animations/ngIfAnimation";

@Component({
  selector: 'app-site5s',
  templateUrl: './site5s.component.html',
  styleUrls: ['./site5s.component.scss'],
  animations: [
    animateNGIf(2, {
      opacity: 0
    }, {
      opacity: 1
    })
  ]
})
export class Site5sComponent {
  private destroy$: Subject<void> = new Subject<void>();

  public step: number = 0;
  public init: number = 0;

  public words: string[] = [
    "Liebe",
    "Familie"
  ];

  public positions: number[][] = [
    [20, 20],
    [20, 20]
  ];

  private active = false;

  public ngOnInit() {
  }

  public triggerActive() {
    if (this.active) return;

    this.active = true;

    interval(1000).pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.init++;
    });


    interval(5000).pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.positions = this.positions.map(val => [20+(Math.random() * 60), 20+(Math.random()*60)]);
    });
  }

  public saveWord(element: HTMLInputElement) {
    const word = element.value;
    this.words.push(word);
    element.value = "";
    this.positions.push([Math.random() * 100, Math.random() * 100]);
  }

  public destroy() {
    this.destroy$.next();
  }

  public ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
