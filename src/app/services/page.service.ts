import { Injectable } from '@angular/core';
import {BehaviorSubject, map, Observable} from "rxjs";
import {PageComponent} from "../components/page/page.component";

@Injectable({
  providedIn: 'root'
})
export class PageService {
  public step$: BehaviorSubject<number> = new BehaviorSubject<number>(1);

  public pages: {[key: number]: PageComponent} = {}

  constructor() {
    (<any>window).nextStep = () => this.nextStep();
    (<any>window).prevStep = () => this.prevStep();
    this.step$.subscribe(page => console.warn(page));
  }

  public prevStep(): void {
    const value = this.step$.getValue();
    if (value <= 1) return;
    this.step$.next(value-1);
  }
  public nextStep(): void {
    const value = this.step$.getValue();
    if (value >= this.getMaxSteps()) return;
    this.step$.next(value+1);
  }

  private getMaxSteps(): number {
    let steps = 0;
    this.getPages().forEach(page => steps+=page.steps);
    return steps;
  }

  public getPages(): PageComponent[] {
    const count = Object.keys(this.pages).length;
    const c: PageComponent[] = [];
    for (let i = 1; i <= count; i++) {
      c.push(this.pages[i]);
    }
    return c;
  }

  public registerSite(site: PageComponent, index: number): void {
    // this.pages.push(site);
    this.pages[index] = site;
  }

  public stepToPage(step: number): {page: number, pageStep: number} {
    let stepRemaining = step;
    let pageCount = 1;
    for (const page of this.getPages()) {
      if (stepRemaining > page.steps) {
        stepRemaining -= page.steps;
      } else {
        return {
          page: pageCount,
          pageStep: stepRemaining
        };
      }
      pageCount++;
    }
    return {
      page: -1,
      pageStep: -1
    };
  }
}
