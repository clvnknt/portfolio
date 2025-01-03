import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <app-container>
      <app-heading class="#about">About Me</app-heading>
      <app-hr></app-hr>
      <ol class="items-center sm:flex">
        <app-timelapse>
          <div title>
            Junior High School | Angeles University Foundation Integrated School
          </div>
          <div date>
            2015-2024
        </div>
        </app-timelapse>
        <app-timelapse>
          <div title>
            Senior High School | Angeles University Foundation Integrated School
          </div>
        </app-timelapse>
        <app-timelapse>
          <div title>College | Angeles University Foundation</div>
        </app-timelapse>
      </ol>
    </app-container>
  `,
})
export class AboutComponent {}
