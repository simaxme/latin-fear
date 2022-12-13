import {Component, Input, TemplateRef} from '@angular/core';

@Component({
  selector: 'app-wave',
  templateUrl: './wave.component.html',
  styleUrls: ['./wave.component.scss']
})
export class WaveComponent {
  @Input() public template?: TemplateRef<any>;
}
