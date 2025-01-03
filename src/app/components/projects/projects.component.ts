import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  template: `
    <app-container>
      <app-heading>Projects</app-heading>
      <app-hr></app-hr>

      <div class="lg:grid lg:grid-cols-4 lg:gap-2 grid border">
        <app-image-container
          src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/coming-soon-design-template-f531b29ca707c4d64f7deb8d5521b098_screen.jpg?ts=1680244313 "
        ></app-image-container>
        <app-image-container
          src="https://img.freepik.com/free-vector/coming-soon-construction-hanging-text-background_1017-37034.jpg "
        ></app-image-container>
        <app-image-container
          src="https://img.freepik.com/free-vector/coming-soon-construction-hanging-text-background_1017-37034.jpg "
        ></app-image-container>
        <app-image-container
          src="https://img.freepik.com/free-vector/coming-soon-construction-hanging-text-background_1017-37034.jpg "
        ></app-image-container>
      </div>
    </app-container>
  `,
})
export class ProjectsComponent {}
