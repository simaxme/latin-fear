import {Component, OnDestroy, OnInit} from '@angular/core';
import {PageService} from "../../services/page.service";
import {debounceTime, Subject, takeUntil} from "rxjs";
import {animateNGIf} from "../../animations/ngIfAnimation";

@Component({
  selector: 'app-interaction',
  templateUrl: './interaction.component.html',
  styleUrls: ['./interaction.component.scss'],
  animations: [
    animateNGIf(1, {
      opacity: 0
    }, {
      opacity: 1
    }),
    animateNGIf(2, {
      width: "0px"
    }, {
      width: "15rem"
    }, "animateButton")
  ]
})
export class InteractionComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();

  private prompt$: Subject<void> = new Subject<void>();

  public showPrompt = true;
  public isClickbable = true;

  constructor(
    public pageService: PageService
  ) {
    document.addEventListener("click", () => this.isClickbable && this.onClick());
  }

  public ngOnInit() {
    this.prompt$.pipe(takeUntil(this.destroy$), debounceTime(10*1000)).subscribe(() => {
      this.showPrompt = true;
    });

    this.pageService.step$.pipe(takeUntil(this.destroy$)).subscribe((step) => {
      const page = this.pageService.stepToPage(step);
      const element = this.pageService.pages[page.page];
      this.isClickbable = element === undefined || element?.type === "document";
    });
  }

  public onClick(): void {
    this.showPrompt = false;
    this.prompt$.next();

    this.pageService.nextStep();
  }

  public ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
