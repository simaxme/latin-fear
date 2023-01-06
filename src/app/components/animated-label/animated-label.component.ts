import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {first, Subject, takeUntil, timer} from "rxjs";

@Component({
  selector: 'app-animated-label',
  templateUrl: './animated-label.component.html',
  styleUrls: ['./animated-label.component.scss']
})
export class AnimatedLabelComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();

  @Input() public content: string = "test";

  private index = 0;

  public toShow = "";

  public ngOnInit() {
    this.nextStep();
  }

  private nextStep(): void {
    timer(Math.random() * 250).pipe(takeUntil(this.destroy$), first()).subscribe(() => {
      this.toShow += this.content[this.index];

      this.index++;

      if (this.index >= this.content.length) {
        return;
      }

      this.nextStep();
    });
  }

  public ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
