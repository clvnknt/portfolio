import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
  <app-container>
  <app-main-heading class="#about">About Me</app-main-heading>
  <app-hr></app-hr>
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
