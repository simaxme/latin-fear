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
    })
  ]
})
export class InteractionComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();

  private prompt$: Subject<void> = new Subject<void>();

  public showPrompt = true;

  constructor(
    public pageService: PageService
  ) { }

  public ngOnInit() {
    this.prompt$.pipe(takeUntil(this.destroy$), debounceTime(15*1000)).subscribe(() => {
      this.showPrompt = true;
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
