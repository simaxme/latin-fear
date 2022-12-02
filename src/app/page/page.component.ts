import {Component, Host, Inject, Input, OnDestroy, OnInit} from '@angular/core';
import {debounceTime, fromEvent, Subject, takeUntil} from "rxjs";
import {AppComponent} from "../app.component";
import {intervalProvider} from "rxjs/internal/scheduler/intervalProvider";

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();

  // height is relative
  @Input() public height!: number;
  @Input() public transitionHeight!: number;

  public readProgress: number = 0;

  public hide = true;

  private position!: number;

  private positionPx = 0;
  private heightPx = 0;
  private transitionHeightPx = 0;

  public progress = 0;

  constructor(
    @Inject(AppComponent) private appComponent: AppComponent
  ) {
    fromEvent(window, "resize").pipe(takeUntil(this.destroy$), debounceTime(300)).subscribe(() => {
      this.calcGeometry();
    });
    fromEvent(window, "scroll").pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.handleScroll();
    });
  }


  public ngOnInit() {
    this.position = this.appComponent.registerComponent(this);

    this.calcGeometry();
    this.handleScroll();
  }

  private calcGeometry(): void {
    this.heightPx = window.innerHeight * this.height;
    this.positionPx = window.innerHeight * this.position;
    this.transitionHeightPx = window.innerHeight * this.transitionHeight;
  }

  private handleScroll(): void {
    let min = this.positionPx - this.transitionHeightPx;
    const minComplete = this.positionPx;
    let maxComplete = this.positionPx + this.heightPx - this.transitionHeightPx;
    let max = this.positionPx + this.heightPx;

    if (this.position === 0) {
      maxComplete = this.positionPx + this.heightPx - 2*this.transitionHeightPx;
      max = this.positionPx + this.heightPx;
    }

    const scroll = window.scrollY;

    this.hide = scroll < min || scroll > max;

    if (!this.hide) {
      let progress = 0;
      if (scroll < minComplete) {
        progress = (1 - (scroll - min) / (minComplete - min));
        this.readProgress = 0;
      } else if (scroll > maxComplete) {
        this.readProgress = 1;
        progress = -((scroll - maxComplete) / (max - maxComplete));
      } else {
        progress = 0;
        this.readProgress = (scroll - minComplete) / (maxComplete - minComplete);
      }
      this.progress = progress;
    }
  }

  public ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
