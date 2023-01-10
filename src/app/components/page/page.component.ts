import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output
} from '@angular/core';
import {PageService} from "../../services/page.service";
import {Subject, takeUntil} from "rxjs";
import {animateNGIf3Steps} from "../../animations/ngIfAnimation";

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
  animations: [
    animateNGIf3Steps(0.5, {
      right: "-100%",
      opacity: "100%"
    }, {
      right: "0%",
      opacity: "100%"
    }, {
      right: "100%",
      opacity: "0%"
    })
  ]
})
export class PageComponent implements OnInit, AfterViewInit, OnDestroy {
  public destroy$: Subject<void> = new Subject<void>();

  @Input() public index!: number;

  @Input() public steps: number = 1;

  @Input() public active: boolean = false;
  @Output() public activeUpdate: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Input() public step: number = 0;
  @Output() public stepChange: EventEmitter<number> = new EventEmitter<number>();

  @Input() public type: "document" | "document_button" = "document";


  constructor(
    private pageService: PageService,

    private changeDetectorRef: ChangeDetectorRef
  ) {
  }

  public ngOnInit() {
    this.pageService.registerSite(this, this.index);
  }

  public ngAfterViewInit() {
    this.pageService.step$.pipe(takeUntil(this.destroy$)).subscribe(step => {
      const activeSite = this.pageService.stepToPage(step);

      this.active = activeSite.page === this.index;
      this.activeUpdate.emit(this.active);

      this.step = activeSite.pageStep;
      this.stepChange.emit(this.active ? activeSite.pageStep : 0);

      this.changeDetectorRef.detectChanges();
    });
  }

  public ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
