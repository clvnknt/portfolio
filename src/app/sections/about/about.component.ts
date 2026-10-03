import { Component } from '@angular/core';
import { EXPERIENCE } from '../../data/experience';

@Component({
  selector: 'app-about',
  template: `
    <app-section id="about" heading="About Me">
      <ol class="items-center sm:flex">
        <app-timeline-item
          *ngFor="let entry of experience"
          [entry]="entry"
        ></app-timeline-item>
      </ol>
    </app-section>
  `,
})
export class AboutComponent {
  readonly experience = EXPERIENCE;
}
