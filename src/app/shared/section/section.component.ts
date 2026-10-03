import { Component, Input } from '@angular/core';

/**
 * Standard page section frame. Set `id` on the host so navbar anchors can scroll to it.
 */
@Component({
  selector: 'app-section',
  host: { class: 'block' },
  template: `
    <app-container>
      <app-heading>{{ heading }}</app-heading>
      <app-hr></app-hr>
      <ng-content></ng-content>
    </app-container>
  `,
})
export class SectionComponent {
  @Input({ required: true }) heading!: string;
}
