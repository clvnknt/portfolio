import { Component, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  template: `
    <app-navbar></app-navbar>
    <div class="m-5 pl-5">
      <app-intro></app-intro>
      <app-about></app-about>
      <app-projects></app-projects>
      <app-certifications></app-certifications>
      <app-contact></app-contact>
      <app-footer></app-footer>
    </div>
  `,
})
export class AppComponent implements OnInit {
  title = 'portfolio';

  ngOnInit(): void {
    initFlowbite();
  }
}
