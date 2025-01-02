import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
  <app-container>
    <ol class="items-center sm:flex">
      <app-card-folder></app-card-folder>
      <app-card-folder></app-card-folder>
      <app-card-folder></app-card-folder>
      <app-card-folder></app-card-folder>
      <app-card-folder></app-card-folder>
    </ol>
    </app-container>
  `
})
export class AboutComponent {

}
